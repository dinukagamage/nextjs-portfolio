'use client'

import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer
} from '@/utils/animations'

export default function About() {
  return (
    <section id="about" className="py-7">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-4xl font-bold mb-4 text-center"
          {...fadeInDown}
        >
          About Me
        </motion.h1>

        {/* Bio Section */}
        <motion.section
          className="mb-20"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <div className="max-w-5xl py-7 mx-auto">
            <motion.div
              className="bg-white dark:bg-dark/50 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 dark:border-gray-800"
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg md:text-xl text-secondary leading-relaxed mb-6">
                I&apos;m <span className="font-semibold text-primary">Dinuka Gamage</span>, an undergraduate student at NSBM Green University, currently pursuing a BSc (Hons) in Management Information Systems.
                I have hands-on experience in full-stack web development, particularly with ReactJS, NextJS, and PHP-based backend systems, along with database management using MySQL.
              </p>
              <p className="text-lg md:text-xl text-secondary leading-relaxed">
                I&apos;m also exploring mobile app development and UI/UX design to broaden my skillset. With a passion for creating clean, scalable, and user-centered digital solutions,
                I&apos;m driven by curiosity and constantly eager to learn new technologies and improve as a developer.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            {...fadeInUp}
          >
            Technical Skills
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Frontend */}
            <motion.div
              className="bg-white dark:bg-dark/50 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 group"
              variants={fadeInUp}
              whileHover={{
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                scale: 1.02
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                whileHover={{ rotate: 5 }}
              >
                <FaCode className="h-8 w-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">Frontend Development</h3>
              <ul className="text-secondary space-y-3">
                {["React / Next.js", "TypeScript", "Tailwind CSS", "HTML5 / CSS3"].map((skill, index) => (
                  <motion.li
                    key={skill}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Backend */}
            <motion.div
              className="bg-white dark:bg-dark/50 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 group"
              variants={fadeInUp}
              whileHover={{
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                scale: 1.02
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                whileHover={{ rotate: 5 }}
              >
                <FaLaptopCode className="h-8 w-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">Backend Development</h3>
              <ul className="text-secondary space-y-3">
                {["Node.js", "Express", "MySQL", "MongoDB"].map((skill, index) => (
                  <motion.li
                    key={skill}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Tools */}
            <motion.div
              className="bg-white dark:bg-dark/50 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 group"
              variants={fadeInUp}
              whileHover={{
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                scale: 1.02
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                whileHover={{ rotate: 5 }}
              >
                <FaGraduationCap className="h-8 w-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">Tools & Design</h3>
              <ul className="text-secondary space-y-3">
                {["Git / GitHub", "Figma", "Adobe XD", "Photoshop / Premiere Pro"].map((skill, index) => (
                  <motion.li
                    key={skill}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </section>
  )
}
