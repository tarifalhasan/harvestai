import "swiper/css";
import "swiper/css/effect-fade";
import { ContainerTextFlip } from "../elements/container-text-flip";
import DotGrid from "./DotGrid";

export default function SuiBuildersEvents() {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <DotGrid
        dotSize={5}
        gap={15}
        baseColor="#000000"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
      <div className="text-center absolute left-1/2 -translate-1/2 top-1/2 -translate-y-1/2 container mx-auto  z-10 pt-10 xl:pt-24 mb-16">
        <ContainerTextFlip
          words={["better", "modern", "Tyler Durden", "awesome"]}
        />
      </div>
    </div>
  );
}
