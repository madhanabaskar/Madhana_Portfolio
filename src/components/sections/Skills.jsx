import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      title: 'Backend',
      skills: ['Java', 'Spring Boot', 'REST APIs'],
    },
    {
      title: 'Database',
      skills: ['PostgreSQL', 'MySQL'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Canva'],
    },
  ];

  return (
    <section id="skills" className="relative py-12 bg-slate-950 border-t border-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Skills" dark={true} center={true} />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mt-8 bg-slate-900/50 backdrop-blur-md border border-slate-800 p-8 md:p-12 rounded-[2rem] shadow-xl shadow-blue-900/5"
        >
          <div className="flex flex-col md:flex-row flex-wrap gap-x-12 gap-y-10">
            {skillCategories.map((category) => (
              <div key={category.title} className="flex-1 min-w-[240px]">
                <h3 className="text-slate-400 text-sm uppercase tracking-widest font-bold mb-4 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-slate-800/80 border border-slate-700/50 text-sm font-medium text-slate-200 rounded-xl hover:border-blue-500/50 hover:bg-slate-700 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
