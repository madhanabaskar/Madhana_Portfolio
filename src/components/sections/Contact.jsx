import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';

const Contact = () => {
  return (
    <section id="contact" className="relative py-12 bg-slate-950 border-t border-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Let's Work Together" dark={true} center={true} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Have a project, opportunity, or idea in mind? Let's connect. I am currently open to new opportunities and collaborations.
            </p>

            <div className="flex flex-col space-y-6">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=madhanabaskar32@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center text-slate-400 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 bg-slate-900/80 border border-slate-800 flex items-center justify-center rounded-lg mr-4 group-hover:bg-blue-600/20 group-hover:border-blue-500/30 transition-all">
                  <Mail size={24} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                </div>
                <span className="font-medium text-slate-200 group-hover:text-white transition-colors">madhanabaskar32@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/madhana-baskar-64b063296/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center text-slate-400 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 bg-slate-900/80 border border-slate-800 flex items-center justify-center rounded-lg mr-4 group-hover:bg-blue-600/20 group-hover:border-blue-500/30 transition-all">
                  <FaLinkedin size={24} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                </div>
                <span className="font-medium text-slate-200 group-hover:text-white transition-colors">LinkedIn</span>
              </a>

              <a
                href="https://github.com/Madhana-Baskar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center text-slate-400 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 bg-slate-900/80 border border-slate-800 flex items-center justify-center rounded-lg mr-4 group-hover:bg-blue-600/20 group-hover:border-blue-500/30 transition-all">
                  <FaGithub size={24} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                </div>
                <span className="font-medium text-slate-200 group-hover:text-white transition-colors">GitHub</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="space-y-6 bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-800/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-800/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-800/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 focus:outline-none"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
