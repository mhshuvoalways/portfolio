"use client";

import Main from "@/app/components/common/main";
import Card from "@/app/components/testimonials/Card";
import LinkIcon from "@/public/icons/link.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const reviewSections = [
  {
    platform: "Fiverr",
    icon: "🟢",
    url: "https://www.fiverr.com/mhshuvoit",
    count: 22,
    rating: "5.0",
    description: "Top-rated freelancer with exceptional client satisfaction",
  },
  {
    platform: "Upwork",
    icon: "🔵",
    url: "https://www.upwork.com/freelancers/~01ac7ebbe6d926dab4",
    count: 2,
    rating: "5.0",
    description: "Perfect rating with professional service delivery",
  },
  {
    platform: "LinkedIn",
    icon: "💼",
    url: "https://www.linkedin.com/in/mhshuvoalways",
    count: 3,
    rating: "5.0",
    description: "Professional recommendations from industry peers",
  },
];

const stats = [
  { number: "27", label: "Total Reviews", icon: "⭐" },
  { number: "5.0", label: "Average Rating", icon: "🏆" },
  { number: "100%", label: "Satisfaction Rate", icon: "✅" },
  { number: "3", label: "Platforms", icon: "🌐" },
];

const Page = () => {
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
                ⭐ Client Reviews
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold textGradient mb-4">
                Some of the Best Reviews
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Real feedback from satisfied clients across multiple platforms.
                See why businesses trust us with their most important projects.
              </p>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-3xl lg:text-4xl font-bold textGradient mb-2">
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

        {/* Reviews Sections */}
        <div className="space-y-16">
          {reviewSections.map((section, sectionIndex) => (
            <motion.div
              key={section.platform}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: sectionIndex * 0.2 }}
              className="max-w-7xl mx-auto"
            >
              {/* Platform Header */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 mb-8">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center border border-primary/30">
                      <span className="text-3xl">{section.icon}</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {section.platform}
                      </h2>
                      <p className="text-gray-400 mb-3">
                        {section.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span className="text-gray-300">
                            {section.count} Reviews
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-secondary rounded-full"></span>
                          <span className="text-gray-300">
                            {section.rating}⭐ Rating
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link href={section.url} target="_blank">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-3 bg-gradient-to-r from-secondary via-primary to-tertiary hover:from-tertiary hover:via-primary hover:to-secondary text-black font-bold py-3 px-6 rounded-xl transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden group/btn"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <Image src={LinkIcon} alt="" className="size-4" />
                        Visit Profile
                      </span>
                      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                    </motion.button>
                  </Link>
                </div>
              </div>

              {/* Reviews Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
                {Array(section.count)
                  .fill()
                  .map((_el, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: sectionIndex * 0.3 + index * 0.1,
                      }}
                    >
                      <Card
                        img={`/images/testimonials/${section.platform.toLowerCase()}/${
                          index + 1
                        }.png`}
                      />
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <Fade>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 text-center bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12 max-w-4xl mx-auto"
          >
            <div className="text-4xl mb-4">🚀</div>
            <h2 className="text-3xl font-bold textGradient mb-4">
              Ready to Join Our Happy Clients?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              {`Experience the same level of quality and professionalism that earned us
              these amazing reviews. We&apos;ll start your success story today!`}
            </p>
            <Link
              href="https://calendly.com/mhshuvoalways/support-for-building-website"
              target="_blank"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-secondary via-primary to-tertiary hover:from-tertiary hover:via-primary hover:to-secondary text-black font-bold py-4 px-6 rounded-xl transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden group/btn"
              >
                <span className="relative z-10">Start Your Project Today</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              </motion.button>
            </Link>
          </motion.div>
        </Fade>
      </div>
    </Main>
  );
};

export default Page;
