import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
const BasicsOfMotion = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="w-full h-[85vh] bg-[#1a202c] rounded-2xl py-4">
      <h1 className="text-4xl font-extrabold text-white text-center">
        Basics Of Motion
      </h1>
      <div className="flex flex-col gap-8 h-full justify-center items-center">
        <motion.button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-blue-300 rounded-md text-white px-8 py-2"
          layout // smoth animation when button moves down
        >
          Show / Hide
        </motion.button>

        {/*AnimatePresence :- Anytime you want to use Exit prop to add unmount animations to motion elements */}
        {/* mode is when button takes space / move down , when animation stops at end */}
        <AnimatePresence mode="popLayout">
          {isVisible && (
            <motion.div
              // Here Initial , animate, transition are props/ variants in motion
              // We can Write any css properties in props just like we do in style

              // Initial state when component first mounts
              initial={{ rotate: "0deg", scale: 0, y: 0 }}
              // Animate is state that we want this to animate to
              animate={{
                rotate: "180deg",
                scale: 1,
                y: [0, 150, -150, -150, 0], // we can acheive keyframes like 0% 50% 100% by array
              }}
              // whenever compoenent is unmounted from screen its going to animate to that spot before unmounting
              exit={{ rotate: "0deg", scale: 0, y: 0 }}
              transition={{
                // since it animate so fast that's why we need some delay so transition
                duration: 1,
                ease: "backInOut",
                times: [0, 0.25, 0.5, 0.85, 1],
              }}
              className="w-[150px] h-[150px] bg-white"
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BasicsOfMotion;
