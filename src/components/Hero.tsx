import React from 'react';
import { Brain } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] mix-blend-overlay opacity-20"></div>
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-8">
            <Brain className="w-12 h-12" />
            <h1 className="text-5xl font-bold">Bright AI</h1>
          </div>
          <p className="text-xl mb-8 max-w-2xl">
            نقدم حلولاً ذكية ومبتكرة لتحويل أعمالك إلى المستقبل الرقمي
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
            ابدأ الآن
          </button>
        </div>
      </div>
    </div>
  );
}