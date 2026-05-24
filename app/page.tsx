import Hero from '@/components/Hero';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Promotion from '@/components/Promotion';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <HowItWorks />
      <Promotion />
      <FAQ />
      <Contact />
    </div>
  );
}
