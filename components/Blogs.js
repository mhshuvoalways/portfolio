import React, { useRef } from "react";
import { Fade } from "react-reveal";
import BlogCard from "./BlogCard";

const Blog = ({ posts, goTo }) => {
  const blogsRef = useRef(null);

  if (goTo === "blogs") {
    blogsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="my-container" ref={blogsRef}>
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
    </div>
  );
};

export default Blog;
