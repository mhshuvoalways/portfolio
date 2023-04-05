import Image from "next/image";
import moment from "moment";

const BlogCard = ({ id, image, createdAt, title }) => {
  return (
    <div className="bg-gray-900 p-4 w-full md:w-80 rounded-md shadow-md">
      <Image
        unoptimized
        width={600}
        height={600}
        src={image}
        alt={image}
        className="h-auto md:h-48"
      />
      <p className="text-gray-400 text-sm uppercase mt-2">
        {moment(createdAt).format("LL")}
      </p>
      <p className="text3 tracking-wide font-normal mt-3 mb-5">
        {title.length > 45 ? title.slice(0, 45) + "..." : title}
      </p>
      <a
        href={`https://daringpage.vercel.app/post/${id}`}
        target="_blank"
        className="border-secondary border rounded-full px-5 w-48 text-center py-1 cursor-pointer"
      >
        Read at My Blog
      </a>
    </div>
  );
};

export default BlogCard;
