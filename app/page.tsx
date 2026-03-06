import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Locations from "@/components/Locations";
import Instagram from "@/components/Instagram";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Menu />
      <Locations />
      <Instagram />
      <Footer />
    </main>
  );
}
