import Link from "next/link";

const Card = ({ title, icon, description, lists }) => {
  return (
    <div className="bg-gray-900 px-4 pt-4 pb-24 w-full rounded-md shadow-md relative">
      <p className="text1 text-center">{icon}</p>
      <p className="text3 tracking-wide font-normal mt-2 text-gray-200 text-center">
        {title}
      </p>
      <p className="font-normal mt-2 text-center text-gray-400">
        {description}
      </p>
      <p className="mt-6 text-gray-300 text3">What you get:</p>
      <ul className="list-disc pl-5 space-y-2 text-gray-300 mt-2 text-sm">
        {lists.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
      <div className="absolute bottom-4 flex justify-center w-full">
        <Link
          href={
            "https://calendly.com/mhshuvoalways/support-for-building-website"
          }
          target="blank"
        >
          <button className="btn">Get a Free Quote</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
