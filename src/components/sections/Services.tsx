import React from 'react';
import { Brain, Database, LineChart, Library, Lightbulb, Glasses, MessageSquare, Boxes } from 'lucide-react';
import ServiceCard from '../ServiceCard';

export default function Services() {
  const services = [
    {
      icon: <Boxes className="w-8 h-8" />,
      title: "أتمتة العمليات",
      description: "حلول متطورة لأتمتة العمليات التجارية وتحسين الكفاءة التشغيلية"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "تحليل البيانات",
      description: "تحليل متعمق للبيانات لاتخاذ قرارات مدروسة وفعالة"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "الاستشارات",
      description: "خدمات استشارية متخصصة في مجال الذكاء الاصطناعي والتحول الرقمي"
    },
    {
      icon: <Library className="w-8 h-8" />,
      title: "المكتبة الرقمية",
      description: "مصادر تعليمية وموارد رقمية متنوعة"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "أدوات ذكية",
      description: "مجموعة متكاملة من الأدوات الذكية لتطوير الأعمال"
    },
    {
      icon: <Glasses className="w-8 h-8" />,
      title: "الواقع المعزز والافتراضي",
      description: "حلول متقدمة في تقنيات الواقع المعزز والافتراضي"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">خدماتنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}