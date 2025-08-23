import Main from "@/app/components/common/main";
import Experience from "@/app/components/experience";
import { motion } from "framer-motion";

const page = () => {
  return (
    <Main bottomCondition>
      <div className="mt-10 lg:mt-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
              💼 Professional Journey
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold textGradient mb-4">
              My Experience & Growth
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From starting as a freelancer to becoming a top-rated developer, 
              here's my journey of continuous learning and achievement.
            </p>
          </motion.div>

          {/* Achievement Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center gap-8 flex-wrap mb-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold textGradient">4+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-3xl font-bold textGradient">Top Rated</div>
              <div className="text-sm text-gray-400">Fiverr Status</div>
            </div>
            <div className="w-px h-12 bg-gray-700 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-3xl font-bold textGradient">100+</div>
              <div className="text-sm text-gray-400">Orders Completed</div>
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <Experience />

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12"
        >
          <h2 className="text-3xl font-bold textGradient mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            With years of experience and a proven track record, I'm ready to help 
            you build your next successful project. Let's discuss your vision!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-secondary via-primary to-tertiary hover:from-tertiary hover:via-primary hover:to-secondary text-black font-bold py-4 px-6 rounded-xl transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden group/btn"
          >
            <a
              href="https://calendly.com/mhshuvoalways/support-for-building-website"
              target="_blank"
              className="relative z-10"
            >
              Start Your Project Today
            </a>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12" />
          </motion.button>
        </motion.div>
      </div>
    </Main>
  );
};

export default page;