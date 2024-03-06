import "./Text.css";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
      duration: 1.5,
    },
  },
};
const StaggeredText = () => {
  return (
    <>
      <div>
        <div className="w-full h-[calc(100vh-2rem)] rounded-2xl bg-[#1a202c] text-white flex justify-center items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeInUp}
            className="flex justify-center text-center flex-col gap-4"
          >
            <motion.p variants={fadeInUp}>
              MONITOR. ALERT. AI DIAGNOSTICS REPORT.
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="linear__text__gradient text-4xl font-extrabold leading-10 tracking-tight  sm:text-6xl sm:leading-none md:text-8xl"
            >
              Get downtime <br />
              AI Diagnostics to help you <br />
              build better apps
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-base text-gray-500 md:text-lg"
            >
              Join the mailing list for early access to the alpha release
            </motion.p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default StaggeredText;
