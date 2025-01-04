import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/kmv-logo.png";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("Initializing");

  useEffect(() => {
    // Sequence of loading messages
    const messages = [
    "Innovating Business Solutions",
    "Driving Strategic Growth",
    "Transforming Challenges into Opportunities",
    "Delivering Excellence in Consulting",
    ];
    
    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      messageIndex = (messageIndex + 1) % messages.length;
      setLoadingText(messages[messageIndex]);
    }, 800);

    // Set timer to hide loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete();
    }, 4000);

    return () => {
      clearInterval(messageInterval);
      clearTimeout(timer);
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center
                 bg-gradient-to-b from-background-light to-accent/5
                 dark:from-primary dark:to-accent/20`}
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-accent/5"
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Logo Container */}
      <motion.div
        className="relative flex flex-col items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Glowing Effect behind logo */}
        <motion.div
          className="absolute w-full h-full rounded-full"
          animate={{
            boxShadow: [
              "0 0 20px 10px rgba(34, 197, 94, 0.1)",
              "0 0 40px 20px rgba(34, 197, 94, 0.15)",
              "0 0 20px 10px rgba(34, 197, 94, 0.1)"
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Logo */}
        <motion.img
          src={logo}
          alt="KMV Enterprises"
          className="w-40 h-40 md:w-48 md:h-48 relative z-10"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Loading Text */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <motion.p
          className="text-lg md:text-xl text-accent font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {loadingText}
        </motion.p>
      </motion.div>

      {/* Loading Dots */}
      <div className="mt-6 flex space-x-3">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-3 h-3 rounded-full bg-accent"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingScreen;