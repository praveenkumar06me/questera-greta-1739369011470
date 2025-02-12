import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Header() {
  return (
    <motion.header 
      className="bg-gray-900 text-white py-20 px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Praveen Kumar Patra</h1>
        <p className="text-xl text-gray-300 mb-6">Software Development Engineer in Test (SDET)</p>
        
        <div className="flex flex-wrap gap-4">
          <a href="mailto:Praveenkumar06me@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-white">
            <FaEnvelope /> Praveenkumar06me@gmail.com
          </a>
          <a href="tel:+918319130565" className="flex items-center gap-2 text-gray-300 hover:text-white">
            <FaPhone /> +918319130565
          </a>
          <a href="https://linkedin.com/in/praveenkrpatra" target="_blank" rel="noopener noreferrer" 
            className="flex items-center gap-2 text-gray-300 hover:text-white">
            <FaLinkedin /> in/praveenkrpatra
          </a>
        </div>
      </div>
    </motion.header>
  );
}