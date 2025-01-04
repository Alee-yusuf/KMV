import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Solutions = () => {
  const [hoveredSolution, setHoveredSolution] = useState(null);

  const solutions = [
    {
      title: 'Telesales – Smart Sales Solutions',
      description: 'We specialize in telesales for industries like Spectrum Online Sales, Dispatch, and Online Gaming. Our services combine advanced CRM systems and data-driven strategies to engage customers, boost sales, and drive loyalty. Whether you\'re selling gaming software or dispatch services, our approach is designed to maximize conversions and ensure customer satisfaction at every touchpoint.',
      icon: '📞',
      features: ['Advanced CRM Systems', 'Data-Driven Strategies', 'Customer Engagement'],
    },
    {
      title: 'Billing Services – Streamlining Your Revenue',
      description: 'KMV offers expert billing solutions for Medical and Internet Billing. Our medical billing service ensures accurate claim processing, timely payments, and full regulatory compliance, helping healthcare providers focus on patient care. For online businesses, our internet billing solutions deliver fast, secure, and scalable transaction management, making it easy to handle subscriptions, digital products, and more.',
      icon: '💳',
      features: ['Accurate Claim Processing', 'Regulatory Compliance', 'Scalable Transaction Management'],
    },
    {
      title: 'Cryptocurrency & Forex Trading – Empowering Your Financial Growth',
      description: 'Navigating the world of cryptocurrency and forex can be complex, but KMV makes it simple. We provide you with real-time market insights, advanced trading tools, and personalized strategies for both cryptocurrency (Bitcoin, Ethereum) and forex trading. Whether you\'re just starting or looking to optimize your trades, our expertise and resources help you make informed decisions and succeed in dynamic markets.',
      icon: '💹',
      features: ['Real-Time Market Insights', 'Advanced Trading Tools', 'Personalized Strategies'],
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
      y: 0, opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id='solutions' className="min-h-screen bg-background-light dark:bg-primary py-20 px-4 sm:px-6 md:px-10 overflow-hidden">
      <motion.div
        className="container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-4">
            Our <span className="text-accent">Solutions</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-light dark:text-text-dark/80 max-w-3xl mx-auto">
            At KMV, we provide tailored solutions designed to help your business grow in a fast-paced, technology-driven world. From telesales and billing to cryptocurrency and forex trading, our services are built to meet your unique needs and drive real results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                className="h-full bg-muted-light/10 dark:bg-accent/20 rounded-2xl p-6 sm:p-8 relative overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"
                  animate={{
                    scale: hoveredSolution === index ? 1.1 : 1,
                    opacity: hoveredSolution === index ? 0.2 : 0.1,
                  }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <motion.span 
                    className="text-4xl sm:text-5xl mb-4 block"
                    whileHover={{ scale: 1.2 }}
                    aria-label={`Icon for ${solution.title}`}
                  >
                    {solution.icon}
                  </motion.span>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-text-light dark:text-text-dark mb-4 group-hover:text-accent transition-colors duration-300">
                    {solution.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-muted-light dark:text-text-dark/80 mb-6">
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
                    <ul className="space-y-2">
                      {solution.features.map((feature, i) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="text-sm sm:text-base text-muted-light dark:text-text-dark flex items-center"
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
