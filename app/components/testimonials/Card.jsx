import Image from "next/image";

const Card = ({ img }) => {
  return (
    <div className="bg-gray-900 p-2 rounded-md shadow-md border border-primary">
      <Image
        src={img}
        alt={"Photo"}
        className="w-full h-full min-w-72 rounded-md"
        width={1000}
        height={1000}
        loading="lazy"
      />
    </div>
  );
};

export default Card;
