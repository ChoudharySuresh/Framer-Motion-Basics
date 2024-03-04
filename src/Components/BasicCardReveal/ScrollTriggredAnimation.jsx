import { motion } from "framer-motion";

const ScrollTriggredAnimation = () => {
  return (
    <div className="my-20">
      <h1 className="text-center text-3xl my-3">Reveal Cards On Scroll</h1>
      <div
        className="w-[100%] h-[30rem] overflow-y-scroll py-20 px-20"
        style={{
          background:
            "linear-gradient(90deg, #a770ef 0%, #cf8bf3 50%, #fdb99b 100%)",
        }}
      >
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
};

function Box() {
  return (
    <>
      <motion.div
        className="rounded-2xl w-[20rem] h-[20rem] my-20"
        style={{
          background: "linear-gradient(90deg, #ff9a9e 0%, #fad0c4 100%)",
        }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    </>
  );
}
export default ScrollTriggredAnimation;
