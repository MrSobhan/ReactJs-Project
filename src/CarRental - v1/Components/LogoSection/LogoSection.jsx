import { Button, Card, CardBody, Typography } from "@material-tailwind/react";

export function LogoSection() {
  return (
    <section className="container w-full lg:w-[80%] mx-auto py-20">
        <p
          className="titleSlider lalezar mb-20 mr-9 lg:mr-0"
        >
          همکاری با بیش از 50 برند معتبر
        </p>
      <div className="place-content-center grid">
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-6">
            <Card shadow={false} className="bg-[#FAFAFA] px-10">
              <CardBody>
                <img
                  src="https://logos-download.com/wp-content/uploads/2016/02/Toyota_Europe_Logo_2020.png"
                  alt="Toyota"
                  className="w-40"
                />
              </CardBody>
            </Card>
            <Card shadow={false} className="bg-[#FAFAFA] px-10">
              <CardBody>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Renault_2021.svg/1557px-Renault_2021.svg.png"
                  alt="BMW"
                  className="w-40"
                />
              </CardBody>
            </Card>
          </div>
          <Card shadow={false} className="bg-[#FAFAFA] lg:px-10 justify-center max-w-[18rem] lg:max-w-lg">
            <CardBody className="text-center">
              <img
                src="./carReantal/CarRental-cuate.svg"
                alt="Allianz"
                className="w-56 mx-auto"
              />
            </CardBody>
          </Card>
          <div className="flex flex-col items-center justify-center gap-6">
            <Card shadow={false} className="bg-[#FAFAFA] px-10">
              <CardBody>
                <img
                  src="https://demo.cgkok.com/2023/1/img/volkswagen-logo-1.png"
                  alt="Booking.com"
                  className="w-40"
                />
              </CardBody>
            </Card>
            <Card shadow={false} className="bg-[#FAFAFA] px-10">
              <CardBody>
                <img
                  src="https://parspng.com/wp-content/uploads/2022/06/Benzpng.parspng.com-3.png"
                  alt="Hertz"
                  className="w-40"
                />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoSection;