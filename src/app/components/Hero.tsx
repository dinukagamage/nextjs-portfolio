'use client'
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok, FaCode, FaPalette, FaVideo } from 'react-icons/fa';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.querySelector('.hero-container')?.getBoundingClientRect();
      if (rect) {
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const roleIcons = [
    { icon: FaCode, label: "Full Stack Developer" },
    { icon: FaPalette, label: "UI/UX Enthusiast" },
    { icon: FaVideo, label: "Content Creator" }
  ];

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4 hero-container">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className='flex justify-center items-center mb-8 relative'
            variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
            animate={floatingAnimation}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40 rounded-full blur-lg"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <Image 
                src="/profile.avif" 
                alt="Profile" 
                width={120} 
                height={120} 
                className="rounded-full w-32 h-32 object-cover ring-4 ring-primary/30 shadow-2xl relative z-10" 
              />
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-full opacity-20"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={{ hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Hi, I&apos;m <motion.span className="text-primary">Dinuka Gamage</motion.span>
          </motion.h1>

          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-8"
            variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {roleIcons.map((role, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <role.icon className="text-primary" />
                <span className="text-gray-700 dark:text-gray-300">{role.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-6 mb-10"
            variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {[
              { icon: FaGithub, href: "https://github.com/dinukagamage", color: "hover:text-gray-900 dark:hover:text-white" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/dinuka-gamage", color: "hover:text-blue-600" },
              { icon: FaTiktok, href: "https://www.tiktok.com/@thedinuka", color: "hover:text-black dark:hover:text-white" },
              { icon: FaInstagram, href: "https://www.instagram.com/thedinuka/", color: "hover:text-pink-600" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-3xl text-gray-600 dark:text-gray-300 ${social.color} transition-all duration-300`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>

          <motion.div 
            className="flex justify-center"
            variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <a
              href="/dinuka-CV.pdf"
              download
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center font-medium shadow-lg"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-3 bg-primary rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
