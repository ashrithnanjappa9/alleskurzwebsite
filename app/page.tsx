import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Marquee from '@/components/sections/Marquee';
import HowItWorks from '@/components/sections/HowItWorks';
import NewsGrid from '@/components/sections/NewsGrid';
import Polls from '@/components/sections/Polls';
import FinalCTA from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <Marquee />
      <HowItWorks />
      <NewsGrid />
      <Polls />
      <FinalCTA />
      <Footer />
    </main>
  );
}
