import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const Experience = () => {
  return (
    <section id="experience" className="relative py-12 bg-slate-950 border-t border-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Experience" dark={true} center={true} />
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative border-l-2 border-slate-800 pl-8 ml-4"
          >
            {/* Timeline Dot */}
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1 border-4 border-slate-950 shadow-sm"></div>
            
            <div className="mb-2">
              <h3 className="text-xl font-bold text-white">React Developer</h3>
              <p className="text-blue-400 font-medium mt-1">Bytes and Bulls</p>
            </div>
            
            <ul className="mt-4 space-y-3 text-slate-400">
              <li className="flex items-start">
                <span className="text-slate-600 mr-3 mt-1">•</span>
                Developing real-world web applications ensuring high performance and responsiveness.
              </li>
              <li className="flex items-start">
                <span className="text-slate-600 mr-3 mt-1">•</span>
                Working extensively with React.js and Next.js to build dynamic user interfaces.
              </li>
              <li className="flex items-start">
                <span className="text-slate-600 mr-3 mt-1">•</span>
                Building responsive interfaces that work seamlessly across all device types.
              </li>
              <li className="flex items-start">
                <span className="text-slate-600 mr-3 mt-1">•</span>
                Collaborating on UI and design implementation for various client projects.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
