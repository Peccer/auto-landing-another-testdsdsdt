'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import { LandingContent } from '@/lib/content';

interface ContactProps {
  content: LandingContent;
}

export default function Contact({ content }: ContactProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { theme, contact } = content;

  if (!contact) {
    return null;
  }

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className={`section-padding ${
      theme === 'dark-glossy' ? 'bg-gray-900' :
      theme === 'light-clean' ? 'bg-white' :
      'bg-gray-900'
    }`}>
      <div className="container mx-auto container-padding">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
              theme === 'dark-glossy' ? 'bg-blue-500/20 text-blue-400' :
              theme === 'light-clean' ? 'bg-blue-100 text-blue-600' :
              'bg-pink-500/20 text-pink-400'
            }`}>
              <MessageCircle className="w-8 h-8" />
            </div>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
              theme === 'dark-glossy' ? 'text-white' :
              theme === 'light-clean' ? 'text-gray-900' :
              'text-white'
            }`}>
              Get In Touch
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark-glossy' ? 'text-gray-300' :
              theme === 'light-clean' ? 'text-gray-600' :
              'text-gray-300'
            }`}>
              Ready to get started? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className={`text-2xl font-bold mb-6 ${
                theme === 'dark-glossy' ? 'text-white' :
                theme === 'light-clean' ? 'text-gray-900' :
                'text-white'
              }`}>
                Contact Information
              </h3>

              {/* Email */}
              {contact.email && (
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    theme === 'dark-glossy' ? 'bg-blue-500/20 text-blue-400' :
                    theme === 'light-clean' ? 'bg-blue-100 text-blue-600' :
                    'bg-pink-500/20 text-pink-400'
                  }`}>
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${
                      theme === 'dark-glossy' ? 'text-white' :
                      theme === 'light-clean' ? 'text-gray-900' :
                      'text-white'
                    }`}>
                      Email
                    </h4>
                    <a
                      href={`mailto:${contact.email}`}
                      className={`transition-colors ${
                        theme === 'dark-glossy' ? 'text-gray-300 hover:text-blue-400' :
                        theme === 'light-clean' ? 'text-gray-600 hover:text-blue-600' :
                        'text-gray-300 hover:text-pink-400'
                      }`}
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
              )}

              {/* Phone */}
              {contact.phone && (
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    theme === 'dark-glossy' ? 'bg-green-500/20 text-green-400' :
                    theme === 'light-clean' ? 'bg-green-100 text-green-600' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${
                      theme === 'dark-glossy' ? 'text-white' :
                      theme === 'light-clean' ? 'text-gray-900' :
                      'text-white'
                    }`}>
                      Phone
                    </h4>
                    <a
                      href={`tel:${contact.phone}`}
                      className={`transition-colors ${
                        theme === 'dark-glossy' ? 'text-gray-300 hover:text-green-400' :
                        theme === 'light-clean' ? 'text-gray-600 hover:text-green-600' :
                        'text-gray-300 hover:text-green-400'
                      }`}
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>
              )}

              {/* Address */}
              {contact.address && (
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    theme === 'dark-glossy' ? 'bg-purple-500/20 text-purple-400' :
                    theme === 'light-clean' ? 'bg-purple-100 text-purple-600' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${
                      theme === 'dark-glossy' ? 'text-white' :
                      theme === 'light-clean' ? 'text-gray-900' :
                      'text-white'
                    }`}>
                      Location
                    </h4>
                    <p className={`${
                      theme === 'dark-glossy' ? 'text-gray-300' :
                      theme === 'light-clean' ? 'text-gray-600' :
                      'text-gray-300'
                    }`}>
                      {contact.address}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className={`p-8 rounded-2xl ${
                theme === 'dark-glossy' 
                  ? 'bg-white/5 border border-white/10 backdrop-blur-sm' 
                  : theme === 'light-clean'
                  ? 'bg-gray-50 border border-gray-200'
                  : 'bg-white/5 border border-white/10 backdrop-blur-sm'
              }`}>
                <h3 className={`text-2xl font-bold mb-6 ${
                  theme === 'dark-glossy' ? 'text-white' :
                  theme === 'light-clean' ? 'text-gray-900' :
                  'text-white'
                }`}>
                  Send us a message
                </h3>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        theme === 'dark-glossy' ? 'text-gray-300' :
                        theme === 'light-clean' ? 'text-gray-700' :
                        'text-gray-300'
                      }`}>
                        Name
                      </label>
                      <input
                        type="text"
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                          theme === 'dark-glossy' 
                            ? 'bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-blue-400' 
                            : theme === 'light-clean'
                            ? 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                            : 'bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-pink-400'
                        }`}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        theme === 'dark-glossy' ? 'text-gray-300' :
                        theme === 'light-clean' ? 'text-gray-700' :
                        'text-gray-300'
                      }`}>
                        Email
                      </label>
                      <input
                        type="email"
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                          theme === 'dark-glossy' 
                            ? 'bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-blue-400' 
                            : theme === 'light-clean'
                            ? 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                            : 'bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-pink-400'
                        }`}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark-glossy' ? 'text-gray-300' :
                      theme === 'light-clean' ? 'text-gray-700' :
                      'text-gray-300'
                    }`}>
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                        theme === 'dark-glossy' 
                          ? 'bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-blue-400' 
                          : theme === 'light-clean'
                          ? 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                          : 'bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-pink-400'
                      }`}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className={`w-full px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 ${
                      theme === 'dark-glossy' 
                        ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
                        : theme === 'light-clean'
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                        : 'bg-pink-500 hover:bg-pink-600 text-white shadow-lg shadow-pink-500/25'
                    }`}
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
