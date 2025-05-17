import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiMap, FiCamera, FiBookOpen, FiUsers } from 'react-icons/fi';

import poster from '../assets/poster.jpg';
import map1 from '../assets/map1.png';
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 2000);
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      quote: "The Narmada Yatra transformed my spiritual journey. This platform helped me plan every step of my parikrama.",
      author: "Rajesh Mehta, Ahmedabad"
    },
    {
      quote: "Discovering the hidden temples and local stories through this project was an enriching experience.",
      author: "Priya Sharma, Mumbai"
    },
    {
      quote: "The ecological insights made me appreciate the river beyond its religious significance.",
      author: "Dr. Anil Kumar, Delhi"
    }
  ];

  const features = [
    {
      icon: <FiMap className="w-8 h-8 mb-4" />,
      title: "Interactive Parikrama Map",
      description: "Explore the sacred route with detailed maps of all major stops"
    },
    {
      icon: <FiCamera className="w-8 h-8 mb-4" />,
      title: "Visual Journey",
      description: "Stunning galleries of temples, ghats, and landscapes"
    },
    {
      icon: <FiBookOpen className="w-8 h-8 mb-4" />,
      title: "Cultural Archives",
      description: "Mythology, folklore, and historical context"
    },
    {
      icon: <FiUsers className="w-8 h-8 mb-4" />,
      title: "Community Wisdom",
      description: "Testimonials and advice from fellow pilgrims"
    }
  ];

 
 
 

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute w-full h-full object-cover"
          poster={poster}
        >
          <source src="/narmada-river.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Embark on the Sacred <span className="text-blue-200">Narmada Yatra</span>
          </h1>
          <p className="text-xl text-gray-100 mb-8">
            A digital pilgrimage along India's holiest river - exploring spirituality, culture, and ecology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/route" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition duration-300 flex items-center justify-center gap-2"
            >
              Begin Journey <FiArrowRight />
            </Link>
            <Link 
              to="/about" 
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg text-lg font-medium transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
          <div className="animate-bounce">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Your Digital Pilgrimage Companion</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Discover everything you need for a meaningful Narmada Parikrama experience
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="text-blue-600">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Preview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">The Sacred Narmada Parikrama</h2>
              <p className="text-lg text-gray-600 mb-6">
                The Narmada River, considered more sacred than the Ganges, flows through the heart of India. 
                A complete parikrama (circumambulation) of this holy river is a 3,000+ km spiritual journey 
                that takes pilgrims through diverse landscapes, ancient temples, and sacred sites.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our digital platform preserves this rich tradition while making it accessible to modern seekers, 
                documenting both the spiritual and ecological aspects of this timeless pilgrimage.
              </p>
              <Link 
                to="/journey" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition duration-300"
              >
                Explore the Journey <FiArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="relative  overflow-hidden shadow-xl">
                <img 
                  src={map1}
                  alt="Narmada Parikrama Route" 
                  //className="w-full h-full"
                />
                <div className="absolute inset-0  flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-semibold"></h3>
                    <p className="text-blue-200"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Voices from the Yatra</h2>
          
          <div className="relative h-64">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${index === activeTestimonial ? 'opacity-100' : 'opacity-0'}`}
              >
                <blockquote className="text-xl italic text-gray-700 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <p className="text-blue-600 font-medium">— {testimonial.author}</p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full ${index === activeTestimonial ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Spiritual Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of pilgrims who have discovered the transformative power of the Narmada Yatra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/register" 
              className="bg-white hover:bg-gray-100 text-blue-800 px-8 py-3 rounded-lg text-lg font-medium transition duration-300"
            >
              Create Account
            </Link>
            <Link 
              to="/explore" 
              className="bg-transparent hover:bg-blue-800 border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-medium transition duration-300"
            >
              Explore Without Account
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Narmada Yatra</h3>
            <p className="text-gray-400">
              Preserving and sharing the sacred journey along Mother Narmada.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">About</Link></li>
              <li><Link to="/journey" className="text-gray-400 hover:text-white transition">The Journey</Link></li>
              <li><Link to="/temples" className="text-gray-400 hover:text-white transition">Sacred Temples</Link></li>
              <li><Link to="/ecology" className="text-gray-400 hover:text-white transition">River Ecology</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition">Travel Blog</Link></li>
              <li><Link to="/guides" className="text-gray-400 hover:text-white transition">Pilgrim Guides</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <address className="text-gray-400 not-italic">
              <p>Narmada Yatra Project</p>
              <p>contact@narmadayatra.org</p>
              <p>+91 98765 43210</p>
            </address>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;