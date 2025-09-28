'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Sparkles } from 'lucide-react';
import { LandingContent } from '@/lib/content';

interface CTAProps {
  content: LandingContent;
}

export default function CTA({ content }: CTAProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { theme, cta } = content;

  if (!cta) return null;

  return (
    <section className={`section-padding relative overflow-hidden ${
      theme === 'dark-glossy' ? 'bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900' :
      theme === 'light-clean' ? 'bg-gradient-to-br from-blue-50 to-indigo-100' :
      'bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900'
    }`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        {theme === 'dark-glossy' && (
          <>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </>
        )}
        {theme === 'neon-gradient' && (
          <>
            <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </>
        )}
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Decorative Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${
              theme === 'dark-glossy' ? 'bg-blue-500/20 text-blue-400' :
              theme === 'light-clean' ? 'bg-blue-100 text-blue-600' :
              'bg-pink-500/20 text-pink-400'
            }`}>
              <Sparkles className="w-10 h-10" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
              theme === 'dark-glossy' ? 'text-white' :
              theme === 'light-clean' ? 'text-gray-900' :
              'text-white'
            }`}
          >
            {cta.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-xl mb-10 max-w-2xl mx-auto ${
              theme === 'dark-glossy' ? 'text-gray-300' :
              theme === 'light-clean' ? 'text-gray-600' :
              'text-gray-200'
            }`}
          >
            {cta.subtitle}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a
              href={cta.button.href}
              className={`inline-flex items-center justify-center px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 focus-ring group ${
                theme === 'dark-glossy' 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl shadow-blue-500/25 animate-glow' 
                  : theme === 'light-clean'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-2xl'
                  : 'bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white shadow-2xl shadow-pink-500/25 animate-glow'
              }`}
            >
              {cta.button.label}
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8"
          >
            <p className={`text-sm ${
              theme === 'dark-glossy' ? 'text-gray-400' :
              theme === 'light-clean' ? 'text-gray-500' :
              'text-gray-300'
            }`}>
              No credit card required • Free trial • Cancel anytime
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
