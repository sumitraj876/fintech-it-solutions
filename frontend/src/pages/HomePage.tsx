import { SEO } from '../components/layout/SEO';
import { Hero } from '../sections/home/Hero';
import { WhatWeDo } from '../sections/home/WhatWeDo';
import { ServicesGrid } from '../sections/home/ServicesGrid';
import { FeaturedSolutions } from '../sections/home/FeaturedSolutions';
import { ConceptDemos } from '../sections/home/ConceptDemos';
import { Approach } from '../sections/home/Approach';
import { TechStack } from '../sections/home/TechStack';
import { WhyUs } from '../sections/home/WhyUs';
import { PricingTeaser } from '../sections/home/PricingTeaser';
import { FounderIntro } from '../sections/home/FounderIntro';
import { LocationsTeaser } from '../sections/home/LocationsTeaser';
import { CareersCTA } from '../sections/home/CareersCTA';
import { ContactCTA } from '../sections/home/ContactCTA';

export default function HomePage() {
  return (
    <>
      <SEO
        title="AI, software, and digital transformation"
        description="FINTECH IT SOLUTIONS builds AI-powered software, data products, and cloud systems for startups, SMBs, and enterprises."
        path="/"
      />
      <Hero />
      <WhatWeDo />
      <ServicesGrid />
      <FeaturedSolutions />
      <ConceptDemos />
      <Approach />
      <TechStack />
      <WhyUs />
      <PricingTeaser />
      <FounderIntro />
      <LocationsTeaser />
      <CareersCTA />
      <ContactCTA />
    </>
  );
}