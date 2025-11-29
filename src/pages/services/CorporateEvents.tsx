import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Users, Award, Phone, Building2, Target, TrendingUp } from 'lucide-react';

const CorporateEvents = () => {
  const features = [
    'Conference Management',
    'Team Building Events',
    'Product Launches',
    'Executive Retreats',
    'Board Meetings',
    'Company Celebrations',
    'Training Workshops',
    'Networking Events'
  ];

  const serviceDetails = [
    {
      icon: Building2,
      title: 'Strategic Planning & Execution',
      description: 'We begin with a comprehensive consultation to understand your business objectives, target audience, and desired outcomes. Our team develops a strategic plan that aligns your event with your corporate goals, ensuring every element contributes to your success. From venue selection to vendor coordination, we handle all logistics with military precision, allowing you to focus on what matters most.',
      highlights: ['Goal-oriented planning', 'Budget optimization', 'Risk management', 'Timeline development']
    },
    {
      icon: Users,
      title: 'Professional Event Production',
      description: 'Transform your corporate vision into reality with our full-service production capabilities. We manage everything from stage design and audiovisual requirements to lighting and technical support. Our experienced production team ensures flawless execution, whether you are hosting an intimate board meeting or a large-scale conference with thousands of attendees.',
      highlights: ['Advanced AV systems', 'Professional staging', 'Technical support team', 'Live streaming capabilities']
    },
    {
      icon: Target,
      title: 'Brand Integration & Customization',
      description: 'Every corporate event is an opportunity to strengthen your brand presence. We seamlessly integrate your brand identity throughout the event experience, from custom signage and branded materials to digital presentations and social media content. Our design team creates cohesive visual elements that reinforce your brand message and create lasting impressions on attendees.',
      highlights: ['Custom branding', 'Collateral design', 'Digital integration', 'Photo opportunities']
    },
    {
      icon: TrendingUp,
      title: 'Post-Event Analytics & Follow-up',
      description: 'Measure the success of your corporate event with comprehensive post-event analysis. We provide detailed reports on attendee engagement, ROI metrics, and feedback analysis to help you understand the impact of your investment. Our team also assists with follow-up communications, ensuring you maintain momentum and capitalize on the connections made during your event.',
      highlights: ['Success metrics', 'Attendee surveys', 'ROI analysis', 'Follow-up strategy']
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
            backgroundImage: 'url(https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
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
              Corporate
              <span className="bg-gradient-to-r from-[#bfdbf7] to-[#e1e5f2] bg-clip-text text-transparent">
                {' '}Events
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Professional corporate events that leave lasting impressions on your clients and strengthen your business relationships.
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
                Elevate Your Business Events
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                From intimate board meetings to large-scale conferences, we specialize in creating corporate events that reflect your brand's professionalism and values. Our team understands the unique requirements of business events and delivers seamless experiences that achieve your objectives.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're launching a new product, hosting a conference, or celebrating company milestones, we handle every detail so you can focus on what matters most - your business and your guests.
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
                  src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                  alt="Corporate event setup"
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
              Our Comprehensive
              <span className="bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] bg-clip-text text-transparent">
                {' '}Approach
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end corporate event management services designed to elevate your business presence
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
              <span>Discuss Your Event</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us for Corporate Events
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-[#1f7a8c]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Excellence</h3>
              <p className="text-gray-600">Award-winning team with extensive corporate event experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-[#1f7a8c]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">On-Time Delivery</h3>
              <p className="text-gray-600">Punctual execution that respects your business schedule</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-[#1f7a8c]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dedicated Support</h3>
              <p className="text-gray-600">Assigned project manager for seamless communication</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1f7a8c] via-[#022b3a] to-[#1f7a8c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Plan Your Corporate Event?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's discuss your corporate event needs and create an experience that achieves your business objectives.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-[#022b3a] px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Phone className="h-5 w-5" />
            <span>Get Free Consultation</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CorporateEvents;