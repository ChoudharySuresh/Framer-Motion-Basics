import { motion, useScroll } from "framer-motion";

const TopScroll = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className={`h-[0.7rem] fixed top-0 left-0 right-0 bg-[#89216b]`}
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      ></motion.div>
      <h1 className="text-center text-3xl my-3 bg-[#b892f7] py-7 rounded-2xl text-white font-bold">
        scroll bar At Top
      </h1>
    </>
  );
};

export default TopScroll;
