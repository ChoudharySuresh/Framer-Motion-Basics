import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const ScrollAnimations = () => {
  const { scrollYProgress } = useScroll();

  const springEffect = useSpring(scrollYProgress); // useSpring hook to get springy effect

  // we can change background color of scrollbar of top using useTransfrom hook it takes motion value (scrollProgress , map) map the value and apply color followed by color in second array
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    ["#ff758c", "#ff7796", "#ff7db0"]
  );
  return (
    <>
      <motion.div
        style={{
          //   scaleX: scrollYProgress, // normal
          scaleX: springEffect,
          width: "100%",
          height: "20px",
          backgroundColor: backgroundColor,
          position: "fixed",
          top: 0,
          left: 0,
          transformOrigin: "left",
        }}
      ></motion.div>
      <div
        className="w-full h-[85vh] rounded-2xl py-4 flex items-center justify-center"
        style={{
          background: "linear-gradient(90deg, #304352 0%, #d7d2cc 100%)",
        }}
      >
        <h1 className="text-4xl font-extrabold text-white text-center mb-5">
          Scroll Animation
        </h1>
      </div>
    </>
  );
};

export default ScrollAnimations;
