'use client';

import { motion } from 'framer-motion';
import { Users, Target, Award, Heart } from 'lucide-react';

const team = [
  { name: 'Samreen', role: 'CEO & Founder', image: 'A' },
  { name: 'Maida', role: 'CTO', image: 'S' },
  { name: 'Ajwa Shahid', role: 'Developer', image: 'M' },
  { name: 'Phuspa', role: 'Chicken roll', image: 'E' },
];

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Innovation',
    description: 'We constantly push the boundaries of what AI can do for content optimization.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'User-Centric',
    description: 'Every feature we build starts with understanding our users needs.',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from code to customer service.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Integrity',
    description: 'We believe in transparent, ethical AI that respects user privacy.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">About Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We&apos;re on a mission to make AI-powered content optimization accessible to everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Document Optimizer was founded in 2023 with a simple idea: make powerful AI tools accessible to
                everyone. We saw how AI was transforming content creation but noticed that many tools were either too
                complex or too expensive for everyday users.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of AI researchers, developers, and content experts came together to build a platform that
                combines cutting-edge technology with an intuitive user experience.
              </p>
              <p className="text-gray-600">
                Today, we serve thousands of users worldwide, helping them create better content, optimize their
                documents, and achieve their goals.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8"
            >
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-blue-600">10K+</div>
                  <div className="text-gray-600">Active Users</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600">50K+</div>
                  <div className="text-gray-600">Documents Processed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600">99.9%</div>
                  <div className="text-gray-600">Uptime</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600">4.9/5</div>
                  <div className="text-gray-600">User Rating</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The people behind Document Optimizer</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-4">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
