"use client";

import Loading from "@/app/components/common/loading";
import Main from "@/app/components/common/main";
import Tostify from "@/app/components/common/tostify";
import axios from "axios";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState("");

  const onChangeHandler = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setLoading("loading");
    axios
      .post(`${process.env.BACKEND_URL}/api`, contact)
      .then(() => {
        setLoading("success");
        setContact({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        setLoading("fail");
      });
  };

  useEffect(() => {
    axios
      .get(process.env.BACKEND_URL)
      .then(() => {})
      .catch(() => {});
  }, []);

  return (
    <Main bottom={true}>
      <Fade>
        <div className="mt-10 lg:mt-20 text-gray-200">
          <p className="font-semibold text-center text2">
            Have You Something to Say ?
          </p>
          <p className="tracking-wider mt-2 text-center">
            Feel free to message me
          </p>
          <form
            onSubmit={onSubmitHandler}
            className="mt-10 space-y-5 w-full sm:w-6/12 mx-auto"
          >
            <input
              type="text"
              className="px-5 py-3 rounded-md bg-gray-900 focus:ring outline-none w-full"
              placeholder="Enter Your Full Name"
              name="name"
              onChange={onChangeHandler}
              value={contact.name}
              required
            />
            <input
              type="email"
              className="px-5 py-3 rounded-md bg-gray-900 focus:ring outline-none w-full"
              placeholder="Enter Your Valid Email"
              name="email"
              onChange={onChangeHandler}
              value={contact.email}
              required
            />
            <textarea
              className="px-5 py-3 h-32 rounded-md bg-gray-900 focus:ring outline-none w-full"
              placeholder="Enter Your Message"
              name="message"
              onChange={onChangeHandler}
              value={contact.message}
              required
            />
            <button className="btn">Submit</button>
          </form>
        </div>
      </Fade>
      {loading === "loading" && <Loading />}
      {(loading === "success" || loading === "fail") && (
        <Tostify loading={loading} />
      )}
    </Main>
  );
};

export default Contact;
