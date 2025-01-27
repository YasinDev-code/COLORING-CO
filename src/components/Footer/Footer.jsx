import { IoLocationSharp } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { TfiTwitter } from "react-icons/tfi";
import { AiOutlineYoutube } from "react-icons/ai";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-zinc-900 pt-16 pb-6">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 border-b border-gray-800 pb-16">
          {/* Logo */}
          <Link to="/" className="relative group flex items-center gap-4">
            {/* Elegant Glow Effect */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 
                opacity-0 group-hover:opacity-40 blur-md transition-all duration-700"></div>
            
            {/* Logo Container */}
            <div className="relative p-2 rounded-full overflow-hidden animate-subtle-bounce">
              <img 
                src="/FIVEICON.png" 
                alt="Coloring co" 
                className="h-12 cursor-pointer transform transition-all duration-500 
                  group-hover:scale-110 group-hover:brightness-110
                  hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]" 
              />
              
              {/* Subtle Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 
                group-hover:opacity-30 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></div>
            </div>

            {/* Company Name */}
            <p className="text-white text-xl font-semibold group-hover:text-amber-500 transition-colors duration-300">
              Coloring Co
            </p>
          </Link>
          
          {/* Newsletter */}
          <div className="w-full lg:w-[600px]">
            <div className="flex items-center bg-white rounded-full">
              <div className="flex items-center flex-1 pl-4">
                <MdEmail className="text-gray-400" size={20} />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full pl-4 py-4 bg-transparent text-gray-800 focus:outline-none"
                />
              </div>
              <button className="group bg-amber-500 text-white px-6 py-4 rounded-full 
                hover:bg-white hover:text-amber-500 transition-all duration-300 
                transform hover:scale-105 shadow-lg hover:shadow-amber-500/50
                overflow-hidden whitespace-nowrap m-1">
                <span className="relative z-10 flex items-center">
                  Subscribe Now
                  <HiArrowNarrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 
                  transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-8 lg:mt-0">
            <a href="#" className="social-icon w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center hover:bg-gradient-to-r from-amber-500 to-amber-600 hover:border-transparent hover:text-white transition-all duration-500 ease-out hover:shadow-lg hover:shadow-amber-500/30 transform hover:-translate-y-1">
              <SlSocialFacebook size={16} />
            </a>
            <a href="#" className="social-icon w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center hover:bg-gradient-to-r from-amber-500 to-amber-600 hover:border-transparent hover:text-white transition-all duration-500 ease-out hover:shadow-lg hover:shadow-amber-500/30 transform hover:-translate-y-1">
              <TfiTwitter size={16} />
            </a>
            <a href="#" className="social-icon w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center hover:bg-gradient-to-r from-amber-500 to-amber-600 hover:border-transparent hover:text-white transition-all duration-500 ease-out hover:shadow-lg hover:shadow-amber-500/30 transform hover:-translate-y-1">
              <SlSocialInstagram size={16} />
            </a>
            <a href="#" className="social-icon w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center hover:bg-gradient-to-r from-amber-500 to-amber-600 hover:border-transparent hover:text-white transition-all duration-500 ease-out hover:shadow-lg hover:shadow-amber-500/30 transform hover:-translate-y-1">
              <AiOutlineYoutube size={16} />
            </a>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {/* About Us */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 relative inline-block">
              About Us
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600"></span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Morem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elita Florai Psum Dolor Sit Amet, Consecteture.Borem Ipsum Dolor
            </p>
            <button
              className="group bg-amber-500 text-white px-6 py-3 rounded-full 
                hover:bg-white hover:text-amber-500 transition-all duration-300 
                transform hover:scale-105 shadow-lg hover:shadow-amber-500/50
                relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Get Consultant
                <HiArrowNarrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 
                transition-transform duration-300 origin-left"></div>
            </button>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 relative inline-block">
              Explore Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { text: 'Home', path: '/' },
                { text: 'About Us', path: '/about-us' },
                { text: 'Contact Us', path: '/contact' },
                { text: 'Our Team', path: '/team' },
                { text: 'Projects', path: '/projects' },
                { text: 'Blog', path: '/blog' }
              ].map((item) => (
                <li key={item.text} className="text-gray-400">
                  <Link to={item.path} className="relative hover:text-amber-500 transition-colors duration-500 flex items-center group">
                    <span className="mr-2 text-amber-500">•</span>
                    <span className="relative">
                      {item.text}
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-amber-500 transition-all duration-500 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { text: 'Interior Design', path: '/services/residential' },
                { text: 'Exterior Design', path: '/services/commercial' },
                { text: 'Construction', path: '/services/renovation' },
                { text: 'Renovation', path: '/services/spray' }
              ].map((service) => (
                <li key={service.text} className="text-gray-400">
                  <Link to={service.path} className="relative hover:text-amber-500 transition-colors duration-500 flex items-center group">
                    <span className="mr-2 text-amber-500">•</span>
                    <span className="relative">
                      {service.text}
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-amber-500 transition-all duration-500 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <IoLocationSharp size={20} className="text-amber-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Melbourne, Australia
                </span>
              </li>
              <li>
                <a href="tel:0413709050" className="relative flex items-center gap-3 text-gray-400 hover:text-amber-500 transition-colors duration-500 group">
                  <BiSolidPhoneCall size={20} className="text-amber-500 flex-shrink-0" />
                  <span className="relative">
                    0413709050
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-amber-500 transition-all duration-500 group-hover:w-full"></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:info@coloringco.com" className="relative flex items-center gap-3 text-gray-400 hover:text-amber-500 transition-colors duration-500 group">
                  <MdEmail size={20} className="text-amber-500 flex-shrink-0" />
                  <span className="relative">
                    info@coloringco.com
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-amber-500 transition-all duration-500 group-hover:w-full"></span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-800 pt-6">
          <p className="text-gray-500">© Copyright 2024 By Coloring Co.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 