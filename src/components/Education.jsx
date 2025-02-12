import { motion } from 'framer-motion';

export default function Education() {
  const education = [
    {
      degree: "Software Development Engineer in Test",
      school: "Masai School",
      location: "Bengaluru",
      period: "January 2024 – April 2024"
    },
    {
      degree: "Bachelor of Engineering- Mechanical Engineering",
      school: "Technocrats Institute of Technology",
      location: "Bhopal",
      year: "2019"
    }
  ];

  return (
    <motion.section 
      className="py-16 px-4 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              className="border-l-4 border-gray-900 pl-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.school} • {edu.location}</p>
              <p className="text-gray-500">{edu.period || edu.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}