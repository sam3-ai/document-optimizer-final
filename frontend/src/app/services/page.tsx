'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, Zap, TrendingUp, Search, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'AI Text Humanizer',
    description: 'Transform AI-generated content into natural, human-like text that bypasses AI detection tools.',
    features: ['Bypass AI detection', 'Maintain original meaning', 'Multiple humanization levels', 'Instant processing'],
    color: 'from-purple-500 to-pink-500',
    link: '/services/humanizer',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Prompt Optimizer',
    description: 'Enhance your AI prompts for better, more accurate results with intelligent refinement.',
    features: ['Category-specific optimization', 'Context enhancement', 'Format suggestions', 'Best practices'],
    color: 'from-blue-500 to-cyan-500',
    link: '/services/prompt-optimizer',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Readability Analyzer',
    description: "Analyze and improve your content's readability score for better audience engagement.",
    features: ['Readability scoring', 'Grade level analysis', 'Improvement suggestions', 'Text statistics'],
    color: 'from-green-500 to-emerald-500',
    link: '/services/readability',
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Keyword Density Checker',
    description: 'Optimize your content for SEO with comprehensive keyword analysis and density checking.',
    features: ['Keyword density analysis', 'SEO recommendations', 'Word frequency', 'Optimization tips'],
    color: 'from-orange-500 to-red-500',
    link: '/services/keyword-checker',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Powerful AI-powered tools to optimize your documents and content for better results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={service.link}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer h-full">
                    <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                    <div className="p-8">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                        Try Now
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Create a free account and start optimizing your content today.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Create Free Account
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
