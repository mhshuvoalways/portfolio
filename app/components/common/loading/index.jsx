import LoadingIcon from "@/public/icons/loading.svg";
import Image from "next/image";

const Loading = () => {
  return (
    <div>
      <div className="fixed inset-0 flex justify-center items-center z-50 text-center">
        <div>
          <Image src={LoadingIcon} alt="" />
          <p className="font-semibold text2">Please wait...</p>
        </div>
      </div>
      <p className="fixed bg-gray-800 inset-0 opacity-90" />
    </div>
  );
};

export default Loading;
