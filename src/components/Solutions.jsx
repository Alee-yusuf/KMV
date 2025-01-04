import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Solutions = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);

  const solutions = [
    {
      title: 'Telesales',
      description:
        "We specialize in telesales for industries like Spectrum Online Sales, Dispatch, and Online Gaming. Our services combine advanced CRM systems and data-driven strategies to engage customers, boost sales, and drive loyalty.",
      icon: '📞',
      features: ['Advanced CRM Systems', 'Data-Driven Strategies', 'Customer Engagement'],
    },
    {
      title: 'Billing Services',
      description:
        "KMV offers expert billing solutions for Medical and Internet Billing. Our medical billing service ensures accurate claim processing, timely payments, and full regulatory compliance.",
      icon: '💳',
      features: ['Accurate Claim Processing', 'Regulatory Compliance', 'Scalable Transaction Management'],
    },
    {
      title: 'Cryptocurrency & Forex Trading',
      description:
        "Navigating the world of cryptocurrency and forex can be complex, but KMV makes it simple. We provide you with real-time market insights, advanced trading tools, and personalized strategies.",
      icon: '💹',
      features: ['Real-Time Market Insights', 'Advanced Trading Tools', 'Personalized Strategies'],
    },
  ];

  return (
    <section id="solutions" className="min-h-screen bg-background-light dark:bg-primary py-20 px-4 sm:px-6 md:px-10">
      <motion.div className="container mx-auto">
        <motion.div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-4">
            Our <span className="text-accent">Solutions</span>
          </h2>
        </motion.div>

        {/* Grid of solution cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-muted-light/10 dark:bg-accent/20 rounded-2xl p-6 sm:p-8 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedSolution(solution)}
            >
              <div className="text-center">
                <span className="text-4xl sm:text-5xl mb-4 block">{solution.icon}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-text-light dark:text-text-dark">{solution.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      {selectedSolution && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-primary-dark rounded-lg p-6 max-w-md w-full">
            <div className="text-right">
              <button
                className="text-red-500 font-bold"
                onClick={() => setSelectedSolution(null)}
              >
                Close
              </button>
            </div>
            <div className="text-center">
              <span className="text-4xl">{selectedSolution.icon}</span>
              <h3 className="text-2xl font-bold my-4">{selectedSolution.title}</h3>
              <p className="text-sm text-muted-light dark:text-text-dark mb-4">
                {selectedSolution.description}
              </p>
              <ul className="list-disc list-inside text-left">
                {selectedSolution.features.map((feature, i) => (
                  <li key={i} className="text-sm text-muted-light dark:text-text-dark">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Solutions;
