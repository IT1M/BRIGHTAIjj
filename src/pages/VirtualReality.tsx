import React from 'react';
import { motion } from 'framer-motion';
import { Glasses, Smartphone, Gamepad, Code, Users, Brain } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';

export default function VirtualReality() {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "تطبيقات الواقع المعزز (AR)",
      features: [
        "تحسين تجربة التسوق عبر التطبيقات التفاعلية",
        "تدريب الموظفين باستخدام المحاكاة الواقعية",
        "تعزيز التسويق باستخدام تجارب غامرة"
      ]
    },
    {
      icon: <Glasses className="w-8 h-8" />,
      title: "تطبيقات الواقع الافتراضي (VR)",
      features: [
        "إنشاء عوالم افتراضية للتدريب والترفيه",
        "محاكاة واقعية للقطاعات الصناعية والطبية",
        "تجارب تعليمية متقدمة"
      ]
    }
  ];

  const tools = [
    {
      name: "Unity",
      description: "منصة تطوير لتطبيقات AR/VR"
    },
    {
      name: "Unreal Engine",
      description: "أداة قوية لإنشاء عوالم افتراضية"
    },
    {
      name: "AR.js",
      description: "مكتبة مفتوحة المصدر لتطوير AR"
    },
    {
      name: "OpenXR",
      description: "معيار مفتوح لدعم أجهزة VR/AR"
    }
  ];

  return (
    <div>
      <PageHeader
        title="حلول مبتكرة في الواقع المعزز والافتراضي"
        description="اكتشف عالماً جديداً من التجارب التفاعلية مع تقنيات AR و VR المتطورة"
        gradient="bg-gradient-to-r from-purple-600 to-pink-600"
      />

      <div className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">خدماتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="text-purple-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-purple-600 ml-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">أدوات وتقنيات</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                <p className="text-gray-600">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold mx-2"
          >
            اطلب عرضاً مخصصاً
          </motion.button>
        </section>
      </div>
    </div>
  );
}