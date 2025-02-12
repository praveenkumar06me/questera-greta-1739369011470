import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const contacts = [
    { icon: <FaEnvelope />, href: "mailto:Praveenkumar06me@gmail.com", label: "Email" },
    { icon: <FaPhone />, href: "tel:+918319130565", label: "Phone" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/praveenkrpatra", label: "LinkedIn" },
    { icon: <FaGithub />, href: "https://github.com/yourusername", label: "GitHub" }
  ];

  return (
    <motion.footer 
      className="bg-gray-900 text-white py-6 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center space-x-8 mb-4">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? "_blank" : undefined}
              rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
              className="text-gray-300 hover:text-white transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              title={contact.label}
            >
              <span className="text-xl">{contact.icon}</span>
            </motion.a>
          ))}
        </div>
        
        <div className="text-center text-sm text-gray-400">
          <p>Copyright © {currentYear} Praveen Kumar Patra • All rights reserved</p>
        </div>
      </div>
    </motion.footer>
  );
}