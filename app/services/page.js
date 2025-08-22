"use client";

import Main from "@/app/components/common/main";
import Card from "../components/services/Card";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const items = [
  {
    id: 1,
    title: "Web Development",
    icon: "🖥️",
    description:
      "I design and build modern, fast, and responsive websites using powerful technologies like HTML, CSS, JavaScript, React.js, Next.js, Node.js and more.",
    lists: [
      "Custom-built websites for better performance (no cookie-cutter templates!).",
      "Faster, smoother user experience to keep visitors engaged.",
      "Modern and mobile-friendly design that looks great on any screen.",
      "Stronger security to protect your business and customer data.",
      "SEO-friendly structure to help your website rank higher on Google.",
      "Easy updates & future growth without technical headaches.",
    ],
  },
  {
    id: 2,
    title: "Mobile App Development",
    icon: "📱",
    description:
      "I design and build modern mobile apps that work smoothly on both iOS and Android using React Native and other modern tools.",
    lists: [
      "Custom-built app for better performance (no cookie-cutter templates!).",
      "Faster, smoother user experience to keep visitors engaged.",
      "Stronger security to protect your business and customer data.",
      "Easy updates & future growth.",
    ],
  },
  {
    id: 3,
    title: "AI Chatbot Development & Integration",
    icon: "🤖",
    description:
      "I build custom AI chatbots using tools like OpenAI (ChatGPT) and integrate them into your website or app for smart, real-time user interaction.",
    lists: [
      "Custom-built chatbot tailored to your business.",
      "Integration with your website.",
      "AI chatbot to answer questions.",
      "Lead generation and support.",
      "Multilingual support.",
      "Chat history and analytics (if needed).",
      "Easy updates & future growth.",
    ],
  },
  {
    id: 4,
    title: "Browser Extension Development",
    icon: "🧩",
    description:
      "I design and build custom Browser extensions to automate tasks, improve productivity, or connect with web apps and AI tools.",
    lists: [
      "Custom-built extension for better performance.",
      "Faster, smoother user experience to keep visitors engaged.",
      "Background script & content script setup.",
      "AI integration (ChatGPT)",
      "Easy updates & future growth.",
    ],
  },
];

const page = () => {
  return (
    <Main>
      <div className="mt-10 lg:mt-20">
        {/* Header Section */}
        <Fade>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
                ✨ Premium Services
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold textGradient mb-4">
                Transform Your Ideas Into Reality
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                From concept to deployment, I deliver cutting-edge solutions that drive results. 
                Let's build something extraordinary together.
              </p>
            </motion.div>
            
            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center items-center gap-8 flex-wrap mb-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold textGradient">100+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="w-px h-12 bg-gray-700 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-3xl font-bold textGradient">30+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-gray-700 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-3xl font-bold textGradient">5⭐</div>
                <div className="text-sm text-gray-400">Average Rating</div>
              </div>
            </motion.div>
          </div>
        </Fade>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {items.map((item, index) => (
            <Card
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              lists={item.lists}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <Fade>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 text-center bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12"
          >
            <h2 className="text-3xl font-bold textGradient mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and turn it into a powerful digital solution. 
              Book a free consultation call and let's get started!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://calendly.com/mhshuvoalways/support-for-building-website"
                target="_blank"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-secondary via-primary to-tertiary hover:from-tertiary hover:via-primary hover:to-secondary text-black font-bold py-4 px-8 rounded-xl transition-all duration-500 shadow-lg hover:shadow-xl"
              >
                <span>Schedule Free Consultation</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </Fade>
      </div>
    </Main>
  );
};

export default page;