import { Footer } from "../Components/Footer/Footer"
import { NavbarDefault } from "../Components/Navbar/Navbar"
import { KpiCardSection } from "../Components/KPICard/KPICard";
import DefaultAccordion from "../Components/FAQs/FAQs";
import Header from "../Components/Header/Header";
import BlogSection from "../Components/Blog/Blog";
import { FeatureSection } from "../Components/Features/Features";
import CardSlider from "../Components/Slider/Slider";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import CarSlider from "../Components/CarSlider/CarSlider";

// import "./index.css";
export default function Home() {
  return (
    <>
      <NavbarDefault />
      <Header />
      <About />
      {/* <CardSlider /> */}
      <CarSlider />
      <FeatureSection />
      {/* <CardSlider /> */}
      <CarSlider />
      <BlogSection />
      <Contact />
      <DefaultAccordion />
      <Footer />
    </>
  );
}
