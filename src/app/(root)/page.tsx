import FocusCardsDemo from "@/components/Card";
import Hero from "@/components/Hero";
import { FloatingNavbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <FloatingNavbar />
      <section className="pb-20">
        <Hero />
      </section>

      <section className="pt-10">
        <FocusCardsDemo />
      </section>
    </div>
  );
}
