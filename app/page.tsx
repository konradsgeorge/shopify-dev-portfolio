import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Technologies from "@/components/Technologies";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

/*
 * Testimonials section is built (components/Testimonials.tsx) but intentionally
 * NOT included here. AGENTS.md §5 says to omit it entirely until real client
 * quotes exist. Enable it by importing and placing <Testimonials /> after
 * <About /> when real data is ready.
 */

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <Services />
      <Process />
      <Technologies />
      <About />
      <FAQ />
      <Contact />
    </main>
  );
}
