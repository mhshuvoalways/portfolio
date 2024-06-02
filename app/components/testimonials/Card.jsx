import Image from "next/image";

const Card = ({ img }) => {
  return (
    <div className="bg-gray-900 p-4 w-full md:w-[95%] mx-auto rounded-md shadow-md relative">
      <Image
        src={`/images/testimonials/${img}.png`}
        alt={img}
        className="h-auto sm:h-48 rounded-md"
        width={500}
        height={300}
      />
    </div>
  );
};

export default Card;
