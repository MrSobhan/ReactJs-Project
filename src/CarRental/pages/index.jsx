import { Footer } from "../Components/Footer/Footer"
import { NavbarDefault } from "../Components/Navbar/Navbar"


import { KpiCard1 } from "../Components/KPICard/KPICard";
import DefaultAccordion from "../Components/FAQs/FAQs";
import Header from "../Components/Header/Header";
import BlogSection from "../Components/Blog/Blog";
import { FeatureSection } from "../Components/Features/Features";
import CardSlider from "../Components/Slider/Slider";

import "./index.css";
export default function Home() {
  return (
    <>
      <NavbarDefault />
      <main className="container mx-auto lg:w-[80%] w-[90%] py-20">
        <Header />
        <KpiCard1 />
        <CardSlider />
        <FeatureSection />
        <CardSlider />
        {/* <section className="m-10">
          <div className="p-10 rounded-l-xl border border-blue-gray-100  rounded-xl bg-no-repeat lg:bg-contain bg-cover bg-right">

            <Typography
              variant="small"
              color="blue-gray"
              className="font-bold mb-2"
            >
              Upcoming Events
            </Typography>
            <Typography variant="h3" color="blue-gray">
              Tech Summit: Shaping Tomorrow
            </Typography>
            <Typography
              className="mt-2 mb-6 !text-base font-normal text-gray-500"
            >
              Prepare to be part of dynamic conversations that will redefine the
              boundaries.
            </Typography>
            <Button variant="outlined" className="flex-shrink-0">
              join now
            </Button>
          </div>
        </section> */}
        <BlogSection />
        <DefaultAccordion />
      </main>
      <Footer />
    </>
  );
}
