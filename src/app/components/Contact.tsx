'use client'

import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, slideInLeft, slideInRight } from '@/utils/animations'
import emailjs from '@emailjs/browser'

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<FormStatus>('idle')

  // EmailJS credentials
  const EMAILJS_SERVICE_ID = 'service_718ic8t'
  const EMAILJS_TEMPLATE_ID = 'template_is0iuwj' // Main template with auto-reply linked
  const EMAILJS_PUBLIC_KEY = 'os7aOfA4plmKBPP2z'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Template parameters - EmailJS will handle auto-reply automatically
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        email: formData.email, // Important: This should match your auto-reply template's To Email field
        message: formData.message,
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        time: new Date().toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: true 
        }),
        to_email: 'thdinukagamage@gmail.com',
        reply_to: 'thdinukagamage@gmail.com'
      }

      // Send single email - auto-reply will be triggered automatically if properly configured
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      console.log('Email sent successfully:', response)
      
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })

      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)

    } catch (error) {
      console.error('Failed to send email:', error)
      setStatus('error')
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  // Alternative approach: Send two separate emails if auto-reply linking doesn't work
  const handleSubmitAlternative = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Template parameters for notification email (to you)
      const notificationParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        time: new Date().toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: true 
        }),
        to_email: 'thdinukagamage@gmail.com'
      }

      // Template parameters for auto-reply email (to sender)
      const autoReplyParams = {
        to_name: formData.name,
        to_email: formData.email,
        user_name: formData.name, // Alternative parameter name
        user_email: formData.email, // Alternative parameter name
        from_name: 'Tharindu Dinuka Gamage',
        reply_to: 'thdinukagamage@gmail.com'
      }

      // Send notification email to you
      const notificationResponse = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        notificationParams,
        EMAILJS_PUBLIC_KEY
      )

      // Send auto-reply email to sender using the correct template ID
      const autoReplyResponse = await emailjs.send(
        EMAILJS_SERVICE_ID,
        'template_ygj6kyk', // Use your actual auto-reply template ID
        autoReplyParams,
        EMAILJS_PUBLIC_KEY
      )

      console.log('Notification sent:', notificationResponse)
      console.log('Auto-reply sent:', autoReplyResponse)
      
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })

      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)

    } catch (error) {
      console.error('Failed to send emails:', error)
      setStatus('error')
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div id="contact" className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInUp}
      >
        Contact Me
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div 
          className="space-y-8"
          {...slideInLeft}
        >
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-secondary">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
          </motion.div>
          
          <motion.div 
            className="space-y-4"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaEnvelope className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:thdinukagamage@gmail.com" className="text-secondary hover:text-primary">
                  thdinukagamage@gmail.com
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaPhone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a href="tel:+94717945520" className="text-secondary hover:text-primary">
                  +94 71 79 45 520
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaMapMarkerAlt className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-secondary">Colombo, Sri Lanka</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.div 
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          {...slideInRight}
        >
          <motion.form 
            onSubmit={handleSubmit} // Use handleSubmitAlternative if needed
            className="space-y-6"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </motion.div>
            
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
              whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </motion.button>
            
            {status === 'success' && (
              <motion.p 
                className="text-green-500 text-center font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✅ Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}
            
            {status === 'error' && (
              <motion.p 
                className="text-red-500 text-center font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ❌ Failed to send message. Please try again or email me directly.
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </div>
  )
}