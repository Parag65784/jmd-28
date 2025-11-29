import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Presentation, Mic, Users, Phone, Network, Video } from 'lucide-react';

const ConferenceManagement = () => {
  const features = [
    'Venue Selection & Setup',
    'Speaker Coordination',
    'Registration Management',
    'AV Equipment & Tech Support',
    'Catering & Refreshments',
    'Networking Sessions',
    'Live Streaming Setup',
    'Post-Event Analytics'
  ];

  const serviceDetails = [
    {
      icon: Presentation,
      title: 'Speaker & Content Management',
      description: 'Successful conferences depend on compelling content and smooth speaker coordination. We manage all aspects of speaker engagement, from initial outreach and contract negotiation to travel arrangements and on-site support. Our team creates detailed speaker briefs, coordinates presentation materials, manages AV requirements, and ensures every session runs on time. We also provide dedicated speaker support throughout the event.',
      highlights: ['Speaker coordination', 'Content scheduling', 'Presentation support', 'Rehearsal management']
    },
    {
      icon: Video,
      title: 'Technical Production & AV',
      description: 'Deliver a professional conference experience with state-of-the-art audiovisual production. We handle everything from stage design and lighting to sound systems, video walls, and live streaming capabilities. Our technical team conducts thorough equipment testing, manages real-time troubleshooting, and ensures seamless transitions between sessions. We can also provide recording services and post-event content distribution.',
      highlights: ['Professional AV systems', 'Live streaming setup', 'Recording services', 'Technical support team']
    },
    {
      icon: Network,
      title: 'Attendee Experience & Engagement',
      description: 'Create meaningful connections and maximize attendee value through strategic engagement planning. We design networking opportunities, facilitate breakout sessions, and incorporate interactive elements that encourage participation. From mobile event apps and digital networking tools to structured networking sessions and social events, we create multiple touchpoints for attendees to connect, learn, and collaborate.',
      highlights: ['Registration management', 'Networking sessions', 'Interactive elements', 'Mobile event apps']
    },
    {
      icon: Users,
      title: 'Logistics & Operations',
      description: 'Flawless execution requires meticulous attention to operational details. We coordinate venue logistics, catering services, registration processes, and all support services needed for a successful conference. Our team manages vendor relationships, oversees setup and teardown, coordinates staff and volunteers, and handles any issues that arise. Post-event, we provide comprehensive analytics and feedback reports to measure success.',
      highlights: ['Venue coordination', 'Catering management', 'Staff coordination', 'Post-event analytics']
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
              Conference
              <span className="bg-gradient-to-r from-[#bfdbf7] to-[#e1e5f2] bg-clip-text text-transparent">
                {' '}Management
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Professional conference management services that deliver impactful knowledge-sharing experiences and meaningful networking opportunities.
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
                Elevate Your Conference Experience
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Conferences are powerful platforms for knowledge sharing, networking, and industry advancement. Our comprehensive conference management services ensure your event runs smoothly while delivering maximum value to attendees and stakeholders.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From intimate industry roundtables to large-scale international conferences, we handle every aspect of planning and execution, allowing you to focus on content and connections.
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
                  alt="Conference presentation"
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
              Professional Conference
              <span className="bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] bg-clip-text text-transparent">
                {' '}Management
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full-service conference solutions for knowledge-sharing events of any scale
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
              <span>Plan Your Conference</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us for Conference Management
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Presentation className="h-8 w-8 text-[#1f7a8c]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Coordination</h3>
              <p className="text-gray-600">Seamless management of speakers, sessions, and technical requirements</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mic className="h-8 w-8 text-[#1f7a8c]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Excellence</h3>
              <p className="text-gray-600">State-of-the-art AV equipment and technical support throughout the event</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-[#1f7a8c]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Attendee Experience</h3>
              <p className="text-gray-600">Focus on creating meaningful connections and valuable learning experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1f7a8c] via-[#022b3a] to-[#1f7a8c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Host Your Next Conference?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's create a conference that delivers exceptional value and memorable experiences for all attendees.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-[#022b3a] px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Phone className="h-5 w-5" />
            <span>Plan Your Conference</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ConferenceManagement;    