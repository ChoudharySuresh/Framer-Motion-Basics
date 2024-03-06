import { motion } from "framer-motion";
const TextAnimationSimple = () => {
  return (
    <div>
      <h1 className="text-center text-3xl my-3">Simple Text Animation</h1>
      <motion.h1
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{
          duration: 1,
          delay: 2.5,
        }}
        whileInView={{ opacity: 1 }}
        className="text-5xl text-green-500"
      >
        Suresh Choudhary
      </motion.h1>
    </div>
  );
};

export default TextAnimationSimple;
