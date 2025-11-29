import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Users, Heart, Sparkles, Phone, Calendar } from 'lucide-react';

const SocialGatherings = () => {
  const features = [
    'Reunion Planning',
    'Holiday Parties',
    'Networking Events',
    'Charity Galas',
    'Anniversary Celebrations',
    'Graduation Parties',
    'Retirement Celebrations',
    'Community Events'
  ];

  const serviceDetails = [
    {
      icon: Heart,
      title: 'Community & Reunion Events',
      description: 'Bring people back together with thoughtfully planned reunions and community gatherings. Whether it is a family reunion, high school reunion, or neighborhood celebration, we create welcoming environments that encourage connection and reminiscing. Our team handles venue selection, invitation design, activity planning, and all logistics to ensure your gathering strengthens bonds and creates new memories while honoring shared history.',
      highlights: ['Reunion planning', 'Family gatherings', 'Community events', 'Memory displays']
    },
    {
      icon: Sparkles,
      title: 'Charity & Fundraising Galas',
      description: 'Maximize impact and donations with professionally executed charity events and fundraising galas. We understand the unique requirements of nonprofit events and create experiences that inspire generosity while celebrating your mission. From silent auctions and live entertainment to donor recognition and program coordination, we help you create meaningful events that engage supporters and achieve fundraising goals.',
      highlights: ['Fundraising strategy', 'Auction management', 'Donor engagement', 'Program coordination']
    },
    {
      icon: Calendar,
      title: 'Milestone Celebrations',
      description: 'Honor life achievements and special milestones with personalized celebrations that reflect the significance of the occasion. Whether it is a retirement party, anniversary celebration, graduation party, or achievement recognition, we create elegant events that properly celebrate accomplishments. Our team designs custom themes, coordinates tributes and speeches, and ensures every detail reflects the honor and joy of the milestone being celebrated.',
      highlights: ['Anniversary parties', 'Retirement celebrations', 'Graduation events', 'Achievement awards']
    },
    {
      icon: Users,
      title: 'Networking & Social Mixers',
      description: 'Facilitate meaningful professional connections through well-designed networking events and social mixers. We create environments that encourage conversation and relationship building, from structured networking sessions to casual cocktail receptions. Our services include strategic planning, attendee engagement activities, digital networking tools, and follow-up coordination to ensure connections made at your event lead to lasting professional relationships.',
      highlights: ['Professional networking', 'Industry mixers', 'Engagement activities', 'Connection facilitation']
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
            backgroundImage: 'url(https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
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
              Social
              <span className="bg-gradient-to-r from-[#bfdbf7] to-[#e1e5f2] bg-clip-text text-transparent">
                {' '}Gatherings
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Bring people together with perfectly orchestrated social events that create lasting connections and cherished memories.
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
                Connect, Celebrate, Create Memories
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Social gatherings are about bringing people together to celebrate life's moments, build relationships, and create lasting memories. Whether it's a family reunion, charity gala, or community celebration, we craft experiences that foster genuine connections.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our approach focuses on creating warm, welcoming atmospheres where guests feel comfortable and engaged. From intimate dinner parties to large-scale galas, we handle every detail to ensure your social event is both meaningful and memorable.
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
                  src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                  alt="Social gathering event"
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
              Social Gathering
              <span className="bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] bg-clip-text text-transparent">
                {' '}Specializations
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating connections and celebrating communities through thoughtfully designed events
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
              <span>Plan Your Gathering</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us for Social Gatherings
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-[#1f7a8c]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Focus</h3>
              <p className="text-gray-600">We understand the importance of bringing people together and creating inclusive experiences</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-[#1f7a8c]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Heartfelt Connections</h3>
              <p className="text-gray-600">Every event is designed to foster genuine connections and meaningful interactions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-[#1f7a8c]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Memorable Moments</h3>
              <p className="text-gray-600">We create special touches that make your gathering truly unforgettable</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1f7a8c] via-[#022b3a] to-[#1f7a8c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Bring People Together?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's create a social gathering that strengthens relationships and creates lasting memories.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-[#022b3a] px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Phone className="h-5 w-5" />
            <span>Plan Your Gathering</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SocialGatherings;    