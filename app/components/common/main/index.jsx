import Footer from "@/app/components/common/footer";
import Header from "@/app/components/common/header";

const MainComponent = ({ children, bottom, bottomCondition }) => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-fixed min-h-screen"
      style={{
        backgroundImage: "url(/images/bg.svg)",
      }}
    >
      <div className="container w-11/12 xl:w-8/12 mx-auto pt-10">
        <Header />
        {children}
        <Footer bottom={bottom} bottomCondition={bottomCondition} />
      </div>
    </div>
  );
};

export default MainComponent;
