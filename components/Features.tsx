'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { getIcon } from '@/lib/icons';
import { LandingContent } from '@/lib/content';

interface FeaturesProps {
  content: LandingContent;
}

export default function Features({ content }: FeaturesProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { theme, features } = content;

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
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
              theme === 'dark-glossy' ? 'text-white' :
              theme === 'light-clean' ? 'text-gray-900' :
              'text-white'
            }`}>
              Why Choose Us?
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark-glossy' ? 'text-gray-300' :
              theme === 'light-clean' ? 'text-gray-600' :
              'text-gray-300'
            }`}>
              Discover the powerful features that make our platform the perfect choice for your needs.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = getIcon(feature.icon);
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`group relative p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    theme === 'dark-glossy' 
                      ? 'glass-dark hover:bg-white/10 border border-white/10' 
                      : theme === 'light-clean'
                      ? 'bg-gray-50 hover:bg-gray-100 border border-gray-200 shadow-lg hover:shadow-xl'
                      : 'glass hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {/* Background Glow Effect */}
                  {theme === 'dark-glossy' && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                  {theme === 'neon-gradient' && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${
                      theme === 'dark-glossy'
                        ? 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30'
                        : theme === 'light-clean'
                        ? 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'
                        : 'bg-pink-500/20 text-pink-400 group-hover:bg-pink-500/30'
                    } transition-colors duration-300`}>
                      {feature.customIcon ? (
                        <img
                          src={feature.customIcon}
                          alt={feature.title}
                          className="w-8 h-8"
                        />
                      ) : (
                        <Icon className="w-8 h-8" />
                      )}
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl font-semibold mb-4 ${
                      theme === 'dark-glossy' ? 'text-white' :
                      theme === 'light-clean' ? 'text-gray-900' :
                      'text-white'
                    }`}>
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-base leading-relaxed ${
                      theme === 'dark-glossy' ? 'text-gray-300' :
                      theme === 'light-clean' ? 'text-gray-600' :
                      'text-gray-300'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Features Grid (if more than 6 features) */}
          {features.length > 6 && (
            <motion.div
              variants={itemVariants}
              className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {features.slice(6).map((feature, index) => {
                const Icon = getIcon(feature.icon);
                
                return (
                  <div
                    key={index + 6}
                    className={`flex items-start space-x-4 p-6 rounded-xl ${
                      theme === 'dark-glossy' 
                        ? 'bg-white/5 border border-white/10' 
                        : theme === 'light-clean'
                        ? 'bg-gray-50 border border-gray-200'
                        : 'bg-white/5 border border-white/10'
                    }`}
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                      theme === 'dark-glossy' 
                        ? 'bg-blue-500/20 text-blue-400' 
                        : theme === 'light-clean'
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-pink-500/20 text-pink-400'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 ${
                        theme === 'dark-glossy' ? 'text-white' :
                        theme === 'light-clean' ? 'text-gray-900' :
                        'text-white'
                      }`}>
                        {feature.title}
                      </h4>
                      <p className={`text-sm ${
                        theme === 'dark-glossy' ? 'text-gray-300' :
                        theme === 'light-clean' ? 'text-gray-600' :
                        'text-gray-300'
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
