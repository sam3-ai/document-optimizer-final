import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000',
  timeout: parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || '10000'),
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshResponse = await api.post('/api/refresh');
        const newToken = refreshResponse.data.token;
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', newToken);
        }
        
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);
      } catch {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('token');
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

// Types
export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  country?: string;
  name?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface Document {
  _id: string;
  title: string;
  description?: string;
  originalName: string;
  filename: string;
  mimeType: string;
  size: number;
  path: string;
  uploadedBy?: User;
  category: string;
  tags?: string[];
  status: string;
  isPublic: boolean;
  downloadCount: number;
  createdAt: string;
  updatedAt?: string;
  fileType?: string;
}

export interface HealthStatus {
  status: string;
  services: {
    server: { status: string; message?: string };
    database: { status: string; message?: string };
  };
  system?: {
    uptime: number;
    memory?: { usagePercent: number };
  };
}

export interface DocumentStats {
  stats: {
    totalDocuments: number;
    archivedDocuments: number;
    totalSize: number;
    recentUploads: Document[];
  };
}

export interface DocumentTrends {
  series: Array<{ month: string; uploads: number; storage: number }>;
}

// Auth API functions
export const registerUser = async (userData: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  country?: string;
  agreeToTerms: boolean;
}) => {
  const response = await api.post('/api/register', userData);
  return response.data;
};

export const loginUser = async (credentials: { email: string; password: string }) => {
  const response = await api.post('/api/login', credentials);
  return response.data;
};

export const logoutUser = async () => {
  const response = await api.post('/api/logout');
  return response.data;
};

export const getProfile = async () => {
  const response = await api.get('/api/profile');
  return response.data;
};

export const refreshToken = async () => {
  const response = await api.post('/api/refresh');
  return response.data;
};

// Health API functions
export const getHealth = async (): Promise<HealthStatus> => {
  const response = await api.get('/health');
  return response.data;
};

export const getDetailedHealth = async () => {
  const response = await api.get('/health/detailed');
  return response.data;
};

// User API functions
export const updateProfile = async (userData: Partial<User>) => {
  const response = await api.put('/api/profile', userData);
  return response.data;
};

export const changePassword = async (passwordData: { currentPassword: string; newPassword: string }) => {
  const response = await api.put('/api/change-password', passwordData);
  return response.data;
};

// User Management API functions
export const getAllUsers = async () => {
  const response = await api.get('/api/users');
  return response.data;
};

export const getUser = async (id: string) => {
  const response = await api.get(`/api/users/${id}`);
  return response.data;
};

export const updateUser = async (id: string, userData: Partial<User>) => {
  const response = await api.put(`/api/users/${id}`, userData);
  return response.data;
};

export const deleteUser = async (id: string) => {
  const response = await api.delete(`/api/users/${id}`);
  return response.data;
};

export const bulkDeleteUsers = async (criteria: string) => {
  const response = await api.delete(`/api/bulk/${criteria}`);
  return response.data;
};

export const bulkUpdateUsers = async (criteria: string, userData: Partial<User>) => {
  const response = await api.put(`/api/bulk/${criteria}`, userData);
  return response.data;
};

// Document API functions
export const uploadDocument = async (formData: FormData) => {
  const response = await api.post('/api/documents/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const getDocuments = async (params: {
  page?: number;
  limit?: number;
  status?: string;
  search?: string;
  sortBy?: string;
  sortOrder?: string;
} = {}) => {
  const response = await api.get('/api/documents', { params });
  return response.data;
};

export const getDocument = async (id: string) => {
  const response = await api.get(`/api/documents/${id}`);
  return response.data;
};

export const updateDocument = async (id: string, data: Partial<Document>) => {
  const response = await api.put(`/api/documents/${id}`, data);
  return response.data;
};

export const deleteDocument = async (id: string) => {
  const response = await api.delete(`/api/documents/${id}`);
  return response.data;
};

export const updateDocumentStatus = async (id: string, status: string) => {
  const response = await api.patch(`/api/documents/${id}/status`, { status });
  return response.data;
};

export const bulkDeleteDocuments = async (criteria: string, data?: unknown) => {
  const response = await api.delete(`/api/documents/bulk/${criteria}`, { data });
  return response.data;
};

export const getDocumentStats = async (): Promise<DocumentStats> => {
  const response = await api.get('/api/documents/analytics/stats');
  return response.data;
};

export const getDocumentTrends = async (months = 6): Promise<DocumentTrends> => {
  const response = await api.get(`/api/documents/analytics/trends?months=${months}`);
  return response.data;
};

// Analytics API functions
export const getDashboardStats = async () => {
  const response = await api.get('/api/analytics/dashboard');
  return response.data;
};

export const getUsageStats = async (period = '7d') => {
  const response = await api.get(`/api/analytics/usage?period=${period}`);
  return response.data;
};

export default api;
