import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Database, TrendingUp, BrainCircuit } from 'lucide-react';

export default function DataAnalysis() {
  const services = [
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "تحليل البيانات الوصفية",
      description: "فهم ما حدث في الماضي"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "تحليل البيانات التشخيصية",
      description: "تحديد أسباب التغيرات"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "تحليل البيانات التنبؤية",
      description: "استشراف المستقبل بناءً على الأنماط"
    },
    {
      icon: <BrainCircuit className="w-8 h-8" />,
      title: "تحليل البيانات الموصي بها",
      description: "تقديم حلول مستندة إلى البيانات"
    }
  ];

  const benefits = [
    "اتخاذ قرارات مدروسة: بناء استراتيجيات على حقائق وأرقام دقيقة",
    "زيادة الكفاءة: تحديد النقاط التي تحتاج إلى تحسين",
    "تعزيز النمو: استكشاف فرص جديدة باستخدام رؤى عميقة",
    "التخصيص: تخصيص التجارب والخدمات للعملاء بناءً على بياناتهم"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-purple-600 to-teal-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-6"
          >
            تحليل البيانات مع Bright AI: قرارات أفضل بمساعدة البيانات!
          </motion.h1>
          <p className="text-xl">
            اكتشف قوة البيانات مع حلول Bright AI المتقدمة لتحليل البيانات
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">خدماتنا التحليلية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-purple-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8">فوائد تحليل البيانات مع Bright AI</h2>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center text-gray-700"
              >
                <span className="text-purple-600 ml-2">✓</span>
                {benefit}
              </motion.li>
            ))}
          </ul>
        </section>

        <section className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold mx-2"
          >
            ابدأ الآن
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-teal-500 text-white px-8 py-3 rounded-full font-semibold mx-2"
          >
            احجز استشارة مجانية
          </motion.button>
        </section>
      </div>
    </div>
  );
}