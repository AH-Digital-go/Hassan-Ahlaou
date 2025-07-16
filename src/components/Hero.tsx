
import { ArrowRight, Instagram, Linkedin, Twitter, Github, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>

      {/* World Map Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10">
        <img
          src="/images/World_map_(blue_dots).svg"
          alt="Dotted world map"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-gray-400 text-sm tracking-wider uppercase">AI • AUTOMATION • NO-CODE • INFRASTRUCTURE DE CROISSANCE</p>
              <h1 className="text-7xl md:text-8xl font-bold leading-tight">
                HASSAN<br />
                <span className="text-gray-300">AHLAOU</span>
              </h1>
              <p className="text-xl text-gray-400">Fondateur et CEO de Ahdigital <br />Maroc, Agadir</p>
            </div>

            <div className="flex space-x-4">
              {/* <a href=''> <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" /> </a> */}
             <a href='https://x.com/ahdigital_tech'>  <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />  </a>
              <a href='https://www.linkedin.com/company/ahdigital-automation/'> <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />  </a>
              <a href='https://web.facebook.com/people/Ahdigital/61570213799534/'> <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />  </a>
            </div>

            <div className="pt-4">
              <button className="group flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 transition-all duration-300">
                <span className="font-semibold">View Portfolio</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="mt-6  relative">
            <div className="aspect-[3/4] rounded-lt-lg bg-gradient-to-br from-gray-600 to-gray-900 overflow-hidden">
              <img 
                src="/images/WhatsApp Image 2025-07-15 at 15.56.53.jpeg"
                alt="Hassan AHLAOU"
                className=" w-full h-full object-cover rounded-tl-lg"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-green rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-gray-400 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
