import { motion } from "framer-motion";
import { useState } from "react";
const HoverClick = () => {
  const [showCard, setShowCard] = useState(false);
  return (
    <div>
      <h1 className="text-center text-3xl my-3">Hover And Click Animation</h1>
      <div className="bg-[#764ba2] h-[100vh] rounded-3xl py-5 my-5 flex justify-center items-center">
        <motion.div
          className="bg-[#fcb69f] rounded-3xl shadow-2xl px-3 py-5"
          whileHover={{ scale: 1.1 }}
          transition={{
            layout: {
              duration: 1,
              type: "spring",
            },
          }}
          layout
          onClick={() => setShowCard(!showCard)}
        >
          <motion.h3 className="cursor-pointer">Hover & Click</motion.h3>
          {showCard && (
            <motion.p
              className="w-[600px] cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
              voluptate commodi et. Totam aliquid doloremque aspernatur
              consequuntur, commodi illum vitae molestias expedita facere
              consectetur odio? Sequi iure vitae distinctio ex! Deserunt atque
              ut fugiat quaerat quam illo blanditiis eum accusamus.
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default HoverClick;
