const tabs = ["all", "frontend", "extention", "contribute"];

const Tab = ({ current, currentHandler, projectDB }) => {
  return (
    <div className="flex items-center justify-center gap-5 flex-wrap">
      {tabs.map((el) =>
        el === "all" ? (
          <div
            key={el}
            className={
              current === el
                ? "border-b-4 px-5 py-1 border-primary cursor-pointer flex items-center gap-2 rounded-full"
                : "px-5 py-1 cursor-pointer flex items-center gap-2 hover:font-bold"
            }
            onClick={() => currentHandler(el)}
          >
            <p className="text-primary text3 capitalize">{el}</p>
            <small className="bg-primary text-white rounded-md text-xs h-5 w-5 flex justify-center items-center">
              {projectDB.length}
            </small>
          </div>
        ) : (
          <p
            key={el}
            className={`text-primary text3 px-5 py-1 cursor-pointer capitalize ${
              current === el && "border-b-4 border-primary rounded-full"
            }`}
            onClick={() => currentHandler(el)}
          >
            {el}
          </p>
        )
      )}
    </div>
  );
};

export default Tab;