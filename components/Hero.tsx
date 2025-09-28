'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { LandingContent } from '@/lib/content';

interface HeroProps {
  content: LandingContent;
}

export default function Hero({ content }: HeroProps) {
  const { theme } = content;

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
      theme === 'neon-gradient' ? 'neon-gradient-bg' : 
      theme === 'dark-glossy' ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' :
      'bg-gradient-to-br from-blue-50 to-indigo-100'
    }`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        {theme === 'dark-glossy' && (
          <>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </>
        )}
        {theme === 'neon-gradient' && (
          <>
            <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </>
        )}
      </div>

      <div className="relative z-10 container mx-auto container-padding text-center">
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow */}
          {content.eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                theme === 'dark-glossy' ? 'glass text-blue-200 border-blue-400/30' :
                theme === 'light-clean' ? 'bg-blue-100 text-blue-800 border border-blue-200' :
                'glass text-pink-200 border-pink-400/30'
              }`}>
                {content.eyebrow}
              </span>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-hero font-bold mb-6 leading-tight ${
              theme === 'neon-gradient' ? 'text-gradient' : 
              theme === 'dark-glossy' ? 'text-white' : 
              'text-gray-900'
            }`}
          >
            {content.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-subtitle mb-8 max-w-3xl mx-auto ${
              theme === 'dark-glossy' ? 'text-gray-300' :
              theme === 'light-clean' ? 'text-gray-600' :
              'text-gray-200'
            }`}
          >
            {content.subtitle}
          </motion.p>

          {/* Badges */}
          {content.badges && content.badges.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              {content.badges.map((badge, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    theme === 'dark-glossy' ? 'bg-white/10 text-white border border-white/20' :
                    theme === 'light-clean' ? 'bg-gray-100 text-gray-700 border border-gray-200' :
                    'bg-white/10 text-white border border-white/20'
                  }`}
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          )}

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href={content.primaryCta.href}
              className={`inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 focus-ring ${
                theme === 'dark-glossy' ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25' :
                theme === 'light-clean' ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg' :
                'bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white shadow-lg shadow-pink-500/25'
              }`}
            >
              {content.primaryCta.text || content.primaryCta.label}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            
            {content.secondaryCta && (
              <a
                href={content.secondaryCta.href}
                className={`inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 focus-ring ${
                  theme === 'dark-glossy' ? 'glass text-white hover:bg-white/20' :
                  theme === 'light-clean' ? 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50' :
                  'glass text-white hover:bg-white/20'
                }`}
              >
                {content.secondaryCta.text || content.secondaryCta.label}
              </a>
            )}
          </motion.div>

          {/* Hero Image */}
          {(content.heroImage || content.customImages?.hero) && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="relative max-w-4xl mx-auto"
            >
              <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${
                theme === 'dark-glossy' ? 'shadow-blue-500/20' :
                theme === 'neon-gradient' ? 'shadow-pink-500/20' :
                'shadow-gray-500/20'
              }`}>
                <Image
                  src={content.customImages?.hero || content.heroImage || ''}
                  alt={content.title}
                  width={1200}
                  height={630}
                  className="w-full h-auto"
                  priority
                />
                {theme === 'dark-glossy' && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                )}
              </div>
            </motion.div>
          )}

          {/* Social Proof Logos */}
          {content.logos && content.logos.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-16"
            >
              <p className={`text-sm mb-8 ${
                theme === 'dark-glossy' ? 'text-gray-400' :
                theme === 'light-clean' ? 'text-gray-500' :
                'text-gray-300'
              }`}>
                Trusted by leading companies
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {content.logos.map((logo, index) => (
                  <div key={index} className="h-8 w-auto">
                    <Image
                      src={logo}
                      alt={`Company logo ${index + 1}`}
                      width={120}
                      height={40}
                      className="h-8 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
