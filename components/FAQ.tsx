'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { LandingContent } from '@/lib/content';

interface FAQProps {
  content: LandingContent;
}

export default function FAQ({ content }: FAQProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { theme, faqs } = content;

  if (!faqs || faqs.length === 0) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
              theme === 'dark-glossy' ? 'bg-blue-500/20 text-blue-400' :
              theme === 'light-clean' ? 'bg-blue-100 text-blue-600' :
              'bg-pink-500/20 text-pink-400'
            }`}>
              <HelpCircle className="w-8 h-8" />
            </div>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
              theme === 'dark-glossy' ? 'text-white' :
              theme === 'light-clean' ? 'text-gray-900' :
              'text-white'
            }`}>
              Frequently Asked Questions
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark-glossy' ? 'text-gray-300' :
              theme === 'light-clean' ? 'text-gray-600' :
              'text-gray-300'
            }`}>
              Everything you need to know about our platform
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`rounded-xl border overflow-hidden ${
                  theme === 'dark-glossy' 
                    ? 'bg-white/5 border-white/10 backdrop-blur-sm' 
                    : theme === 'light-clean'
                    ? 'bg-gray-50 border-gray-200'
                    : 'bg-white/5 border-white/10 backdrop-blur-sm'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full px-6 py-6 text-left flex items-center justify-between transition-colors ${
                    theme === 'dark-glossy' ? 'hover:bg-white/5' :
                    theme === 'light-clean' ? 'hover:bg-gray-100' :
                    'hover:bg-white/5'
                  }`}
                >
                  <span className={`font-semibold text-lg pr-4 ${
                    theme === 'dark-glossy' ? 'text-white' :
                    theme === 'light-clean' ? 'text-gray-900' :
                    'text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex-shrink-0 ${
                      theme === 'dark-glossy' ? 'text-gray-400' :
                      theme === 'light-clean' ? 'text-gray-600' :
                      'text-gray-400'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className={`px-6 pb-6 ${
                        theme === 'dark-glossy' ? 'text-gray-300' :
                        theme === 'light-clean' ? 'text-gray-700' :
                        'text-gray-300'
                      }`}>
                        <div className="prose prose-lg max-w-none">
                          <p className="leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* CTA at bottom */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <p className={`text-lg mb-6 ${
              theme === 'dark-glossy' ? 'text-gray-300' :
              theme === 'light-clean' ? 'text-gray-600' :
              'text-gray-300'
            }`}>
              Still have questions?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-xl font-semibold transition-all ${
                theme === 'dark-glossy' 
                  ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
                  : theme === 'light-clean'
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                  : 'bg-pink-500 hover:bg-pink-600 text-white shadow-lg shadow-pink-500/25'
              }`}
            >
              Contact Support
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
