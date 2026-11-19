import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { SeoGeo } from "@/components/sections/SeoGeo";
import { WebDev } from "@/components/sections/WebDev";
import { PaidTraffic } from "@/components/sections/PaidTraffic";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesGrid />
      <SeoGeo />
      <WebDev />
      <PaidTraffic />
      <Process />
      <Faq />
      <Contact />
    </>
  );
}
