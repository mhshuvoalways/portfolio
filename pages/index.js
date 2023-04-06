import axios from "axios";
import Header from "@/components/Header";
import ScrollSign from "@/components/ScrollSign";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";

const Index = ({ posts }) => {
  return (
    <div>
      <Header />
      <ScrollSign />
      <Intro />
      <About />
      <Skills />
      <Projects />
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
