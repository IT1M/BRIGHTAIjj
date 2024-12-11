import React from 'react';
import { Users, Building, Globe } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "١٠٠٠+",
      label: "عميل"
    },
    {
      icon: <Building className="w-8 h-8" />,
      value: "٥٠+",
      label: "مشروع"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: "١٥+",
      label: "دولة"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
          <div className="flex justify-center text-blue-600 mb-4">
            {stat.icon}
          </div>
          <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
          <div className="text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}