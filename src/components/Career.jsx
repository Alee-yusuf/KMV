import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Career = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  
  const departments = [
    { id: 'all', name: 'All Positions' },
    { id: 'consulting', name: 'Consulting' },
    { id: 'technology', name: 'Technology' },
    { id: 'operations', name: 'Operations' },
  ];

  const jobs = [
    {
      id: 1,
      title: 'Senior Business Consultant',
      department: 'consulting',
      location: 'New York',
      type: 'Full-time',
      experience: '5+ years',
      skills: ['Strategy', 'Leadership', 'Analytics'],
    },
    {
      id: 2,
      title: 'Technology Lead',
      department: 'technology',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      skills: ['React', 'Node.js', 'Cloud'],
    },
    {
      id: 3,
      title: 'Operations Manager',
      department: 'operations',
      location: 'London',
      type: 'Full-time',
      experience: '3+ years',
      skills: ['Process Management', 'Team Leadership', 'Optimization'],
    },
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobs 
    : jobs.filter((job) => job.department === selectedDepartment);

  return (
    <section
      id="career"
      className="min-h-screen bg-background-light dark:bg-primary py-20 px-4"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-6xl"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-text-light dark:text-text-dark mb-4">
            Join Our <span className="text-accent">Team</span>
          </h2>
          <p className="text-muted-light dark:text-text-dark/80 text-lg max-w-2xl mx-auto">
            Be part of a dynamic team shaping the future of consulting. We offer exciting
            opportunities and a culture of innovation.
          </p>
        </motion.div>

        {/* Department filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {departments.map((dept) => (
            <motion.button
              key={dept.id}
              onClick={() => setSelectedDepartment(dept.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors relative ${
                selectedDepartment === dept.id
                  ? 'text-primary-dark dark:text-black bg-accent'
                  : 'text-text-light dark:text-text-dark bg-muted-light/10 dark:bg-accent/10 hover:bg-muted-light/20 dark:hover:bg-accent/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {dept.name}
            </motion.button>
          ))}
        </div>

        {/* Job listings */}
        <motion.div layout className="grid gap-6">
          <AnimatePresence mode="wait">
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-muted-light/10 dark:bg-accent/20 backdrop-blur-lg rounded-2xl p-6 hover:bg-muted-light/20 dark:hover:bg-accent/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="text-accent text-sm">{job.location}</span>
                      <span className="text-muted-light dark:text-text-dark/60 text-sm">
                        {job.type}
                      </span>
                      <span className="text-muted-light dark:text-text-dark/60 text-sm">
                        {job.experience}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-accent text-primary-dark dark:text-black px-6 py-2 rounded-full font-medium"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Career;
