import { motion } from 'framer-motion';

const SectionHeading = ({ title, dark = false, center = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${center ? 'flex flex-col items-center text-center' : ''}`}
    >
      <h2 className={`text-3xl font-bold tracking-tight ${dark ? 'text-white' : 'text-gray-900'}`}>{title}</h2>
      <div className="w-12 h-1 bg-accent mt-4 rounded-full"></div>
    </motion.div>
  );
};

export default SectionHeading;
