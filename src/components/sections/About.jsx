import { motion } from 'framer-motion';
import { Download, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const About = () => {
  const stats = [
    { label: 'Projects Completed', value: '10+' },
    { label: 'Happy Clients', value: '5+' },
    { label: 'Technologies', value: '10+' },
    { label: 'Support', value: '24/7' },
  ];

  const checklist = [
    'Responsive Design',
    'Clean Code',
    'SEO Friendly',
    'Fast Performance'
  ];

  return (
    <section id="about" className="relative py-12 bg-slate-950 overflow-hidden border-t border-slate-900">
      {/* Background Glows */}
      <div className="absolute top-0 right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="About Me" dark={true} center={true} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 -mt-8 text-center"
        >
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
            Get to know the developer behind the work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Bio & Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Name</h4>
                  <p className="text-lg font-semibold text-white">Madhana Baskar</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Role</h4>
                  <p className="text-lg font-semibold text-white">React Developer</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  I am a passionate web developer specializing in creating modern, responsive, and user-friendly websites. I enjoy turning ideas into professional digital experiences that help businesses and individuals build a strong online presence.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  I focus on clean design, performance, responsive layouts, and intuitive user experiences.
                </p>
              </div>
            </div>

            <a
              href="/MADHANA_BASKAR_RESUME.pdf"
              download
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </a>
          </motion.div>

          {/* Right Column: Stats & Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl text-center hover:bg-slate-800/80 transition-colors">
                  <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">{stat.value}</h3>
                  <p className="text-sm font-medium text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6">What I Deliver</h3>
              <ul className="space-y-4">
                {checklist.map((item, index) => (
                  <li key={index} className="flex items-center text-slate-300">
                    <CheckCircle2 className="text-blue-400 mr-3 shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
