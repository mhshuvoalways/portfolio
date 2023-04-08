import { Element } from "react-scroll";
import { Fade } from "react-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from "./BlogCard";

const Blog = ({ posts }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
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
    <Element className="my-container" name="blogs">
      <p className="section-title">Blogs</p>
      <Fade left>
        <Slider {...settings}>
          {[...posts].reverse().map((post) => {
            return (
              <BlogCard
                key={post._id}
                id={post._id}
                image={post.image.url}
                createdAt={post.createdAt}
                title={post.title}
              />
            );
          })}
        </Slider>
      </Fade>
    </Element>
  );
};

export default Blog;
