import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const ViewBasedAnimations = () => {
  const ref = useRef();

  const isInView = useInView(ref, { once: true });

  return (
    <div
      className="w-full h-[150vh] rounded-2xl py-4 flex flex-col justify-between gap-4"
      style={{ background: "linear-gradient(90deg, #20002c 0%, #cbb4d4 100%)" }}
    >
      <h1 className="text-4xl font-extrabold text-white text-center">
        ViewBasedAnimations
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 4 }}
        className="h-[100vh] bg-black mx-5 rounded-2xl"
      ></motion.div>
      <div
        ref={ref}
        style={{
          height: "100vh",
          margin: "0 1.25rem",
          borderRadius: "1rem",
          background: isInView ? "blue" : "red",
          transition: "2s background",
        }}
      ></div>
    </div>
  );
};

export default ViewBasedAnimations;
