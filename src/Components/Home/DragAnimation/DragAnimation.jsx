import { motion, useDragControls } from "framer-motion";
const DragAnimation = () => {
  const controls = useDragControls();

  function startDrag(event) {
    controls.start(event, { snapToCursor: true });
  }
  return (
    <div>
      <h1 className="text-center text-3xl my-3">Drag Animation</h1>
      <div className="bg-gray-100 rounded-3xl my-7 py-5">
        <div className="flex justify-center items-center gap-7">
          <div>
            <p className="text-center">No Constraints</p>
            <motion.div
              drag
              className="w-[10rem] h-[10rem] bg-orange-200 rounded-3xl"
            ></motion.div>
          </div>
          <div>
            <p className="text-center">On Click - Drag Y Only</p>
            <div
              onPointerDown={startDrag}
              style={{
                touchAction: "none",
                border: "1px solid black",
                width: "20rem",
                height: "20rem",
              }}
            />
            <motion.div
              drag="y"
              dragListener={false}
              dragControls={controls}
              className="w-[10rem] h-[10rem] bg-orange-200 rounded-3xl"
            ></motion.div>
          </div>
          <div>
            <p className="text-center">Drag Constraints</p>
            <motion.div
              drag
              dragConstraints={{ left: -10, top: -20, right: 100, bottom: 0 }}
              className="w-[10rem] h-[10rem] bg-orange-200 rounded-3xl"
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragAnimation;
