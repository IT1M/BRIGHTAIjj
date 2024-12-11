import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "أحمد محمد",
      role: "مدير تقني",
      company: "شركة التقنية المتقدمة",
      content: "ساعدتنا Bright AI في تحسين عملياتنا بشكل كبير. النتائج كانت مذهلة!",
      rating: 5
    },
    {
      name: "سارة عبدالله",
      role: "مديرة المشاريع",
      company: "مجموعة الابتكار",
      content: "فريق محترف وخدمات متميزة. أوصي بهم بشدة لأي شركة تتطلع للتحول الرقمي.",
      rating: 5
    }
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">آراء عملائنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}