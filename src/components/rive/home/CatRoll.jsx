import { useRive } from "@rive-app/react-canvas";

export default function CatRoll() {
  const {  RiveComponent } = useRive(
    {
      src: "/assets/rive/home/cat-playing-animation.riv",
      stateMachines: "State Machine 1",
      autoplay: true,
    },

    {
      shouldResizeCanvasToContainer: true,
    }
  );

  return (
    <div className="rive-cat-roll">
      <RiveComponent />
    </div>
  );
}

