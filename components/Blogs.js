import { Element } from "react-scroll";
import { Fade } from "react-reveal";
import BlogCard from "./BlogCard";

const Blog = ({ posts }) => {
  return (
    <Element className="my-container" name="blogs">
      <p className="section-title">Blogs</p>
      <Fade left>
        <div className="mt-20 flex justify-center gap-5 flex-wrap">
          {[...posts]
            .reverse()
            .slice(0, 3)
            .map((post) => {
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
        </div>
      </Fade>
    </Element>
  );
};

export default Blog;
