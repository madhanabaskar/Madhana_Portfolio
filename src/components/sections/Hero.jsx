import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const taglines = [
    "Building Scalable Web Apps",
    "Crafting Premium Interfaces",
    "Turning Ideas Into Code"
  ];
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const fullText = taglines[currentTaglineIndex];

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000); // Pause at end of word
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length);
        }
      }
    }, isDeleting ? 40 : 100); // Typing speed

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, currentTaglineIndex]);

  return (
    <section id="home" className="relative xl:min-h-screen flex items-center pt-32 pb-16 lg:pt-40 lg:pb-24 xl:pt-16 xl:pb-0 bg-slate-950 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-8 items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                Hi, I'm <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient-x">
                  Madhana Baskar
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <h2 className="text-2xl md:text-3xl font-medium text-slate-300 mb-6 min-h-[40px]">
                {currentText}
                <span className="animate-pulse border-r-2 border-slate-300 ml-1"></span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
                I'm a frontend developer passionate about creating intuitive, high-performance web applications. I focus on bridging the gap between elegant design and robust engineering.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              className="flex flex-wrap gap-4 items-center mb-12"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
              >
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-slate-300 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all hover:-translate-y-1 backdrop-blur-sm"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex items-center space-x-5"
            >
              <a href="https://github.com/Madhana-Baskar" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-700 hover:border-slate-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-700/20 transition-all duration-300">
                <span className="sr-only">GitHub</span>
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/madhana-baskar-64b063296/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-blue-400 hover:bg-blue-900/30 hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin size={22} />
              </a>
              <a href="mailto:madhanabaskar32@gmail.com" className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-700 hover:border-slate-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-700/20 transition-all duration-300">
                <span className="sr-only">Email</span>
                <Mail size={22} />
              </a>
            </motion.div>
          </div>

          {/* Right Column - Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center relative mt-16 xl:mt-0 w-full"
          >
            {/* Speech Bubble */}
            <motion.div 
              initial={{ opacity: 0, scale: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5, type: "spring", bounce: 0.5 }}
              className="absolute -top-6 -left-4 xl:-left-12 z-20 bg-slate-800 border border-slate-700/50 backdrop-blur-md p-4 rounded-2xl rounded-br-none shadow-2xl shadow-blue-900/20 max-w-[200px]"
            >
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Madhana says:</span>
              </div>
              <p className="text-sm font-medium text-slate-200 leading-relaxed">
                "Hi! I am Madhana... <br/> I am a React Developer."
              </p>
            </motion.div>

            {/* Glowing backdrop */}
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full scale-90 animate-pulse" />
            
            {/* Image Loader */}
            {!imageLoaded && (
              <div className="relative z-10 w-full max-w-md aspect-square rounded-[2rem] bg-slate-800/50 animate-pulse flex items-center justify-center border border-slate-700/50">
                 <div className="flex flex-col items-center space-y-4">
                   <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
                   <span className="text-sm text-slate-400 font-medium animate-pulse">Loading Avatar...</span>
                 </div>
              </div>
            )}
            
            <motion.img 
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              src="/avatar-fullbody.jpg" 
              alt="Madhana Baskar 3D Avatar" 
              onLoad={() => setImageLoaded(true)}
              className={`relative z-10 w-full max-w-md rounded-[2rem] shadow-2xl shadow-blue-900/20 border border-slate-800/50 object-cover ${imageLoaded ? 'block' : 'hidden'}`}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
