import AnimationControls from "./LearningComponent/AnimationControls";
import BasicsOfMotion from "./LearningComponent/BasicsOfMotion";
import Gestures from "./LearningComponent/Gestures";
import ScrollAnimations from "./LearningComponent/ScrollAnimations";
import ViewBasedAnimations from "./LearningComponent/ViewBasedAnimations";

const LearningResourcePage = () => {
  return (
    <div className="mx-auto max-w-[73%] my-4 flex flex-col gap-7">
      <BasicsOfMotion />
      <Gestures />
      <AnimationControls />
      <ViewBasedAnimations />
      <ScrollAnimations />
    </div>
  );
};

export default LearningResourcePage;
