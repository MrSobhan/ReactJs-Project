import React from "react";
import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";

export function FeatureSection() {
  return (
    <section className="py-10">
      <div className="container py-14 mx-auto mb-10 text-center lg:my-2 text-slate-900 md:flex items-center justify-between">
        <div>
          <h3 className="lalezar text-3xl text-right">اجاره خودرو بدون راننده</h3>
          <p className="text-right mt-4 leading-7 max-w-[400px]">سوییچ رنت این امکان را فراهم نموده است تا خدمات کرایه ماشین بدون راننده را چه در ایران و چه در هر نقطه دیگر از جهان با شرایط آسان در اختیار شما قرار دهد. با اجاره ماشین بدون راننده افراد خیلی آزادانه می توانند به هر کجا که دوست دارند سفر کرده و یا کارهای شخصی خود را بدون دغدغه انجام دهند.به عنوان مثال شما می توانید در سفر از خودروی مناسب با سلیقه خود استفاده کنید و بهترین انتخابی است که باعث می‌شود هزینه سفر بسیار به‌صرفه باشد.</p>
        </div>
        <img src="https://sweechrent.com/wp-content/uploads/2024/09/bedone-driver.webp" alt="CarPoster" />
      </div>
      <div className="lg:mb-8 mb-4 container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-3 gap-x-4">
        <Card
          className="col-span-1 h-max  bg-gray-100/50 overflow-hidden"
          shadow={false}
        >
            <img
              src="/carReantal/f5.jpg"
              alt="iphone"
              className="object-cover h-[130px] md:h-[250px] lg:h-[450px]"
            />

        </Card>
        <Card
          className="col-span-2 h-max overflow-hidden"
          shadow={false}
        >
            <img
              src="/carReantal/f7.jpg"
              alt="laptop"
              className="h-[130px] md:h-[250px] lg:h-[450px]"
            />

        </Card>
      </div>
      <div className="lg:mb-8 mb-4 container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-3 gap-x-4">
      <Card
          className="col-span-2 h-max  bg-gray-100/50 overflow-hidden"
          shadow={false}
        >
            <img
              src="/carReantal/f6.jpg"
              alt="iphone"
              className="h-[130px] md:h-[250px] lg:h-[450px]"
            />

        </Card>
        <Card
          className="col-span-1 h-max overflow-hidden"
          shadow={false}
        >
            <img
              src="/carReantal/f4.jpg"
              alt="laptop"
              className="h-[130px] md:h-[250px] lg:h-[450px] object-cover"
            />

        </Card>
      </div>
    </section>
  );
}
export default FeatureSection;