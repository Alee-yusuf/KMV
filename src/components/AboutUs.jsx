import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, Users, Lightbulb, TrendingUp, 
  Boxes, Rocket, Target, Shield
} from 'lucide-react';

const AboutUs = () => {
  const handleTeamScroll = () => {
    const teamSection = document.getElementById('our-team');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { 
      number: '10+', 
      label: 'Years Experience',
      icon: <Users className="w-8 h-8" />,
      description: 'Decade of industry expertise'
    },
    { 
      number: '200+', 
      label: 'Projects Completed',
      icon: <Target className="w-8 h-8" />,
      description: 'Successful project deliveries'
    },
    { 
      number: '50+', 
      label: 'Expert Consultants',
      icon: <Lightbulb className="w-8 h-8" />,
      description: 'Specialized professionals'
    },
    { 
      number: '95%', 
      label: 'Client Satisfaction',
      icon: <TrendingUp className="w-8 h-8" />,
      description: 'Consistently high ratings'
    },
  ];

  const services = [
    { icon: <BarChart3 />, title: "Business Analytics" },
    { icon: <Boxes />, title: "Strategic Planning" },
    { icon: <Rocket />, title: "Innovation" },
    { icon: <Shield />, title: "Risk Management" },
  ];

  return (
    <section id='about-us' className="min-h-screen bg-background-light dark:bg-primary transition-colors duration-200">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-5xl font-bold text-text-light dark:text-text-dark mb-6">
                  Transforming
                  <span className="text-accent block mt-2">Business Vision</span>
                  Into Reality
                </h2>
                <p className="text-muted-light dark:text-text-dark text-lg leading-relaxed">
                  We bring innovative solutions that drive growth and create lasting impact. 
                  Partner with us to unlock your business potential.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button 
                  onClick={handleTeamScroll}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-accent via-accent/80 to-accent text-text-dark px-8 py-3 rounded-full font-semibold"
                >
                  Meet Our Team
                </motion.button>
              </motion.div>
            </div>

            <motion.div 
              className="relative h-[400px] bg-accent/5 dark:bg-accent/10 rounded-2xl overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    'radial-gradient(circle at 0% 0%, rgba(var(--accent-rgb), 0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 100% 100%, rgba(var(--accent-rgb), 0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 0% 0%, rgba(var(--accent-rgb), 0.1) 0%, transparent 50%)',
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <div className="grid grid-cols-2 gap-6 p-8 relative">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    className="bg-background-light dark:bg-primary p-6 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/20 dark:bg-accent/30 p-3 text-accent mb-4">
                      {service.icon}
                    </div>
                    <h3 className="font-semibold text-lg text-text-light dark:text-text-dark">
                      {service.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 bg-muted-light/10 dark:bg-accent/20 rounded-xl backdrop-blur-sm hover:bg-accent/20 dark:hover:bg-accent/30 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-accent mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </h3>
                <p className="font-semibold text-text-light dark:text-text-dark mb-1">
                  {stat.label}
                </p>
                <p className="text-muted-light dark:text-text-dark">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
