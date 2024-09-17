import Image from "next/image";

const Card = ({ img }) => {
  return (
    <div className="bg-gray-900 p-4 rounded-md shadow-md border border-primary">
      <Image
        src={img}
        alt={"Photo"}
        className="w-full h-full rounded-md"
        width={700}
        height={700}
      />
    </div>
  );
};

export default Card;
