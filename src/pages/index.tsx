import CallToAction from "@/components/CallToAction";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

export default function Home(props: any) {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <CallToAction />
        <Features />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
