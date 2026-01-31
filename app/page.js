"use client";

import Main from "@/app/components/common/main";
import { roundedYears } from "@/app/utils/dynamicExperienceCount";
import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { number: "180+", label: "Projects Delivered" },
  { number: "76+", label: "Business Clients" },
  { number: "100%", label: "Success Rate" },
  { number: roundedYears, label: "Years in Business" },
];

const benefits = [
  {
    icon: "⚡",
    title: "Fast Delivery",
    description:
      "Get your project delivered on time without compromising quality",
  },
  {
    icon: "🎯",
    title: "Results-Driven",
    description: "I focus on solutions that drive real business growth and ROI",
  },
  {
    icon: "🛡️",
    title: "Quality Guaranteed",
    description: "Rigorous testing and support to ensure your success",
  },
  {
    icon: "💼",
    title: "Business-First",
    description: "I understand your business needs and build accordingly",
  },
];

const Page = () => {
  return (
    <Main>
      <div className="mt-10 lg:mt-20">
        <div className="w-full text-center relative">
          <div className="absolute -top-20 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 right-1/4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
              Professional Software Development
            </span>

            <h1 className="text-4xl lg:text-6xl font-bold textGradient mb-6 leading-tight max-w-4xl mx-auto">
              Scale Your Business with Custom Software Solutions
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              I help businesses grow by building web apps and AI automation
              tools that boost sales, productivity, and success in the digital
              world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-secondary via-primary to-tertiary hover:from-tertiary hover:via-primary hover:to-secondary text-black font-bold py-4 px-8 rounded-xl transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden group/btn"
                >
                  <span className="relative z-10">View Our Services</span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                </motion.button>
              </Link>
              <Link
                href="https://calendly.com/mhshuvoalways/support-for-building-website"
                target="_blank"
              >
                <button className="px-8 py-4 bg-transparent border-2 border-primary/50 text-primary rounded-xl hover:bg-primary/10 hover:border-primary transition-all duration-300 font-bold">
                  Schedule Consultation
                </button>
              </Link>
            </div>

            <p className="text-gray-500 text-sm">
              Trusted by 76+ businesses worldwide
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mt-16 lg:mt-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl lg:text-4xl font-bold textGradient mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 lg:mt-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold textGradient mb-4">
              Built for Your Success
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              I combine technical excellence with business understanding
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 lg:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12 lg:p-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-50"></div>

          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold textGradient mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Schedule a free consultation to discuss how our custom software
              solutions can help you achieve your business goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://calendly.com/mhshuvoalways/support-for-building-website"
                target="_blank"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-secondary via-primary to-tertiary hover:from-tertiary hover:via-primary hover:to-secondary text-black font-bold py-4 px-8 rounded-xl transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden group/btn"
                >
                  <span className="relative z-10">Book Free Consultation</span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 bg-transparent border-2 border-primary/50 hover:bg-primary/10 text-primary font-bold rounded-xl transition-all duration-300">
                  Contact Us
                </button>
              </Link>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              No commitment required • Free consultation • Response within 24
              hours
            </p>
          </div>
        </motion.div>
      </div>
    </Main>
  );
};

export default Page;
