import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section 
      className="py-16 px-4 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Summary</h2>
        <p className="text-gray-700 leading-relaxed">
          Passionate Software Development Engineer in Test (SDET) with a strong background in software testing, automation, and quality
          assurance. Adept at ensuring software quality through meticulous testing strategies and automation solutions. A problem-solver with
          experience in mechanical maintenance, transitioning into the tech industry to drive excellence in software development.
        </p>
      </div>
    </motion.section>
  );
}