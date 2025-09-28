import { getLandingContent } from '@/lib/content';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default async function HomePage() {
  const content = await getLandingContent();

  return (
    <main className={`min-h-screen theme-${content.theme}`}>
      <Hero content={content} />
      <Features content={content} />
      <Testimonials content={content} />
      <About content={content} />
      <FAQ content={content} />
      <Contact content={content} />
      <CTA content={content} />
      <Footer content={content} />
    </main>
  );
}
