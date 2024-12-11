import React from 'react';
import { motion } from 'framer-motion';
import { ChartBar, Robot, Clipboard, MessageSquare, Brain, Glasses } from 'lucide-react';

export default function SmartTools() {
  const tools = [
    {
      icon: <ChartBar className="w-8 h-8" />,
      title: "أدوات تحليل البيانات",
      description: "برامج متقدمة لتحليل البيانات الكبيرة واستكشاف الأنماط"
    },
    {
      icon: <Robot className="w-8 h-8" />,
      title: "أدوات أتمتة الأعمال",
      description: "روبوتات برمجية لتنفيذ المهام الروتينية بكفاءة عالية"
    },
    {
      icon: <Clipboard className="w-8 h-8" />,
      title: "أدوات إدارة المشاريع",
      description: "منصات ذكية لتتبع المهام وتنظيم فرق العمل"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "أدوات تحسين تجربة العملاء",
      description: "أنظمة دعم العملاء التفاعلية وحلول تخصيص الخدمات"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "أدوات الذكاء الاصطناعي",
      description: "تطبيقات لتوقع الطلبات وتحديد الفرص السوقية"
    }
  ];

  const features = [
    {
      title: "حلول مخصصة",
      description: "أدوات مصممة خصيصاً لتناسب احتياجاتك"
    },
    {
      title: "واجهة سهلة",
      description: "تصميم بسيط وسهل الوصول"
    },
    {
      title: "تكامل سلس",
      description: "تتوافق مع الأنظمة الموجودة لديك"
    },
    {
      title: "تحديثات مستمرة",
      description: "أحدث التقنيات لضمان الأداء الأمثل"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-6"
          >
            Bright AI: أدوات ذكية لتطوير أعمالك!
          </motion.h1>
          <p className="text-xl mb-8">
            استكشف مجموعة متكاملة من الأدوات الذكية المصممة لتحسين الأداء
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold"
          >
            ابدأ الآن
          </motion.button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">أدواتنا الذكية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 mb-4">{tool.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                <p className="text-gray-600">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">لماذا تختار Bright AI؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}