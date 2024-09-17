import Main from "@/app/components/common/main";
import Experience from "@/app/components/experience";

const page = () => {
  return (
    <Main bottomCondition>
      <div className="mt-10 lg:mt-20">
        <Experience />
      </div>
    </Main>
  );
};

export default page;
