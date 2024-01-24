import {
  Navbar,
  Contact,
  Pricing,
  Feature,
  Footer,
  Form,
  Showcase,
  Team,
  Testimonial,
  CTA,
  Hero,
} from "@/components";

export default function Home() {
  return (
    <section className="flex flex-col w-full h-full min-h-[100dvh] justify-start items-center">
      <Navbar />
      <Hero />
      <Feature />
      <Pricing />
      <Team />
      <Showcase />
      <Testimonial />
      <CTA />
      <Contact />
      <Footer />
    </section>
  );
}
