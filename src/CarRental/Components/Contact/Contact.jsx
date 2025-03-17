import React from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";

export function Contact() {
  return (
    <section className="px-8 py-8 lg:pb-24 container mx-auto lg:w-[80%] w-[90%]">
      <h3 className="titleSlider lalezar mr-3 mb-16">ارتباط با ما</h3>
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
        <img
            src="https://i.redd.it/0uermbt9q8b61.jpg"
            alt="map"
            className="block lg:hidden w-full h-full lg:max-h-[510px] rounded-lg object-contain"
          />
          <form
            action="#"
            className="flex flex-col gap-4 w-full"
          >                                                                                                                                             
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-right font-medium !text-gray-900"
                >
                  نام
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  name="first-name"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-right font-medium !text-gray-900"
                >
                  نام خانوادگی
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  name="last-name"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-right font-medium !text-gray-900"
              >
                ایمیل
              </Typography>
              <Input
                color="gray"
                size="lg"
                name="email"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-right font-medium !text-gray-900"
              >
                متن نظر
              </Typography>
              <Textarea
                rows={6}
                color="gray"
                name="message"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <Button className="w-full" color="gray">
              ارسال نظرات
            </Button>
          </form>
          <img
            src="https://i.redd.it/0uermbt9q8b61.jpg"
            alt="map"
            className=" hidden lg:block w-full h-full lg:max-h-[510px] rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;