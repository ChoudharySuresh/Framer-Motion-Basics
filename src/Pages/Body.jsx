import TextAnimationSimple from "../Components/SimpleTextAnimation/TextAnimationSimple";
import ExitEnterAnimation from "../Components/ExitEnterAnimation/ExitEnterAnimation";
import DragAnimation from "../Components/DragAnimation/DragAnimation";
import HoverClick from "../Components/Hover&ClickAnimation/HoverClick";
import TopScroll from "../Components/ScrollTopAnimation/TopScroll";
import ScrollTriggredAnimation from "../Components/BasicCardReveal/ScrollTriggredAnimation";

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
