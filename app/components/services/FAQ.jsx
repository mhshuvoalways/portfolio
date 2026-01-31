import { motion } from "framer-motion";
import { useState } from "react";

const FAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-20">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            Questions & Answers
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold textGradient mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Got questions? Here are answers to the most common questions about
            my services.
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-800/30 transition-colors duration-300"
            >
              <span className="font-semibold text-white pr-8">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0"
              >
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.div>
            </button>

            <motion.div
              initial={false}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-5 text-gray-300 leading-relaxed">
                {faq.answer}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
