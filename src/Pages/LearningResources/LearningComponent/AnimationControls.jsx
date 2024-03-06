import { motion, useAnimationControls } from "framer-motion";
const AnimationControls = () => {
  // In order to apply animation to some other elements when button is click we use useAnimationcontrols
  const controls = useAnimationControls();
  const handleClick = () => {
    controls.start("flip");
  };
  return (
    <div
      className="w-full h-[85vh] rounded-2xl py-4"
      style={{ background: "linear-gradient(90deg, #ff9a9e 0%, #fad0c4 100%)" }}
    >
      {/* Animation controls :- In Gestures component when one button is clicked i want to do some animation on another / below button or another div */}
      <h1 className="text-4xl font-extrabold text-black text-center">
        Animation Controls
      </h1>
      <div className="flex flex-col gap-8 h-full justify-center items-center">
        <button
          onClick={handleClick}
          className="bg-black px-12 py-4 text-lg rounded-lg text-white"
        >
          Flip It!
        </button>
        <motion.div
          variants={{
            initial: {
              rotate: "0deg",
            },
            flip: {
              rotate: "360deg",
            },
          }}
          initial="initial"
          animate={controls}
          className="w-[150px] h-[150px] bg-black rounded-xl"
        ></motion.div>
      </div>
    </div>
  );
};

export default AnimationControls;
