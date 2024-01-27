import { Resend } from "resend";
import Image from "next/image";
import { useState } from "react";
import { Element } from "react-scroll";
import { Fade } from "react-reveal";
import { motion } from "framer-motion";
import Tostify from "./Tostify";
import Email from "../public/icons/email.svg";
import Home from "../public/icons/home.svg";
import Phone from "../public/icons/phone.svg";
import Loading from "./Loading";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState("");

  const resend = new Resend(process.env.RESEND_KEY);

  const onChangeHandler = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setLoading("loading");

    const messageHtml = `
    <div>
        <h3>Name: ${contact.name}</h3>
        <p>Email: ${contact.email}</p>
        <p>Message: ${contact.message}</p>
    </div>`;
    resend.emails
      .send({
        from: "MH Shuvo <noreply@mhshuvoalways.xyz>",
        to: contact.email,
        subject: `${contact.name} will contact you soon`,
        html: messageHtml,
      })
      .then(() => {
        setLoading("success");
        setContact({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log(err);
        setLoading("fail");
      });
  };

  return (
    <Element className="my-container" name="contact">
      <p className="section-title">Contact Me</p>
      <Fade bottom>
        <div className="flex flex-wrap justify-around gap-10 font-semibold text-center">
          <div className="space-y-5">
            <div className="border-secondary border-2 p-4 rounded-full w-16 h-16 mx-auto">
              <Image src={Email} alt="" />
            </div>
            <p className="text3 tracking-widest">EMAIL</p>
            <p>mhshuvoalways@gmail.com</p>
          </div>
          <div className="space-y-5">
            <div className="border-secondary border-2 p-4 rounded-full w-16 h-16 mx-auto">
              <Image src={Phone} alt="" />
            </div>
            <p className="text3 tracking-widest">Phone</p>
            <p>+8801712892969</p>
          </div>
          <div className="space-y-5">
            <div className="border-secondary border-2 p-4 rounded-full w-16 h-16 mx-auto">
              <Image src={Home} alt="" />
            </div>
            <p className="text3 tracking-widest">Home</p>
            <p>Kushtia, Bangladesh</p>
          </div>
        </div>
      </Fade>
      <Fade top>
        <div className="mt-20">
          <p className="font-semibold text-center">
            Have You Something to Say ?
          </p>
          <p className="tracking-wider mt-2 text-center">
            Feel free to message me
          </p>
          <form
            onSubmit={onSubmitHandler}
            className="mt-10 space-y-5 w-full sm:w-6/12 mx-auto"
          >
            <div>
              <input
                type="text"
                className="px-5 py-2 rounded-md bg-gray-700 focus:ring outline-none w-full"
                placeholder="Enter Your Full Name"
                name="name"
                onChange={onChangeHandler}
                value={contact.name}
                required
              />
            </div>
            <div>
              <input
                type="email"
                className="px-5 py-2 rounded-md bg-gray-700 focus:ring outline-none w-full"
                placeholder="Enter Your Valid Email"
                name="email"
                onChange={onChangeHandler}
                value={contact.email}
                required
              />
            </div>
            <div>
              <textarea
                className="px-5 py-2 h-32 rounded-md bg-gray-700 focus:ring outline-none w-full"
                placeholder="Enter Your Message"
                name="message"
                onChange={onChangeHandler}
                value={contact.message}
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="border-secondary px-5 border-2 py-1 cursor-pointer w-full sm:w-32 rounded-full hover:bg-secondary"
            >
              Submit
            </motion.button>
          </form>
        </div>
      </Fade>
      {loading === "loading" && <Loading />}
      {(loading === "success" || loading === "fail") && (
        <Tostify loading={loading} />
      )}
    </Element>
  );
};

export default Contact;
