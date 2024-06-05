import Main from "@/app/components/common/main";
import MyImage from "@/public/images/mhshuvo.png";
import Image from "next/image";
import Link from "next/link";

const social = [
  {
    icon: "fa-brands fa-linkedin",
    url: "https://www.linkedin.com/in/mhshuvoalways",
  },
  {
    icon: "fa-brands fa-github",
    url: "https://www.github.com/mhshuvoalways",
  },
  {
    icon: "fa-brands fa-facebook",
    url: "https://www.linkedin.com/in/mhshuvoalways",
  },
  {
    icon: "fa-solid fa-envelope",
    url: "https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=mhshuvoalways@gmail.com",
  },
  {
    icon: "fa-brands fa-whatsapp",
    url: "https://wa.me/+8801712892969",
  },
];

const page = () => {
  return (
    <Main>
      <div className="mt-10 lg:mt-20 flex items-center justify-between gap-10 flex-col-reverse lg:flex-row">
        <div className="space-y-8 w-11/12 lg:w-7/12">
          <div className="flex items-center gap-2">
            <p className="textGradient font-semibold">Hey folks</p>
            <p className="animate-wave">👋</p>
          </div>
          <p className="textGradient text1 font-bold">{`I'm MH Shuvo`}</p>
          <p className="text-white text2 font-semibold">
            Software Developer | Web & Mobile Application Developer
          </p>
          <div className="flex items-center gap-5 text-gray-400 text2">
            {social.map((el) => (
              <Link href={el.url} target="blank" key={el.icon}>
                <i className={el.icon}></i>
              </Link>
            ))}
          </div>
          <p className="text-gray-400 text3 font-medium tracking-wide">
            🚀As an expert in JavaScript, Reactjs, React Native, Nextjs, and
            Nodejs, I specialize in building Web & Mobile Applications that not
            only look great but also deliver exceptional scalability,
            availability, usability, maintainability, reliability, and security.
            <br />
            <br />
            {`🎯Let's work together to elevate your applications to new heights. Reach out to me via DM, and let's discuss how we can collaborate to achieve your goals. Your application transformation is just one click away!`}
            <br />
            <br />
            {`Send your email here to get quick reply👇`}
          </p>
          <button>
            <Link className="btn" href={"/contact"}>
              Contact
            </Link>
          </button>
        </div>
        <Image
          src={MyImage}
          alt="Image"
          className="rounded-full w-5/12 lg:w-80 border-4 border-primary animate-mypicture"
        />
      </div>
    </Main>
  );
};

export default page;
