import Head from 'next/head';
import HeroSection from '@/components/HeroSection';
import InfluenceSection from '@/components/InfluenceSection';
import PhilosophySection from '@/components/PhilosophySection';
import PartnerSection from '@/components/PartnerSection';
import FoundersSection from '@/components/FoundersSection';
import Card from '@/components/Card';
import ConversationCTASection from '@/components/ConversationSection';
import FooterSection from '@/components/FooterSection';


export default function Home() {
  return (
    <>
      <Head>
        <title>Rezenate | Leadership Changes Everything</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
     


     
      {/* SEPARATED HERO COMPONENT */}
      <HeroSection />

      {/* INFLUENCE SECTION */}
      <InfluenceSection />

      {/* PHILOSOPHY SECTION */}
      <PhilosophySection />

      {/* PARTNER SECTION */}
      <PartnerSection />

      {/* NEW FOUNDERS SECTION */}
      <FoundersSection />

      <ConversationCTASection />  

      <FooterSection/>

     

   
    </>
  );
}