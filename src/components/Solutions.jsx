import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Solutions = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);

  const solutions = [
    {
      title: 'Telesales',
      description:
        "At KMV Enterprises, we pride ourselves on being trailblazers in the TeleSales industry. Backed by a team of highly skilled professionals, we excel in managing complex sales projects across diverse sectors, including carrier logistics, cable, internet, phone services, and electronic commodities.",
      icon: '📞',
      features: ['Cutting-Edge CRM Systems: Streamlining operations for peak efficiency and seamless customer management.', 'Data-Driven Strategies: Leveraging analytics to unlock insights and drive measurable results.', 'Customer Engagement Excellence: Building meaningful connections to foster loyalty and satisfaction.', ],
      description:
        "With our innovative approach and commitment to excellence, KMV Enterprises transforms challenges into opportunities, delivering unparalleled value to our clients.",
    },
    {
  title: 'Customer Support Services',
  description:
    "KMV is renowned for its innovative and customer-centric support solutions. Our support executives are true masters of their craft, honing their skills through extensive experience serving over a million customers across industries such as gaming, finance, and social media.\n\n" +
    "Unmatched Expertise: Decades of combined experience across diverse industries.\n" +
    "Customer-First Approach: Personalized solutions tailored to meet unique client needs.\n" +
    "Proven Track Record: Delivering exceptional support that fosters trust and loyalty.\n\n" +
    "At KMV, we don’t just provide customer support – we redefine it, ensuring seamless experiences that exceed expectations.",
  icon: '🎧',
  features: [
    'Unmatched Expertise in Multiple Industries',
    'Customer-First Support with Personalized Solutions',
    'Proven Track Record of Trust and Loyalty'
  ],
}
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
