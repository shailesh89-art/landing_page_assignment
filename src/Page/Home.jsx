import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Partners from "../components/Partners";
import Blogs from "../components/Blogs";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Partners />
      <Blogs />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}