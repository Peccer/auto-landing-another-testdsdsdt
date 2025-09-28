'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';
import { LandingContent } from '@/lib/content';

interface TestimonialsProps {
  content: LandingContent;
}

export default function Testimonials({ content }: TestimonialsProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { theme, socialProof } = content;

  if (!socialProof?.testimonials || socialProof.testimonials.length === 0) {
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
      theme === 'dark-glossy' ? 'bg-gray-800/50' :
      theme === 'light-clean' ? 'bg-gray-50' :
      'bg-gray-800/50'
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
              What Our Users Say
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark-glossy' ? 'text-gray-300' :
              theme === 'light-clean' ? 'text-gray-600' :
              'text-gray-300'
            }`}>
              Join thousands of satisfied customers who trust our platform
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialProof.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative p-8 rounded-2xl ${
                  theme === 'dark-glossy' 
                    ? 'bg-white/5 border border-white/10 backdrop-blur-sm' 
                    : theme === 'light-clean'
                    ? 'bg-white border border-gray-200 shadow-lg'
                    : 'bg-white/5 border border-white/10 backdrop-blur-sm'
                }`}
              >
                {/* Quote Icon */}
                <div className={`absolute top-6 right-6 ${
                  theme === 'dark-glossy' ? 'text-blue-400/30' :
                  theme === 'light-clean' ? 'text-blue-600/30' :
                  'text-pink-400/30'
                }`}>
                  <Quote className="w-8 h-8" />
                </div>

                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 fill-current ${
                        theme === 'dark-glossy' ? 'text-yellow-400' :
                        theme === 'light-clean' ? 'text-yellow-500' :
                        'text-yellow-400'
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className={`text-lg mb-6 leading-relaxed ${
                  theme === 'dark-glossy' ? 'text-gray-200' :
                  theme === 'light-clean' ? 'text-gray-700' :
                  'text-gray-200'
                }`}>
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold mr-4 ${
                    theme === 'dark-glossy' ? 'bg-blue-500' :
                    theme === 'light-clean' ? 'bg-blue-600' :
                    'bg-pink-500'
                  }`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className={`font-semibold ${
                      theme === 'dark-glossy' ? 'text-white' :
                      theme === 'light-clean' ? 'text-gray-900' :
                      'text-white'
                    }`}>
                      {testimonial.name}
                    </div>
                    <div className={`text-sm ${
                      theme === 'dark-glossy' ? 'text-gray-400' :
                      theme === 'light-clean' ? 'text-gray-600' :
                      'text-gray-400'
                    }`}>
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          {socialProof.stats && socialProof.stats.length > 0 && (
            <motion.div
              variants={itemVariants}
              className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {socialProof.stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-6 rounded-xl ${
                    theme === 'dark-glossy' 
                      ? 'bg-white/5 border border-white/10' 
                      : theme === 'light-clean'
                      ? 'bg-white border border-gray-200'
                      : 'bg-white/5 border border-white/10'
                  }`}
                >
                  <div className={`text-3xl font-bold mb-2 ${
                    theme === 'dark-glossy' ? 'text-blue-400' :
                    theme === 'light-clean' ? 'text-blue-600' :
                    'text-pink-400'
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm font-medium ${
                    theme === 'dark-glossy' ? 'text-gray-300' :
                    theme === 'light-clean' ? 'text-gray-600' :
                    'text-gray-300'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Logos Section */}
          {socialProof.logos && socialProof.logos.length > 0 && (
            <motion.div
              variants={itemVariants}
              className="mt-16 text-center"
            >
              <p className={`text-sm font-medium mb-8 ${
                theme === 'dark-glossy' ? 'text-gray-400' :
                theme === 'light-clean' ? 'text-gray-600' :
                'text-gray-400'
              }`}>
                Powered by industry leaders
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8">
                {socialProof.logos.map((logo, index) => (
                  <div
                    key={index}
                    className={`px-6 py-3 rounded-lg font-medium ${
                      theme === 'dark-glossy' 
                        ? 'bg-white/10 text-gray-300' 
                        : theme === 'light-clean'
                        ? 'bg-gray-100 text-gray-700'
                        : 'bg-white/10 text-gray-300'
                    }`}
                  >
                    {logo}
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
