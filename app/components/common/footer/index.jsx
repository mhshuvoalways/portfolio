const Footer = ({ bottom }) => {
  return (
    <footer
      className={`mt-20 !overflow-x-hidden ${
        bottom &&
        "container w-11/12 xl:w-8/12 mx-auto block sm:fixed bottom-0 bg-black"
      }`}
    >
      <p className="border-t py-5 border-gray-800 text-sm text-gray-400 text-center">
        © 2024 MH Shuvo. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;