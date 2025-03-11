import React from "react";
import { Card, CardBody, Typography, Avatar, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function FeatureSection() {
  return (
    <section className="py-10">
      <div className="container mx-auto md:mb-10 text-center lg:my-2 text-slate-900 md:flex items-center justify-between relative">
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
        </div>
        <div>
          <h3 className="lalezar text-3xl text-right">اجاره خودرو بدون راننده</h3>
          <p className="text-right mt-4 leading-7 max-w-[400px]">سوییچ رنت این امکان را فراهم نموده است تا خدمات کرایه ماشین بدون راننده را چه در ایران و چه در هر نقطه دیگر از جهان با شرایط آسان در اختیار شما قرار دهد. با اجاره ماشین بدون راننده افراد خیلی آزادانه می توانند به هر کجا که دوست دارند سفر کرده و یا کارهای شخصی خود را بدون دغدغه انجام دهند.به عنوان مثال شما می توانید در سفر از خودروی مناسب با سلیقه خود استفاده کنید و بهترین انتخابی است که باعث می‌شود هزینه سفر بسیار به‌صرفه باشد.</p>
        </div>
        <img src="./carReantal/Carrental-bro.png" alt="CarPoster" className="w-full md:w-1/2" />
      </div>
      {/* <div className="lg:mb-8 mb-4 container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-3 gap-x-4">
        <Card
          className="col-span-1 h-max  bg-gray-100/50 overflow-hidden"
          shadow={false}
        >
            <img
              src="/carReantal/f5.jpg"
              alt="iphone"
              className="object-cover h-[130px] md:h-[250px] lg:h-[450px] img__poster"
            />

        </Card>
        <Card
          className="col-span-2 h-max overflow-hidden"
          shadow={false}
        >
            <img
              src="/carReantal/f7.jpg"
              alt="laptop"
              className="h-[130px] md:h-[250px] lg:h-[450px] img__poster"
            />

        </Card>
      </div>
      <div className="lg:mb-16 mb-10 container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-3 gap-x-4">
      <Card
          className="col-span-2 h-max  bg-gray-100/50 overflow-hidden"
          shadow={false}
        >
            <img
              src="/carReantal/f6.jpg"
              alt="iphone"
              className="h-[130px] md:h-[250px] lg:h-[450px] img__poster"
            />

        </Card>
        <Card
          className="col-span-1 h-max overflow-hidden"
          shadow={false}
        >
            <img
              src="/carReantal/f4.jpg"
              alt="laptop"
              className="h-[130px] md:h-[250px] lg:h-[450px] object-cover img__poster"
            />

        </Card>
      </div> */}

      <section className="grid max-h-max py-12 md:py-48 mb-20 w-full bg-cover bg-center bg-no-repeat bgImg__poster rounded-2xl">
        <div className="container mx-auto flex flex-col justify-center h-full px-8 text-center">
          <div className="my-auto text-center">
            <Typography
              variant="h2"
              color="white"
              className="lg:!text-4xl !text-xl iransans"
            >
              لذت رانندگی را با ما تجربه کنید!
            </Typography>
            <Typography
              variant="lead"
              className="mb-10 mt-4 mx-auto text-gray-400 w-full lg:max-w-3xl lg:text-lg text-md leading-6 iransans"
            >
              فقط با چند کلیک ساده خودرو خود را میهمان ما باشید. در هر کجای ایران
            </Typography>
            <Typography
              variant="lead"
              className="font-bold text-gray-400 mb-6 lg:text-lg text-md leading-6 iransans"
            >
              برای مشاهده ی خودرو های بیشتر در شهر های مختلف ایران رو دکمه زیر کلیک کنید.
            </Typography>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center max-w-md mx-auto">
              <Link to={'/carList'}>
                <Button color="red" className="w-full md:max-w-fit bg-white text-slate-900 iransans">
                  مشاهده خودرو ها
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
export default FeatureSection;