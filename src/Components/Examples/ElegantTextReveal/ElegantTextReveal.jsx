import { motion } from "framer-motion";
import { SplitStringUsingRegex } from "../../../Utils/helperfunctions";

const heading = "Elegant Text Reveal";
const text =
  "🌐✨Transform your web content using Franer Motion's UTF-16 powered text animations Each character, a vibrant performer, dances dynamically, weaving a captivating narrative. Elevate user engagement with the art of animated storytelling. 🚀🎉 #webdev #animation";
const ElegantTextReveal = () => {
  const headingChars = SplitStringUsingRegex(heading);
  const textChars = SplitStringUsingRegex(text);

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };
  return (
    <>
      <div className="w-full h-[calc(100vh-2rem)] rounded-2xl bg-[#1a202c] text-white flex flex-col justify-center items-center">
        <motion.h1
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.02 }}
          className="text-4xl font-extrabold text-center"
        >
          {headingChars.map((char) => (
            <motion.span
              variants={charVariants}
              key={char}
              transition={{ duration: 0.5 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.015 }}
          className="w-[50%] text-center my-4"
        >
          {textChars.map((char) => (
            <motion.span
              variants={charVariants}
              key={char}
              transition={{ duration: 0.35 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </>
  );
};

export default ElegantTextReveal;
