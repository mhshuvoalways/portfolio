"use client";

import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tostify = ({ loading }) => {
  useEffect(() => {
    loading === "success"
      ? toast.success(
          "Thank you so much for reaching out to me. I will get back to you soon!",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        )
      : toast.error("Server error occurred. Please try again!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
  }, [loading]);

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default Tostify;
