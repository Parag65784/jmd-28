import React, { useState } from 'react';
import { Calendar, Users, Award, Target, Shield, Zap } from 'lucide-react';

const FeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      icon: Calendar,
      title: 'Expert Planning',
      description: 'Meticulous planning and coordination for flawless execution',
      color: 'from-blue-400 to-cyan-500',
      lightColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Users,
      title: 'Professional Team',
      description: 'Experienced professionals dedicated to your event success',
      color: 'from-[#1f7a8c] to-teal-500',
      lightColor: 'from-teal-50 to-cyan-50'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized excellence in event management industry',
      color: 'from-amber-400 to-orange-500',
      lightColor: 'from-amber-50 to-orange-50'
    },
    {
      icon: Target,
      title: 'Goal Oriented',
      description: 'Every detail aligned with your vision and objectives',
      color: 'from-emerald-400 to-green-500',
      lightColor: 'from-emerald-50 to-green-50'
    },
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'Complete protection and peace of mind for your event',
      color: 'from-indigo-400 to-blue-500',
      lightColor: 'from-indigo-50 to-blue-50'
    },
    {
      icon: Zap,
      title: 'Fast Response',
      description: '24/7 support with rapid response to all your needs',
      color: 'from-violet-400 to-purple-500',
      lightColor: 'from-violet-50 to-purple-50'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#bfdbf7] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#e1e5f2] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-6 py-2 bg-gradient-to-r from-[#bfdbf7] to-[#e1e5f2] text-[#022b3a] rounded-full text-sm font-semibold tracking-wide uppercase">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Excellence in Every
            <span className="bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] bg-clip-text text-transparent">
              {' '}Detail
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine creativity, expertise, and passion to deliver exceptional events that exceed expectations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1f7a8c]/10 to-[#022b3a]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-[#bfdbf7] overflow-hidden transform group-hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#bfdbf7]/20 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.lightColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm group-hover:shadow-lg`}>
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500`}>
                      <feature.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1f7a8c] transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  <div className={`mt-6 h-1 bg-gradient-to-r ${feature.color} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#1f7a8c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {hoveredIndex === index && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                    <div className="absolute top-0 left-0 w-2 h-2 bg-[#1f7a8c] rounded-full animate-ping"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 bg-[#1f7a8c] rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#1f7a8c] rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#1f7a8c] rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white rounded-full shadow-md border border-gray-100">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1f7a8c] to-teal-500 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-2 border-white"></div>
            </div>
            <p className="text-gray-700 font-semibold">
              Trusted by <span className="text-[#1f7a8c]">500+</span> satisfied clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
