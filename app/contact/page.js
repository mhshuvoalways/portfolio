"use client";

import Loading from "@/app/components/common/loading";
import Main from "@/app/components/common/main";
import Tostify from "@/app/components/common/tostify";
import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const contactMethods = [
  {
    icon: "📧",
    title: "Email",
    description: "Send me a direct message",
    value: "contact@mhshuvo.com",
    link: "mailto:contact@mhshuvo.com",
  },
  {
    icon: "💼",
    title: "LinkedIn",
    description: "Connect professionally",
    value: "mhshuvoalways",
    link: "https://www.linkedin.com/in/mhshuvoalways",
  },
  {
    icon: "📅",
    title: "Schedule Call",
    description: "Book a free consultation",
    value: "Calendly",
    link: "https://calendly.com/mhshuvoalways/support-for-building-website",
  },
];

const stats = [
  { number: "< 24h", label: "Response Time", icon: "⚡" },
  { number: "100%", label: "Reply Rate", icon: "✅" },
  { number: "Free  />", label: "Consultation", icon: "💰" },
];

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
      .post(`/api/send-mail`, contact)
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

  return (
    <Main>
      <div className="mt-10 lg:mt-20">
        {/* Header Section */}
        <Fade>
          <div className="text-center mb-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
                💬 Get In Touch
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold textGradient mb-4">
                {`Let's Build Something Amazing`}
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                {`Have a project in mind? We&apos;d love to hear about it.
                Send us a message and we&apos;ll discuss how we can bring your vision to life.`}
              </p>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center items-center gap-8 flex-wrap mb-12"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold textGradient mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </Fade>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Fade direction="left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 relative overflow-hidden"
            >
              {/* Background decorative elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
              </div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="text-4xl mb-4">📝</div>
                  <h2 className="text-2xl font-bold textGradient mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-400">
                    {`Fill out the form below and we&apos;ll get back to you soon`}
                  </p>
                </div>

                <form onSubmit={onSubmitHandler} className="space-y-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-gray-200 placeholder-gray-500"
                      placeholder="Enter your full name"
                      name="name"
                      onChange={onChangeHandler}
                      value={contact.name}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-gray-200 placeholder-gray-500"
                      placeholder="Enter your email address"
                      name="email"
                      onChange={onChangeHandler}
                      value={contact.email}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Project Details *
                    </label>
                    <textarea
                      className="w-full px-4 py-3 h-32 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-gray-200 placeholder-gray-500 resize-none"
                      placeholder="Tell me about your project, timeline, and requirements..."
                      name="message"
                      onChange={onChangeHandler}
                      value={contact.message}
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-secondary via-primary to-tertiary hover:from-tertiary hover:via-primary hover:to-secondary text-black font-bold py-4 px-6 rounded-xl transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span>Send Message</span>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </Fade>

          {/* Contact Methods */}
          <Fade direction="right">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="text-center lg:text-left">
                <div className="text-4xl mb-4">🚀</div>
                <h2 className="text-2xl font-bold textGradient mb-4">
                  Other Ways to Connect
                </h2>
                <p className="text-gray-400 mb-8">
                  Choose the method that works best for you
                </p>
              </div>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.link}
                    target="_blank"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="block p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 rounded-2xl transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* Background gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center border border-primary/30 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">{method.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-200 group-hover:text-primary transition-colors duration-300">
                          {method.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-1 group-hover:text-gray-300 transition-colors duration-300">
                          {method.description}
                        </p>
                        <p className="text-primary font-medium text-sm">
                          {method.value}
                        </p>
                      </div>
                      <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold textGradient mb-4">
                  💡 Quick Questions?
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="text-gray-300 font-medium">
                        Response Time:{" "}
                      </span>
                      <span className="text-gray-400">
                        Usually within 24 hours
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="text-gray-300 font-medium">
                        Free Consultation:{" "}
                      </span>
                      <span className="text-gray-400">
                        30-minute discovery call
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-tertiary rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="text-gray-300 font-medium">
                        Project Timeline:{" "}
                      </span>
                      <span className="text-gray-400">
                        Depends on scope and complexity
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </Fade>
        </div>
      </div>

      {loading === "loading" && <Loading />}
      {(loading === "success" || loading === "fail") && (
        <Tostify loading={loading} />
      )}
    </Main>
  );
};

export default Contact;
