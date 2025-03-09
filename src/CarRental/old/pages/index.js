import CTA from "../Components/ui/CTA/CTA";
import FAQs from "../Components/ui/FAQs/FAQs";
import Features from "../Components/ui/Features/Features";
import Hero from "../Components/ui/Hero/Hero";
import Pricing from "../Components/ui/Pricing/Pricing";
import Testimonial from "../Components/ui/Testimonial/Testimonial";
import VisualFeatures from "../Components/ui/VisualFeatures/VisualFeatures";
import Footer from "../Components/ui/Footer/Footer"
import Navbar from "../Components/ui/Navbar/Navbar"

export default function Home() {
  return (
    <>
      {/* <Navbar />
      <Hero />
      <VisualFeatures />
      <Features />
      <CTA />
      <Testimonial />
      <Pricing />
      <FAQs />
      <Footer /> */}

<div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="py-6 px-4 border-b border-gray-700 flex justify-between items-center">
        <h1 className="text-3xl font-bold">کرایه خودروهای ایرانی</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-300">خانه</a>
          <a href="#services" className="hover:text-gray-300">خدمات</a>
          <a href="#about" className="hover:text-gray-300">درباره ما</a>
          <a href="#contact" className="hover:text-gray-300">تماس</a>
        </nav>
        <button className="md:hidden text-gray-300">منو</button>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative flex flex-col items-center justify-center py-20 px-4 text-center">
        {/* Background Decoration */}
        <div className="absolute inset-x-0 top-0 -z-10 overflow-hidden blur-3xl">
          <div 
            className="w-[36.125rem] h-[20rem] bg-gradient-to-tr from-gray-700 to-gray-900 opacity-40 rotate-[30deg] mx-auto"
            style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
          ></div>
        </div>
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
            کرایه و اجاره خودروهای ایرانی
          </h2>
          <p className="text-lg md:text-2xl mb-8 text-gray-300">
            بهترین انتخاب برای کرایه و اجاره خودروهای با کیفیت ایرانی. با ما سفری متفاوت تجربه کنید.
          </p>
          <a
            href="#services"
            className="inline-block px-8 py-4 bg-white text-black font-semibold rounded shadow hover:bg-gray-200 transition"
          >
            مشاهده خدمات
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">خدمات ما</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-700 rounded-lg text-center hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">کرایه بلندمدت</h3>
              <p className="text-gray-300">
                سرویس کرایه خودرو برای دوره‌های بلندمدت با تخفیف‌های ویژه.
              </p>
            </div>
            <div className="p-6 border border-gray-700 rounded-lg text-center hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">کرایه کوتاه‌مدت</h3>
              <p className="text-gray-300">
                کرایه خودرو برای نیازهای روزانه و مسافرت‌های کوتاه‌مدت.
              </p>
            </div>
            <div className="p-6 border border-gray-700 rounded-lg text-center hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">پشتیبانی ۲۴ ساعته</h3>
              <p className="text-gray-300">
                خدمات پشتیبانی سریع و ۲۴ ساعته جهت رفع هرگونه مشکل.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">درباره ما</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
            شرکت کرایه و اجاره خودروهای ایرانی از سال 1397 با هدف ارائه بهترین خدمات اجاره خودرو در ایران تاسیس شده است. 
            ما مفتخریم که با بهره‌گیری از تجربه و دانش بومی، خدماتی مطمئن، سریع و با کیفیت را به مشتریان عزیز ارائه دهیم.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">تماس با ما</h2>
          <p className="text-lg text-gray-300 mb-8">
            برای کسب اطلاعات بیشتر و رزرو خودرو، با ما تماس بگیرید.
          </p>
          <a
            href="mailto:info@iran-carrental.com"
            className="inline-block px-8 py-4 bg-white text-black font-semibold rounded shadow hover:bg-gray-200 transition"
          >
            ارسال ایمیل
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black border-t border-gray-700 text-center">
        <p className="text-gray-500">&copy; 2025 کرایه و اجاره خودروهای ایرانی. تمامی حقوق محفوظ است.</p>
      </footer>
    </div>
    </>
  );
}
