import Main from "@/app/components/common/main";
import Card from "@/app/components/testimonials/Card";
import LinkIcon from "@/public/icons/link.svg";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <Main>
      <div className="mt-10 lg:mt-20">
        <div className="flex items-center gap-x-5">
          <p className="text-white text2 font-semibold">Fiverr</p>
          <Link href="https://www.fiverr.com/mhshuvoit" target="blank">
            <Image src={LinkIcon} alt="" className="size-5 cursor-pointer" />
          </Link>
        </div>
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 justify-items-center">
          {Array(22)
            .fill()
            .map((_el, index) => (
              <Card
                key={index}
                img={`/images/testimonials/fiverr/${index + 1}.png`}
              />
            ))}
        </div>
      </div>
      <div className="mt-10 lg:mt-20">
        <div className="flex items-center gap-x-5">
          <p className="text-white text2 font-semibold">Upwork</p>
          <Link
            href="https://www.upwork.com/freelancers/~01ac7ebbe6d926dab4"
            target="blank"
          >
            <Image src={LinkIcon} alt="" className="size-5 cursor-pointer" />
          </Link>
        </div>
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 justify-items-center">
          {Array(2)
            .fill()
            .map((_el, index) => (
              <Card
                key={index}
                img={`/images/testimonials/upwork/${index + 1}.png`}
              />
            ))}
        </div>
      </div>
      <div className="mt-10 lg:mt-20">
        <div className="flex items-center gap-x-5">
          <p className="text-white text2 font-semibold">LinkedIn</p>
          <Link
            href="https://www.linkedin.com/in/mhshuvoalways"
            target="blank"
          >
            <Image src={LinkIcon} alt="" className="size-5 cursor-pointer" />
          </Link>
        </div>
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 justify-items-center">
          {Array(3)
            .fill()
            .map((_el, index) => (
              <Card
                key={index}
                img={`/images/testimonials/linkedin/${index + 1}.png`}
              />
            ))}
        </div>
      </div>
    </Main>
  );
};

export default page;
