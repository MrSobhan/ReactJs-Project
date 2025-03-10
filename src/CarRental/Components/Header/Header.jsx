import React from 'react';
import { Button, Typography, Input } from "@material-tailwind/react";
const Header = () => {
  return (
    <header>
      <div className="grid mt-6 py-14 w-full place-items-stretch bg-center bg-contain bg-no-repeat">
        <div className="container mx-auto px-4 text-center">
          <Typography className="inline-flex text-xs  rounded-full border-dashed border-[2.5px] border-slate-300 py-1 px-4 font-medium text-primary">
            با بیش از 1000 ماشین در سراسر کشور
          </Typography>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
          >
            اجاره خودرو در ایران با
            <span className="lalezar text-3xl lg:text-5xl text-slate-900 mr-2 lg:mr-4">
            سوارینا
            </span>
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full !text-gray-500 lg:text-lg text-sm"
          >
            ماشینی که دوست دارید را با خیال راحت اجاره کنید.
          </Typography>
          <div className="mt-8 grid w-full place-items-start md:justify-center">
            <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
              <Input color="gray" placeholder="نام استان ..." size="lg" className='rounded-xl' />
              <Button
                color="gray"
                className="w-full px-4 md:w-[12rem]"
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