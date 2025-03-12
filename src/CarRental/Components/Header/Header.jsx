import React from 'react';
import { Button, Typography, Input } from "@material-tailwind/react";
const Header = () => {
  return (
    <header>
      <div className="absolute inset-x-0 top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>
      <div className="grid md:mt-20 py-14 lg:py-24 w-full place-items-stretch bg-center bg-contain bg-no-repeat">
        <div className="container mx-auto px-4 text-center">
          <Typography className="inline-flex text-xs  rounded-full border-dashed border-[2.5px] border-blue-gray-400 py-1 px-4 font-medium text-primary">
            با بیش از 1000 ماشین در سراسر کشور
          </Typography>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
          >
            اجاره خودرو در ایران با
            <span className="lalezar text-3xl lg:text-5xl text-blue-gray-900 mr-2 lg:mr-4">
              سوارینا
            </span>
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full !text-gray-500 lg:text-lg text-sm"
          >
            ماشینی که دوست دارید را با خیال راحت اجاره کنید.
          </Typography>
          <div className="mt-8 grid w-full  items-center justify-center mx-auto">
            <div className="mb-2 flex  flex-col gap-4 md:flex-row">
              <Input color="gray" placeholder="نام استان ..." size="lg" className='rounded-xl shadow-lg' />
              <Input type="date" color="gray" placeholder="نام استان ..." size="lg" className='rounded-xl shadow-lg' />
              <Button
                color="gray"
                className="w-full px-4 !md:w-[12rem]"
              >
                جستجوی خودرو
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


export default Header;