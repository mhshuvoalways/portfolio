const SectionTitle = ({ title }) => {
  return (
    <div className="text-xl sm:text-3xl text-center mt-32 flex justify-center items-center mb-20">
      <div>
        <p>{title}</p>
        <p className="border-b-4 border-secondary mt-5 rounded-full"></p>
      </div>
    </div>
  );
};

export default SectionTitle;
