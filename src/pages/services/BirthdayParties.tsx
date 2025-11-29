import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Gift, Cake, Sparkles, Phone, PartyPopper } from 'lucide-react';

const BirthdayParties = () => {
  const features = [
    'Theme Development',
    'Entertainment Booking',
    'Catering Services',
    'Decoration Setup',
    'Party Favors',
    'Photography Services',
    'Music & DJ Services',
    'Activity Coordination'
  ];

  const serviceDetails = [
    {
      icon: Sparkles,
      title: 'Custom Theme Development',
      description: 'Every birthday deserves a celebration as unique as the guest of honor. We work with you to create a custom theme that reflects their personality, interests, and style. From superhero adventures and princess parties for kids to elegant vintage themes and tropical getaways for adults, our creative team brings any vision to life with cohesive decor, coordinated colors, and immersive details.',
      highlights: ['Theme consultation', 'Custom decorations', 'Color coordination', 'Props & backdrops']
    },
    {
      icon: PartyPopper,
      title: 'Entertainment & Activities',
      description: 'Keep guests engaged and entertained throughout the celebration with carefully curated entertainment options. We coordinate age-appropriate activities, from interactive games and craft stations for children to DJs, live bands, and photo booths for teens and adults. Our entertainment partners are professional, reliable, and committed to creating magical moments that guests will remember.',
      highlights: ['Professional entertainers', 'Interactive games', 'Music & DJ services', 'Photo booth experiences']
    },
    {
      icon: Cake,
      title: 'Catering & Cake Coordination',
      description: 'Delight your guests with delicious food and show-stopping cakes that match your party theme. We work with trusted caterers and bakeries to create menus that suit all dietary preferences and age groups. From kid-friendly finger foods and colorful treats to gourmet appetizers and signature cocktails, we handle all food service details including setup, presentation, and cleanup.',
      highlights: ['Menu planning', 'Cake design coordination', 'Dietary accommodations', 'Food presentation']
    },
    {
      icon: Gift,
      title: 'Complete Party Management',
      description: 'Relax and enjoy the celebration while we handle all the details. Our team manages invitations, guest RSVPs, vendor coordination, timeline execution, and on-site supervision. We set up decorations, coordinate entertainment schedules, manage gift tables, and ensure smooth transitions throughout the event. After the party, we handle complete cleanup so you can focus on spending time with your loved ones.',
      highlights: ['Invitation coordination', 'Guest management', 'Timeline execution', 'Setup & cleanup']
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
            backgroundImage: 'url(https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
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
              Birthday
              <span className="bg-gradient-to-r from-[#bfdbf7] to-[#e1e5f2] bg-clip-text text-transparent">
                {' '}Parties
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Memorable birthday celebrations for all ages, from intimate gatherings to grand milestone celebrations.
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
                Celebrate Life's Special Moments
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Birthdays are milestones worth celebrating in style. Whether it's a child's first birthday, a sweet sixteen, or a milestone adult celebration, we create magical experiences that reflect the personality and preferences of the birthday star.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From themed children's parties with entertainment and games to sophisticated adult celebrations with elegant décor and gourmet catering, we handle every detail to ensure the birthday celebration is unforgettable.
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
                  src="https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                  alt="Birthday party celebration"
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
              Complete Birthday Party
              <span className="bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] bg-clip-text text-transparent">
                {' '}Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrations tailored for all ages, from milestone birthdays to intimate gatherings
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
              <span>Plan Your Party</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us for Birthday Parties
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Gift className="h-8 w-8 text-[#1f7a8c]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Touch</h3>
              <p className="text-gray-600">Every party is customized to reflect the birthday person's personality and interests</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Cake className="h-8 w-8 text-[#1f7a8c]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sweet Memories</h3>
              <p className="text-gray-600">We create moments that will be cherished and remembered for years to come</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-[#1f7a8c]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Magical Experience</h3>
              <p className="text-gray-600">From setup to cleanup, we handle everything so you can enjoy the celebration</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1f7a8c] via-[#022b3a] to-[#1f7a8c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Plan an Amazing Birthday Party?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's create a birthday celebration that will be talked about for years to come.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-[#022b3a] px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Phone className="h-5 w-5" />
            <span>Start Planning</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BirthdayParties;