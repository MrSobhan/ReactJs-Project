import { Footer } from "../Components/Footer/Footer"
import { NavbarDefault } from "../Components/Navbar/Navbar"
import { KpiCardSection } from "../Components/KPICard/KPICard";
import DefaultAccordion from "../Components/FAQs/FAQs";
import Header from "../Components/Header/Header";
import BlogSection from "../Components/Blog/Blog";
import { FeatureSection } from "../Components/Features/Features";
import CardSlider from "../Components/Slider/Slider";

// import "./index.css";
export default function Home() {
  return (
    <>
      <NavbarDefault />
      <main className="container mx-auto lg:w-[80%] w-[90%] py-20">
        <Header />
        <KpiCardSection />
        <CardSlider />
        <FeatureSection />
        <CardSlider />
        <BlogSection />
        <DefaultAccordion />
      </main>
      <Footer />
    </>
  );
}
