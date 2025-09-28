'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Info, Target, Zap, Shield } from 'lucide-react';
import { LandingContent } from '@/lib/content';

interface AboutProps {
  content: LandingContent;
}

export default function About({ content }: AboutProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { theme, about, businessAnalysis } = content;

  if (!about && !businessAnalysis) {
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
      theme === 'dark-glossy' ? 'bg-gray-800/30' :
      theme === 'light-clean' ? 'bg-gray-50' :
      'bg-gray-800/30'
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
              <Info className="w-8 h-8" />
            </div>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
              theme === 'dark-glossy' ? 'text-white' :
              theme === 'light-clean' ? 'text-gray-900' :
              'text-white'
            }`}>
              About Our Platform
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark-glossy' ? 'text-gray-300' :
              theme === 'light-clean' ? 'text-gray-600' :
              'text-gray-300'
            }`}>
              Learn more about our mission and what makes us different
            </p>
          </motion.div>

          {/* Main About Content */}
          {about && (
            <motion.div
              variants={itemVariants}
              className={`prose prose-lg max-w-4xl mx-auto mb-16 ${
                theme === 'dark-glossy' ? 'prose-invert' :
                theme === 'light-clean' ? 'prose-gray' :
                'prose-invert'
              }`}
            >
              <div className={`text-lg leading-relaxed ${
                theme === 'dark-glossy' ? 'text-gray-300' :
                theme === 'light-clean' ? 'text-gray-700' :
                'text-gray-300'
              }`}>
                {about.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          )}

          {/* Business Analysis Highlights */}
          {businessAnalysis && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Business Type */}
              {businessAnalysis.business_type && (
                <motion.div
                  variants={itemVariants}
                  className={`p-6 rounded-xl ${
                    theme === 'dark-glossy' 
                      ? 'bg-white/5 border border-white/10' 
                      : theme === 'light-clean'
                      ? 'bg-white border border-gray-200 shadow-lg'
                      : 'bg-white/5 border border-white/10'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    theme === 'dark-glossy' ? 'bg-blue-500/20 text-blue-400' :
                    theme === 'light-clean' ? 'bg-blue-100 text-blue-600' :
                    'bg-pink-500/20 text-pink-400'
                  }`}>
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className={`font-semibold text-lg mb-3 ${
                    theme === 'dark-glossy' ? 'text-white' :
                    theme === 'light-clean' ? 'text-gray-900' :
                    'text-white'
                  }`}>
                    What We Are
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    theme === 'dark-glossy' ? 'text-gray-300' :
                    theme === 'light-clean' ? 'text-gray-600' :
                    'text-gray-300'
                  }`}>
                    {businessAnalysis.business_type}
                  </p>
                </motion.div>
              )}

              {/* Target Audience */}
              {businessAnalysis.target_audience && (
                <motion.div
                  variants={itemVariants}
                  className={`p-6 rounded-xl ${
                    theme === 'dark-glossy' 
                      ? 'bg-white/5 border border-white/10' 
                      : theme === 'light-clean'
                      ? 'bg-white border border-gray-200 shadow-lg'
                      : 'bg-white/5 border border-white/10'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    theme === 'dark-glossy' ? 'bg-green-500/20 text-green-400' :
                    theme === 'light-clean' ? 'bg-green-100 text-green-600' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className={`font-semibold text-lg mb-3 ${
                    theme === 'dark-glossy' ? 'text-white' :
                    theme === 'light-clean' ? 'text-gray-900' :
                    'text-white'
                  }`}>
                    Who We Serve
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    theme === 'dark-glossy' ? 'text-gray-300' :
                    theme === 'light-clean' ? 'text-gray-600' :
                    'text-gray-300'
                  }`}>
                    {businessAnalysis.target_audience}
                  </p>
                </motion.div>
              )}

              {/* Business Model */}
              {businessAnalysis.business_model && (
                <motion.div
                  variants={itemVariants}
                  className={`p-6 rounded-xl ${
                    theme === 'dark-glossy' 
                      ? 'bg-white/5 border border-white/10' 
                      : theme === 'light-clean'
                      ? 'bg-white border border-gray-200 shadow-lg'
                      : 'bg-white/5 border border-white/10'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    theme === 'dark-glossy' ? 'bg-purple-500/20 text-purple-400' :
                    theme === 'light-clean' ? 'bg-purple-100 text-purple-600' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className={`font-semibold text-lg mb-3 ${
                    theme === 'dark-glossy' ? 'text-white' :
                    theme === 'light-clean' ? 'text-gray-900' :
                    'text-white'
                  }`}>
                    How We Work
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    theme === 'dark-glossy' ? 'text-gray-300' :
                    theme === 'light-clean' ? 'text-gray-600' :
                    'text-gray-300'
                  }`}>
                    {businessAnalysis.business_model}
                  </p>
                </motion.div>
              )}
            </div>
          )}

          {/* Key Value Props */}
          {businessAnalysis?.key_value_props && businessAnalysis.key_value_props.length > 0 && (
            <motion.div
              variants={itemVariants}
              className="mt-16"
            >
              <h3 className={`text-2xl font-bold text-center mb-8 ${
                theme === 'dark-glossy' ? 'text-white' :
                theme === 'light-clean' ? 'text-gray-900' :
                'text-white'
              }`}>
                Why Choose Us
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {businessAnalysis.key_value_props.slice(0, 6).map((prop, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 p-4 rounded-lg ${
                      theme === 'dark-glossy' ? 'bg-white/5' :
                      theme === 'light-clean' ? 'bg-white' :
                      'bg-white/5'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      theme === 'dark-glossy' ? 'bg-blue-400' :
                      theme === 'light-clean' ? 'bg-blue-600' :
                      'bg-pink-400'
                    }`} />
                    <p className={`text-sm leading-relaxed ${
                      theme === 'dark-glossy' ? 'text-gray-300' :
                      theme === 'light-clean' ? 'text-gray-700' :
                      'text-gray-300'
                    }`}>
                      {prop}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
