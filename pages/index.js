import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import ScrollSign from "@/components/ScrollSign";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import Testimonials from "@/components/Testimonials";
import axios from "axios";

const Index = ({ posts }) => {
  return (
    <div>
      <ScrollSign />
      <Header />
      <Intro />
      <Skills />
      <Projects />
      <Testimonials />
      <Experience />
      <Blogs posts={posts} />
      <Contact />
      <Footer />
      <Socials />
    </div>
  );
};

export async function getStaticProps() {
  let posts;
  await axios
    .get("https://daringpage.vercel.app/api/posts")
    .then((res) => {
      posts = res.data;
    })
    .catch(() => console.log("Server error"));

  return {
    props: {
      posts: posts || [],
    },
  };
}

export default Index;
