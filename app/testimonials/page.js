"use client";

import Main from "@/app/components/common/main";
import Card from "@/app/components/testimonials/Card";
import ArrowLeftIcon from "@/public/icons/arrowLeft.svg";
import ArrowRightIcon from "@/public/icons/arrowRight.svg";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const page = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <Image
        src={ArrowRightIcon}
        alt="ArrowIcon"
        className={`!w-10 !h-10 !-right-10 ${className}`}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <Image
        src={ArrowLeftIcon}
        alt="ArrowIcon"
        className={`!w-10 !h-10 !-left-10 ${className}`}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Main bottom>
      <div className="mt-10 lg:mt-20 h-full">
        <Slider {...settings}>
          {Array(21)
            .fill()
            .map((_el, index) => (
              <Card key={index} img={index + 1} />
            ))}
        </Slider>
      </div>
    </Main>
  );
};

export default page;
