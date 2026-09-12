import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-500">
            © 2026 Madhana Baskar. All rights reserved.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a
            href="https://github.com/Madhana-Baskar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-900 transition-colors"
          >
            <span className="sr-only">GitHub</span>
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/madhana-baskar-64b063296/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:madhanabaskar32@gmail.com"
            className="text-gray-400 hover:text-gray-900 transition-colors"
          >
            <span className="sr-only">Email</span>
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
