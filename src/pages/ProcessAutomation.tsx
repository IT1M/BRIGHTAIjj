import React from 'react';
import { Brain } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProcessAutomation() {
  const benefits = [
    {
      icon: "⚡",
      title: "زيادة الكفاءة",
      description: "أنجز المهام في وقت أقل وبدقة أعلى"
    },
    {
      icon: "🎯",
      title: "تقليل الأخطاء",
      description: "أداء دقيق ومستمر مع تقليل الأخطاء البشرية"
    },
    {
      icon: "💰",
      title: "خفض التكاليف",
      description: "وفر مواردك واستثمرها في تطوير عملك"
    }
  ];

  const successStories = [
    {
      company: "شركة X",
      achievement: "تقليل وقت معالجة الطلبات بنسبة 80%"
    },
    {
      company: "شركة Y",
      achievement: "تحقيق دقة 99% في العمليات المحاسبية"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-6"
          >
            أتمتة العمليات مع Bright AI: حوّل أعمالك نحو المستقبل!
          </motion.h1>
          <p className="text-xl mb-8">قل وداعًا للمهام اليدوية المتكررة مع حلول Bright AI الذكية لأتمتة العمليات</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold"
          >
            ابدأ الآن
          </motion.button>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">الفوائد الأساسية</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">قصص النجاح</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-gray-50 p-8 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4">{story.company}</h3>
                <p className="text-gray-600">{story.achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">خذ الخطوة الأولى نحو المستقبل</h2>
          <p className="text-xl mb-8">تواصل معنا للحصول على استشارة مجانية</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold"
          >
            تحدث مع خبير
          </motion.button>
        </div>
      </section>
    </div>
  );
}