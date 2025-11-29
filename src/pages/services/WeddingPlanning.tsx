import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Heart, Camera, Music, Phone, Sparkles, MapPin } from 'lucide-react';

const WeddingPlanning = () => {
  const features = [
    'Venue Selection & Booking',
    'Vendor Coordination',
    'Timeline Management',
    'Day-of Coordination',
    'Bridal Party Support',
    'Guest Management',
    'Decoration & Styling',
    'Photography Coordination'
  ];

  const serviceDetails = [
    {
      icon: MapPin,
      title: 'Venue & Vendor Selection',
      description: 'Finding the perfect venue sets the foundation for your dream wedding. We leverage our extensive network of premium venues and trusted vendors to match you with options that fit your vision, style, and budget. From romantic garden settings to elegant ballrooms, we guide you through every option and handle all negotiations, contracts, and communications on your behalf.',
      highlights: ['Venue scouting', 'Vendor referrals', 'Contract negotiation', 'Site visits']
    },
    {
      icon: Sparkles,
      title: 'Design & Styling Services',
      description: 'Transform your wedding vision into a breathtaking reality with our expert design services. Our creative team works closely with you to develop a cohesive aesthetic that reflects your personality and love story. From color palettes and floral arrangements to table settings and lighting design, we create an immersive experience that wows your guests and creates picture-perfect moments.',
      highlights: ['Custom design concepts', 'Floral design', 'Lighting planning', 'Decor coordination']
    },
    {
      icon: Heart,
      title: 'Comprehensive Timeline Management',
      description: 'A well-organized timeline is crucial for a stress-free wedding day. We create detailed schedules that coordinate every element of your celebration, from getting ready to the grand exit. Our team manages vendor arrival times, ceremony proceedings, photo sessions, and reception events to ensure everything flows seamlessly. You will receive a comprehensive timeline that keeps everyone on track.',
      highlights: ['Master timeline', 'Vendor schedules', 'Ceremony coordination', 'Reception flow']
    },
    {
      icon: Camera,
      title: 'Day-of Coordination & Support',
      description: 'On your wedding day, our experienced coordinators take care of every detail so you can be fully present in each moment. We manage vendor setup, coordinate the bridal party, troubleshoot any issues that arise, and ensure your timeline stays on track. From the first look to the last dance, we are there to handle logistics while you celebrate with your loved ones.',
      highlights: ['On-site coordination', 'Vendor management', 'Problem solving', 'Guest assistance']
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#1f7a8c] via-[#022b3a] to-[#1f7a8c] overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Services</span>
          </Link>
          
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Wedding
              <span className="bg-gradient-to-r from-[#bfdbf7] to-[#e1e5f2] bg-clip-text text-transparent">
                {' '}Planning
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Create the wedding of your dreams with our comprehensive planning services that turn your vision into a perfect reality.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Your Perfect Day Awaits
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Your wedding day should be everything you've dreamed of and more. Our experienced wedding planners work closely with you to understand your vision, style, and budget to create a celebration that's uniquely yours.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From intimate ceremonies to grand celebrations, we handle every detail with care and precision, allowing you to enjoy your engagement and wedding day stress-free.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                  alt="Beautiful wedding setup"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Wedding
              <span className="bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] bg-clip-text text-transparent">
                {' '}Planning Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial planning to your last dance, we handle every detail of your perfect day
            </p>
          </div>

          <div className="space-y-12">
            {serviceDetails.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className="lg:w-1/3">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <service.icon className="h-12 w-12 text-[#1f7a8c]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                </div>
                <div className="lg:w-2/3">
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {service.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Phone className="h-5 w-5" />
              <span>Schedule Consultation</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us for Your Wedding
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-[#1f7a8c]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Passionate Care</h3>
              <p className="text-gray-600">We treat your wedding as if it were our own, with love and attention to every detail</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Camera className="h-8 w-8 text-[#1f7a8c]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Picture Perfect</h3>
              <p className="text-gray-600">Every moment is designed to be Instagram-worthy and memorable</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Music className="h-8 w-8 text-[#1f7a8c]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Seamless Experience</h3>
              <p className="text-gray-600">From ceremony to reception, everything flows perfectly</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1f7a8c] via-[#022b3a] to-[#1f7a8c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Plan Your Dream Wedding?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's start planning the most important day of your life. Schedule a consultation today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-[#022b3a] px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Phone className="h-5 w-5" />
            <span>Schedule Consultation</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WeddingPlanning; 