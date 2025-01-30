const Footer = ({ bottom, bottomCondition }) => {
  return (
    <footer
      className={`mt-20 ${
        bottom && "container w-11/12 xl:w-8/12 mx-auto fixed bottom-0 bg-black z-10"
      } ${
        bottomCondition &&
        "container w-11/12 xl:w-8/12 mx-auto block sm:fixed bottom-0 bg-black z-auto sm:z-10"
      }`}
    >
      <p className="border-t py-5 border-gray-800 text-sm text-gray-400 text-center">
        © 2025 MH Shuvo. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
