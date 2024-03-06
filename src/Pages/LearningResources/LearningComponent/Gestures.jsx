import { motion, MotionConfig } from "framer-motion";
const Gestures = () => {
  return (
    <div className="w-full h-[85vh] bg-blue-100 rounded-2xl py-4">
      {/*  Animations when some action happens like - hover , click */}
      <h1 className="text-4xl font-extrabold text-black text-center">
        Gestures
      </h1>
      <div className="flex flex-col gap-8 h-full justify-center items-center">
        {/*  We can use MotionConfig like context provider and we dont need to copy and paste same properties over again and again */}
        <MotionConfig
          transition={{ duration: 0.125, ease: "easeInOut" }} // tranistion will be applied to all children
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.85, rotate: "2.5deg" }}
            className="text-xl bg-blue-600 text-white px-5 py-4 rounded-lg"
          >
            Click Me!
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.85, rotate: "-2.5deg" }}
            className="text-xl bg-red-600 text-white px-5 py-4 rounded-lg"
          >
            Click Me!
          </motion.button>
        </MotionConfig>
      </div>
    </div>
  );
};

export default Gestures;
