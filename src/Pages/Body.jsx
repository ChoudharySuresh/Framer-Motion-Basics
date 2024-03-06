import TextAnimationSimple from "../Components/Home/SimpleTextAnimation/TextAnimationSimple";
import ExitEnterAnimation from "../Components/Home/ExitEnterAnimation/ExitEnterAnimation";
import DragAnimation from "../Components/Home/DragAnimation/DragAnimation";
import HoverClick from "../Components/Home/Hover&ClickAnimation/HoverClick";
import TopScroll from "../Components/Home/ScrollTopAnimation/TopScroll";
import ScrollTriggredAnimation from "../Components/Examples/BasicCardReveal/ScrollTriggredAnimation";

const Body = () => {
  return (
    <div>
      <TextAnimationSimple />
      <ExitEnterAnimation />
      <DragAnimation />
      <HoverClick />
      <TopScroll />
      <ScrollTriggredAnimation />
    </div>
  );
};

export default Body;
