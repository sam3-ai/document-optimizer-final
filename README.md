# Document Optimizer

A comprehensive full-stack document management system with advanced analytics dashboard, built with **Next.js (TypeScript)** frontend and **Node.js** backend.

## 🚀 Features

### 🔐 Authentication & User Management
- User Registration with Client-side & Server-side Validation
- Data Storage in MongoDB Database
- User Login Authentication
- JWT Token-based Authentication with Auto-refresh
- Password Encryption with bcrypt
- Protected Routes with AuthContext
- User Profile Management
- Password Change Functionality

### 📊 Dashboard & Analytics
- Real-time Dashboard with Live Statistics
- Interactive Charts (Line, Area, Bar, Pie) using Recharts
- Document Upload Trends Analysis
- File Type Distribution Analytics
- User Activity Monitoring
- Real-time Backend Health Monitoring
- CountUp Animations for Statistics
- Responsive Dashboard Layout

### 📄 Document Management System
- File Upload with Drag & Drop Interface
- Multi-file Upload Support
- Document CRUD Operations (Create, Read, Update, Delete)
- Document Categories (Document, Image, Video, Audio, Other)
- File Type Detection and Validation
- Document Tagging System
- File Size Formatting and Validation
- Document Status Management
- Bulk Document Operations
- Document Search and Filtering
- Document Details View
- Upload Progress Tracking

### 🤖 AI-Powered Services
- **AI Text Humanizer**: Transform AI-generated content into natural, human-like text
- **Prompt Optimizer**: Enhance AI prompts for better results
- **Readability Analyzer**: Analyze and improve content readability scores
- **Keyword Density Checker**: SEO optimization with keyword analysis

### 👥 Advanced User Management
- Complete User CRUD Operations
- User List with Pagination
- User Search and Filtering
- Bulk User Operations
- User Status Management
- User Profile Updates
- Real-time User Statistics

### 🎨 UI/UX Features
- Modern Next.js App Router with TypeScript
- Responsive Design with Tailwind CSS
- Framer Motion Animations
- Loading Spinners and Progress Indicators
- Toast Notifications System (react-hot-toast)
- Professional Gradient Designs
- Icon Integration (Lucide React, React Icons)
- Form Validation with Real-time Feedback

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling
- **Framer Motion** for animations
- **Recharts** for analytics charts
- **React CountUp** for statistics
- **Lucide React & React Icons** for icons
- **Axios** for HTTP requests
- **react-hot-toast** for notifications
- **jwt-decode** for token handling

### Backend
- **Node.js** & **Express.js**
- **MongoDB** with Mongoose ODM
- **Multer** for file upload handling
- **bcrypt** for password hashing
- **JWT** for authentication
- **express-validator** for input validation
- **CORS** for cross-origin requests

## 📁 Project Structure

```
document-optimizer-final/
├── BackEnd-Project/              # Node.js Backend
│   ├── models/
│   │   ├── User.js              # User MongoDB Model
│   │   └── Document.js          # Document MongoDB Model
│   ├── myFiles/                 # API Routes
│   │   ├── register.js          # Registration API
│   │   ├── auth.js              # Authentication API
│   │   ├── users.js             # User Management CRUD
│   │   ├── documents.js         # Document Management CRUD
│   │   └── analytics.js         # Analytics & Statistics API
│   ├── middleware/
│   │   └── auth.js              # JWT Authentication Middleware
│   ├── uploads/                 # File Upload Directory
│   ├── db.js                    # Database Connection
│   ├── index.js                 # Main Server File
│   └── package.json
│
└── frontend/                     # Next.js TypeScript Frontend
    ├── src/
    │   ├── app/                 # Next.js App Router Pages
    │   │   ├── page.tsx         # Home Page
    │   │   ├── layout.tsx       # Root Layout
    │   │   ├── providers.tsx    # Context Providers
    │   │   ├── globals.css      # Global Styles
    │   │   ├── login/           # Login Page
    │   │   ├── signup/          # Signup Page
    │   │   ├── forgot-password/ # Password Recovery
    │   │   ├── dashboard/       # Dashboard & Upload
    │   │   ├── documents/[id]/  # Document Details (Dynamic)
    │   │   ├── services/        # AI Services Pages
    │   │   │   ├── humanizer/
    │   │   │   ├── prompt-optimizer/
    │   │   │   ├── readability/
    │   │   │   └── keyword-checker/
    │   │   ├── about/           # About Page
    │   │   └── contact/         # Contact Page
    │   ├── components/          # Reusable Components
    │   │   ├── Navbar.tsx
    │   │   ├── Footer.tsx
    │   │   ├── DocumentManagement.tsx
    │   │   ├── UserManagement.tsx
    │   │   ├── HealthBadge.tsx
    │   │   ├── auth/
    │   │   │   └── ProtectedRoute.tsx
    │   │   └── ui/
    │   │       └── LoadingSpinner.tsx
    │   ├── contexts/
    │   │   └── AuthContext.tsx  # Authentication Context
    │   ├── services/
    │   │   └── api.ts           # API Service with Types
    │   └── utils/               # Utility Functions
    │       ├── charLength.ts
    │       ├── isAlphabetOnly.ts
    │       ├── regEmailTest.ts
    │       └── sanitizeInput.ts
    ├── package.json
    ├── next.config.ts
    ├── tailwind.config.ts
    └── tsconfig.json
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- MongoDB running locally or MongoDB Atlas connection
- npm or yarn package manager

### Backend Setup
```bash
cd BackEnd-Project
npm install
# Create .env file with your MongoDB URI and JWT secret
node index.js
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:3000`

## 🔧 Environment Variables

### Backend (.env)
```env
MONGO_URI=mongodb://localhost:27017/documentOptimizer
JWT_SECRET=your-secret-key-here
PORT=5000
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
```

## 🔗 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/register` | User registration |
| POST | `/api/login` | User login |
| POST | `/api/logout` | User logout |
| POST | `/api/refresh` | Refresh JWT token |
| GET | `/api/profile` | Get user profile |
| PUT | `/api/profile` | Update user profile |
| PUT | `/api/change-password` | Change password |

### User Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users (paginated) |
| GET | `/api/users/:id` | Get specific user |
| PUT | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Delete user |

### Document Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/documents/upload` | Upload document(s) |
| GET | `/api/documents` | Get all documents |
| GET | `/api/documents/:id` | Get specific document |
| PUT | `/api/documents/:id` | Update document |
| DELETE | `/api/documents/:id` | Delete document |

### Analytics
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/documents/analytics/stats` | Document statistics |
| GET | `/api/documents/analytics/trends` | Upload trends |

### Health Check
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Basic health check |
| GET | `/health/detailed` | Detailed health info |

## 📱 Pages & Routes

| Route | Description | Auth Required |
|-------|-------------|---------------|
| `/` | Home page with features overview | No |
| `/login` | User login | No |
| `/signup` | User registration | No |
| `/forgot-password` | Password recovery | No |
| `/dashboard` | Main dashboard with analytics | Yes |
| `/dashboard/upload` | Document upload page | Yes |
| `/documents/[id]` | Document details | Yes |
| `/services` | AI services overview | No |
| `/services/humanizer` | AI Text Humanizer | No |
| `/services/prompt-optimizer` | Prompt Optimizer | No |
| `/services/readability` | Readability Analyzer | No |
| `/services/keyword-checker` | Keyword Density Checker | No |
| `/about` | About page | No |
| `/contact` | Contact page | No |

## 💾 Database Schema

### User Model
```typescript
{
  firstName: string;      // 2-35 chars, letters only
  lastName: string;       // 2-35 chars, letters only
  email: string;          // unique, validated
  password: string;       // bcrypt hashed
  country: string;
  agreeToTerms: boolean;
  role: 'user' | 'admin';
  status: 'active' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
}
```

### Document Model
```typescript
{
  title: string;          // max 200 chars
  description?: string;   // max 1000 chars
  filename: string;       // system generated
  originalName: string;   // user uploaded name
  mimeType: string;
  size: number;           // in bytes
  path: string;           // file system path
  uploadedBy: ObjectId;   // ref: User
  category: 'document' | 'image' | 'video' | 'audio' | 'other';
  tags: string[];
  status: 'active' | 'archived' | 'deleted';
  isPublic: boolean;
  downloadCount: number;
  createdAt: Date;
  updatedAt: Date;
}
```

## 🔒 Security Features

- JWT-based authentication with auto-refresh
- Password hashing with bcrypt
- Protected routes on frontend and backend
- Input validation (client & server-side)
- File type validation for uploads
- CORS configuration
- Secure token storage

## 🎯 Key Features

### Complete CRUD Operations
- **Users**: Create, Read, Update, Delete with bulk operations
- **Documents**: Full lifecycle management with file uploads
- **Analytics**: Real-time statistics and trend analysis

### Advanced UI Components
- **Interactive Dashboard**: Charts, statistics, and live data
- **File Upload Interface**: Drag & drop with progress tracking
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animations**: Smooth transitions with Framer Motion

## 📝 Scripts

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Backend
```bash
npm start        # Start server
npm run dev      # Start with nodemon (if configured)
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Document Optimizer - A modern document management system with AI-powered tools.
