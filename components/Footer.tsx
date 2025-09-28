'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { LandingContent } from '@/lib/content';

interface FooterProps {
  content: LandingContent;
}

export default function Footer({ content }: FooterProps) {
  const { theme } = content;
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 border-t ${
      theme === 'dark-glossy' 
        ? 'bg-gray-900 border-gray-800' 
        : theme === 'light-clean'
        ? 'bg-gray-50 border-gray-200'
        : 'bg-gray-900 border-gray-800'
    }`}>
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo/Brand */}
          <div className="mb-8">
            <h3 className={`text-2xl font-bold ${
              theme === 'dark-glossy' ? 'text-white' :
              theme === 'light-clean' ? 'text-gray-900' :
              'text-white'
            }`}>
              {content.title}
            </h3>
            <p className={`mt-2 text-sm ${
              theme === 'dark-glossy' ? 'text-gray-400' :
              theme === 'light-clean' ? 'text-gray-600' :
              'text-gray-400'
            }`}>
              {content.subtitle}
            </p>
          </div>

          {/* Links */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="/privacy"
                className={`transition-colors hover:underline ${
                  theme === 'dark-glossy' ? 'text-gray-400 hover:text-white' :
                  theme === 'light-clean' ? 'text-gray-600 hover:text-gray-900' :
                  'text-gray-400 hover:text-white'
                }`}
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className={`transition-colors hover:underline ${
                  theme === 'dark-glossy' ? 'text-gray-400 hover:text-white' :
                  theme === 'light-clean' ? 'text-gray-600 hover:text-gray-900' :
                  'text-gray-400 hover:text-white'
                }`}
              >
                Terms of Service
              </a>
              <a
                href="/contact"
                className={`transition-colors hover:underline ${
                  theme === 'dark-glossy' ? 'text-gray-400 hover:text-white' :
                  theme === 'light-clean' ? 'text-gray-600 hover:text-gray-900' :
                  'text-gray-400 hover:text-white'
                }`}
              >
                Contact
              </a>
              <a
                href="/support"
                className={`transition-colors hover:underline ${
                  theme === 'dark-glossy' ? 'text-gray-400 hover:text-white' :
                  theme === 'light-clean' ? 'text-gray-600 hover:text-gray-900' :
                  'text-gray-400 hover:text-white'
                }`}
              >
                Support
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className={`text-sm ${
            theme === 'dark-glossy' ? 'text-gray-500' :
            theme === 'light-clean' ? 'text-gray-500' :
            'text-gray-500'
          }`}>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span>Made with</span>
              <Heart className={`w-4 h-4 ${
                theme === 'dark-glossy' ? 'text-red-400' :
                theme === 'light-clean' ? 'text-red-500' :
                'text-red-400'
              }`} />
              <span>by</span>
              <a
                href="https://github.com/your-org/auto-landingpage-builder-vercel"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium transition-colors hover:underline ${
                  theme === 'dark-glossy' ? 'text-blue-400 hover:text-blue-300' :
                  theme === 'light-clean' ? 'text-blue-600 hover:text-blue-700' :
                  'text-pink-400 hover:text-pink-300'
                }`}
              >
                Auto Landing Page Builder
              </a>
            </div>
            <p>© {currentYear} All rights reserved.</p>
          </div>

          {/* Powered by */}
          <div className="mt-6 pt-6 border-t border-gray-700">
            <p className={`text-xs ${
              theme === 'dark-glossy' ? 'text-gray-600' :
              theme === 'light-clean' ? 'text-gray-400' :
              'text-gray-600'
            }`}>
              Powered by{' '}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Vercel
              </a>
              {' • '}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Next.js
              </a>
              {' • '}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Tailwind CSS
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
