import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Rocket, Camera, Megaphone, Phone, TrendingUp } from 'lucide-react';

const ProductLaunches = () => {
  const features = [
    'Media Management',
    'Influencer Coordination',
    'Brand Activation',
    'Press Coverage',
    'Product Demonstrations',
    'VIP Guest Management',
    'Social Media Integration',
    'Launch Event Production'
  ];

  const serviceDetails = [
    {
      icon: Rocket,
      title: 'Strategic Launch Planning',
      description: 'A successful product launch begins with strategic planning that aligns with your market entry goals. We conduct thorough market research, identify target audiences, and develop a comprehensive launch strategy that maximizes impact. Our team creates detailed timelines, coordinates all stakeholders, and develops contingency plans to ensure your product launch achieves its objectives and generates meaningful buzz in your industry.',
      highlights: ['Market research', 'Strategy development', 'Timeline planning', 'Stakeholder coordination']
    },
    {
      icon: Megaphone,
      title: 'Media Relations & PR',
      description: 'Generate maximum media coverage and public interest through strategic public relations efforts. We craft compelling press releases, coordinate media interviews, manage press conferences, and build relationships with key journalists and publications. Our PR team secures media placements, arranges exclusive previews, and creates buzz-worthy moments that amplify your message and drive awareness across traditional and digital media channels.',
      highlights: ['Press release creation', 'Media outreach', 'Interview coordination', 'Press kit development']
    },
    {
      icon: Camera,
      title: 'Experiential Event Production',
      description: 'Create an immersive launch experience that showcases your product and captivates attendees. We design interactive demonstrations, create Instagram-worthy photo opportunities, and produce engaging presentations that highlight your product benefits. From venue selection and stage design to lighting, sound, and multimedia integration, we ensure your launch event makes a lasting impression on guests, media, and influencers.',
      highlights: ['Event production', 'Product demonstrations', 'Photo opportunities', 'Multimedia integration']
    },
    {
      icon: TrendingUp,
      title: 'Digital & Social Amplification',
      description: 'Extend your launch reach through strategic digital marketing and social media campaigns. We coordinate influencer partnerships, create shareable content, manage live streaming, and leverage social platforms to amplify your message. Our team monitors online conversations, engages with audiences in real-time, and provides analytics to track campaign performance and measure return on investment for your product launch.',
      highlights: ['Influencer partnerships', 'Social media strategy', 'Content creation', 'Campaign analytics']
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
            backgroundImage: 'url(https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
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
              Product
              <span className="bg-gradient-to-r from-[#bfdbf7] to-[#e1e5f2] bg-clip-text text-transparent">
                {' '}Launches
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Launch your products with impact through strategic event experiences that generate buzz and drive market success.
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
                Make Your Launch Unforgettable
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A successful product launch can make or break your market entry. Our strategic approach combines creative storytelling, media relations, and experiential marketing to create launch events that generate maximum impact and media coverage.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From tech startups to established brands, we've helped launch products that have gone on to achieve remarkable market success. Our team understands the nuances of different industries and creates tailored experiences that resonate with your target audience.
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
                  src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                  alt="Product launch event"
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
              Comprehensive Product Launch
              <span className="bg-gradient-to-r from-[#1f7a8c] to-[#022b3a] bg-clip-text text-transparent">
                {' '}Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic solutions that generate buzz and drive market success for your product
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
              <span>Launch Strategy Session</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us for Product Launches
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-8 w-8 text-[#1f7a8c]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Impact</h3>
              <p className="text-gray-600">Data-driven approach to maximize market impact and media coverage</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Camera className="h-8 w-8 text-[#1f7a8c]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Media Excellence</h3>
              <p className="text-gray-600">Professional media relations and content creation for maximum exposure</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#bfdbf7] to-[#e1e5f2] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Megaphone className="h-8 w-8 text-[#1f7a8c]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Brand Amplification</h3>
              <p className="text-gray-600">Integrated marketing approach that amplifies your brand message</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1f7a8c] via-[#022b3a] to-[#1f7a8c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Launch Your Product?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's create a launch event that generates buzz, drives sales, and establishes your product in the market.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-[#022b3a] px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Phone className="h-5 w-5" />
            <span>Launch Strategy Session</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductLaunches; 