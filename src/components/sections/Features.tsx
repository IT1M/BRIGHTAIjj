import { motion } from 'framer-motion';
import { Zap, Shield, Cpu, Cloud } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "سرعة الأداء",
      description: "حلول سريعة وفعالة لتحسين كفاءة عملك"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "الأمان المتقدم",
      description: "حماية متكاملة لبياناتك ومعلوماتك"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "معالجة ذكية",
      description: "خوارزميات متقدمة للتحليل والتنبؤ"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "حلول سحابية",
      description: "خدمات سحابية متكاملة وموثوقة"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">مميزاتنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}