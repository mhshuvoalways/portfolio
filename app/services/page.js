"use client";

import Main from "@/app/components/common/main";
import { motion } from "framer-motion";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import Card from "../components/services/Card";
import FAQ from "../components/services/FAQ";

const services = [
  {
    id: 1,
    title: "Web Development",
    icon: "🖥️",
    description:
      "I design and build modern, fast, and responsive websites using powerful technologies like HTML, CSS, JavaScript, React.js, Next.js, Node.js and more.",
    features: [
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
    features: [
      "Custom-built app for better performance (no cookie-cutter templates!).",
      "Faster, smoother user experience to keep users engaged.",
      "Stronger security to protect your business and customer data.",
      "Easy updates & future growth.",
    ],
  },
  {
    id: 3,
    title: "AI Agent Development",
    icon: "🧠",
    description:
      "I build smart AI agents using tools like OpenAI to automate tasks, handle workflows, solve problems, and operate independently to support your business.",
    features: [
      "Custom-built AI agent tailored to your workflow.",
      "Automates tasks and handles complex actions on its own.",
      "Can analyze data, make decisions, and run processes.",
      "Integrates into your website or backend systems.",
      "Chat history and analytics if needed.",
      "Easy updates & future growth.",
    ],
  },
];

const faqs = [
  {
    id: 1,
    question: "How long does it take to build a website?",
    answer:
      "The timeline varies based on project complexity. A simple website typically takes 2-4 weeks, while more complex applications can take 2-3 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    id: 2,
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Yes! I offer maintenance packages to keep your website secure, updated, and running smoothly. I can discuss the best option for your needs during our consultation.",
  },
  {
    id: 3,
    question: "What technologies do you use?",
    answer:
      "I use modern, industry-standard technologies including React.js, Next.js, Node.js, TypeScript, and various other tools depending on project requirements. I always choose the best technology stack for your specific needs.",
  },
  {
    id: 4,
    question: "Do you work with clients internationally?",
    answer:
      "Absolutely! I work with clients from all over the world. We're comfortable with remote collaboration and can adjust to different time zones.",
  },
  {
    id: 5,
    question: "What's included in the free consultation?",
    answer:
      "During the free consultation, we'll discuss your project goals, requirements, timeline, and budget. We'll provide recommendations and a detailed proposal with pricing. There's no obligation to proceed.",
  },
  {
    id: 6,
    question: "How much does a project typically cost?",
    answer:
      "Pricing varies greatly depending on your specific requirements, features, and complexity. I provide custom quotes after understanding your needs. Simple websites start at a few hundred dollars, while complex applications require an investment of thousands of dollars.",
  },
];

const Page = () => {
  return (
    <Main>
      <div className="mt-10 lg:mt-20">
        <Fade>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
                Professional Services
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold textGradient mb-4">
                Custom Software Development Services
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                From web applications to mobile apps and AI-powered solutions, I
                deliver enterprise-grade software tailored to your business
                needs. Pricing is determined after consultation based on your
                specific requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center items-center gap-8 flex-wrap"
            >
              <div className="text-center">
                <div className="text-3xl font-bold textGradient">180+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="w-px h-12 bg-gray-700 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-3xl font-bold textGradient">76+</div>
                <div className="text-sm text-gray-400">Business Clients</div>
              </div>
              <div className="w-px h-12 bg-gray-700 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-3xl font-bold textGradient">5.0</div>
                <div className="text-sm text-gray-400">Client Rating</div>
              </div>
            </motion.div>
          </div>
        </Fade>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <Card
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              lists={service.features}
              index={index}
            />
          ))}
        </div>

        <FAQ faqs={faqs} />

        <Fade>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 text-center bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12"
          >
            <h2 className="text-3xl font-bold textGradient mb-4">
              Ready to Scale Your Business?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join 76+ businesses that have transformed their operations with
              our professional software development services. Schedule a
              consultation to discuss your project and get a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://calendly.com/mhshuvoalways/support-for-building-website"
                target="_blank"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-secondary via-primary to-tertiary hover:from-tertiary hover:via-primary hover:to-secondary text-black font-bold py-4 px-6 rounded-xl transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden group/btn"
                >
                  <span className="relative z-10">
                    Schedule Free Consultation
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-primary/50 hover:bg-primary/10 text-primary font-bold py-4 px-6 rounded-xl transition-all duration-300"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </Fade>
      </div>
    </Main>
  );
};

export default Page;
