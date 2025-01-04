import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Solutions = () => {
  const [hoveredSolution, setHoveredSolution] = useState(null);

  const solutions = [
    {
      title: 'Business Strategy',
      description: 'Develop comprehensive strategies to drive growth and maximize market opportunities.',
      icon: '🎯',
      features: ['Market Analysis', 'Competitive Positioning', 'Growth Planning'],
    },
    {
      title: 'Digital Transformation',
      description: 'Transform your business with cutting-edge digital solutions and technologies.',
      icon: '💻',
      features: ['Process Automation', 'Digital Integration', 'Tech Strategy'],
    },
    {
      title: 'Financial Planning',
      description: 'Optimize financial performance with expert guidance and strategic planning.',
      icon: '📈',
      features: ['Risk Management', 'Investment Planning', 'Financial Analysis'],
    },
    {
      title: 'Operational Excellence',
      description: 'Streamline operations and improve efficiency across your organization.',
      icon: '⚡',
      features: ['Process Optimization', 'Quality Management', 'Cost Reduction'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id='solutions' className="min-h-screen bg-background-light dark:bg-primary py-20 px-4 overflow-hidden">
      <motion.div
        className="container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-5xl font-bold text-text-light dark:text-text-dark mb-4">
            Our <span className="text-accent">Solutions</span>
          </h2>
          <p className="text-muted-light dark:text-text-dark/80 text-lg max-w-2xl mx-auto">
            Comprehensive consulting solutions tailored to meet your business needs
            and drive sustainable growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              variants={itemVariants}
              onHoverStart={() => setHoveredSolution(index)}
              onHoverEnd={() => setHoveredSolution(null)}
              whileHover={{ y: -10 }}
              className="group"
            >
              <motion.div
                className="h-full bg-muted-light/10 dark:bg-accent/20 rounded-2xl p-8 relative overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Clean gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"
                  animate={{
                    scale: hoveredSolution === index ? 1.1 : 1,
                    opacity: hoveredSolution === index ? 0.2 : 0.1,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Clean decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 transform group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full -ml-12 -mb-12 transform group-hover:scale-150 transition-transform duration-500" />

                <div className="relative z-10">
                  <motion.span 
                    className="text-5xl mb-8 block transform transition-transform duration-300"
                    whileHover={{ scale: 1.2 }}
                  >
                    {solution.icon}
                  </motion.span>
                  
                  <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4 group-hover:text-accent transition-colors duration-300">
                    {solution.title}
                  </h3>
                  
                  <p className="text-muted-light dark:text-text-dark/80 mb-6">
                    {solution.description}
                  </p>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredSolution === index ? 1 : 0,
                      height: hoveredSolution === index ? 'auto' : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="space-y-3">
                      {solution.features.map((feature, i) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="text-muted-light dark:text-text-dark flex items-center"
                        >
                          <motion.span 
                            className="w-2 h-2 bg-accent rounded-full mr-3"
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="group-hover:text-accent transition-colors duration-300">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Solutions;