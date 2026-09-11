import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { AppPreview } from './AppPreview';
import { Features } from './Features';
import { HowItWorks } from './HowItWorks';
import { Benefits } from './Benefits';
import { Security } from './Security';
import { Faq } from './Faq';
import { FinalCta } from './FinalCta';
import { Footer } from './Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <AppPreview />
      <Features />
      <HowItWorks />
      <Benefits />
      <Security />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}
