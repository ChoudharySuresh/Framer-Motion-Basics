import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
const ExitEnterAnimation = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1 className="text-center text-3xl my-3">Exit and Enter Animation</h1>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5 }}
            className="w-[10rem] h-[10rem] bg-orange-200 rounded-3xl mx-auto"
          ></motion.div>
        )}
      </AnimatePresence>
      <div className="flex justify-center my-7">
        <button
          onClick={() => setShow(!show)}
          className="bg-black px-5 py-2 rounded-lg text-white"
        >
          {show ? "Show" : "hide"}
        </button>
      </div>
    </div>
  );
};

export default ExitEnterAnimation;
