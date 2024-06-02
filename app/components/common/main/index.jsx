import Footer from "@/app/components/common/footer";
import Header from "@/app/components/common/header";

const MainComponent = ({ children, bottom }) => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-fixed h-screen"
      style={{
        backgroundImage: "url(/images/bg.svg)",
      }}
    >
      <div className="container w-11/12 xl:w-8/12 mx-auto pt-10 min-h-screen">
        <Header />
        <div className=""> {children}</div>

        <Footer bottom={bottom} />
      </div>
    </div>
  );
};

export default MainComponent;
