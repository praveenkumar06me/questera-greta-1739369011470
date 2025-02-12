import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    "JavaScript",
    "Automation of Tests",
    "Cypress",
    "Selenium Webdriver",
    "Artificial Intelligence",
    "Quality Management",
    "Performance Testing",
    "Regression Testing",
    "Functional Testing",
    "Strategies of Testing",
    "Java"
  ];

  return (
    <motion.section 
      className="py-16 px-4 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}