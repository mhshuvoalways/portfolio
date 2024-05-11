import ArrowLeftIcon from "@/public/icons/arrowLeft.svg";
import ArrowRightIcon from "@/public/icons/arrowRight.svg";
import Image from "next/image";
import { Fade } from "react-reveal";
import { Element } from "react-scroll";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import TestimonialCard from ".//TestimonialCard";
import SectionTitle from "./SectionTitle";

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

const Blog = () => {
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
        },
      },
    ],
  };

  return (
    <Element className="my-container" name="testimonials">
      <SectionTitle title={"Testimonials"} />
      <Fade left>
        <Slider {...settings}>
          {Array(21)
            .fill()
            .map((_el, index) => (
              <TestimonialCard key={index.id} img={index + 1} />
            ))}
        </Slider>
      </Fade>
    </Element>
  );
};

export default Blog;
