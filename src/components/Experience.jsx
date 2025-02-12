import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: "Software Development Engineer in Test",
      company: "PLG OS",
      period: "April 2024 – Present",
      details: [
        "Developing and executing automated test scripts to ensure software reliability.",
        "Collaborating with development teams to enhance software testing processes.",
        "Utilizing Java, JavaScript, Cypress, and HTML for efficient automation testing."
      ]
    },
    {
      title: "Software Test Engineer",
      company: "Quest Labs",
      period: "May 2024 - November 2024"
    },
    {
      title: "Mechanical Maintenance Engineer",
      company: "GR Infra Engineering Works Pvt. LTD., Bokaro",
      period: "June 2019 - December 2023",
      details: [
        "Led the annual maintenance of the Pickling Line and Tandem Cold Rolling Mill, CRM3 at Bokaro Steel Limited.",
        "Ensured smooth mechanical operations and minimized downtime."
      ]
    }
  ];

  return (
    <motion.section 
      className="py-16 px-4 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-gray-600 mb-2">{exp.company}</p>
              <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
              {exp.details && (
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {exp.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}