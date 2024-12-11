import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description: string;
  gradient?: string;
}

export default function PageHeader({ 
  title, 
  description, 
  gradient = "bg-gradient-to-r from-blue-600 to-indigo-700"
}: PageHeaderProps) {
  return (
    <header className={`${gradient} text-white py-20`}>
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          {title}
        </motion.h1>
        <p className="text-xl mb-8">{description}</p>
      </div>
    </header>
  );
}