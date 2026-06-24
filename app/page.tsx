import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Marquee from '@/components/sections/Marquee';
import HowItWorks from '@/components/sections/HowItWorks';
import FinalCTA from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <Marquee />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </main>
  );
}
