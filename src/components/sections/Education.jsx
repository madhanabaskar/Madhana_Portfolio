import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Education" />
        
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">B.Tech — Artificial Intelligence & Data Science</h3>
                <p className="text-gray-600 mt-1">Sir Issac Newton College of Engineering and Technology</p>
              </div>
              <div className="mt-2 md:mt-0 text-left md:text-right">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-md">
                  2021 – 2025
                </span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-gray-700 font-medium flex items-center">
                <span className="bg-accent/10 text-accent px-2 py-1 rounded text-sm mr-3">CGPA</span>
                9.4 / 10
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
