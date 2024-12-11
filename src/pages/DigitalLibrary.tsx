import React from 'react';
import { motion } from 'framer-motion';
import { Book, Video, Code, Globe, BookOpen } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';

export default function DigitalLibrary() {
  const resources = [
    {
      icon: <Book className="w-8 h-8" />,
      title: "مصادر تعليمية شاملة",
      description: "دورات تدريبية، مواد تفاعلية، ومقاطع فيديو تعليمية"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "كتب إلكترونية وأبحاث",
      description: "مكتبة رقمية تحتوي على كتب ومقالات حديثة"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "أدوات تعليمية تفاعلية",
      description: "تطبيقات، اختبارات، ومحاكيات ذكية"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "محتوى مفتوح المصدر",
      description: "مصادر مجانية لدعم التعلم الذاتي"
    }
  ];

  const openSources = [
    {
      title: "Khan Academy",
      description: "دروس مجانية في الرياضيات والعلوم"
    },
    {
      title: "Coursera",
      description: "دورات تعليمية مفتوحة"
    },
    {
      title: "OpenAI Learning Resources",
      description: "تقنيات الذكاء الاصطناعي"
    },
    {
      title: "GitHub Resources",
      description: "أدوات تعليمية وبرمجية"
    }
  ];

  return (
    <div>
      <PageHeader
        title="المكتبة الرقمية الشاملة من Bright AI"
        description="اكتشف مجموعة واسعة من الموارد الرقمية المصممة لتلبية احتياجاتك التعليمية والمهنية"
        gradient="bg-gradient-to-r from-green-600 to-teal-600"
      />

      <div className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">مواردنا التعليمية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-green-600 mb-4">{resource.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8">موارد مفتوحة المصدر مميزة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openSources.map((source, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="text-green-600">✓</div>
                <div>
                  <h3 className="font-semibold mb-2">{source.title}</h3>
                  <p className="text-gray-600">{source.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold mx-2"
          >
            استكشف المكتبة
          </motion.button>
        </section>
      </div>
    </div>
  );
}