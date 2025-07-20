import { Splide, SplideSlide } from "@splidejs/react-splide";
import SplideCore from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useEffect, useRef } from "react";

import bg_1 from "../../assets/images/bg-1.jpg";
import bg_2 from "../../assets/images/bg-2.png";
import bg_3 from "../../assets/images/bg-3.png";

const slides = [
  {
    id: 1,
    title: "Decentralized Onboarding",
    description:
      "Users can connect with any EVM-compatible Web3 wallet. Initial setup ensures transparency and control from day one. % of people onboarded till now . % of people using social media.",
    image: bg_1,
  },
  {
    id: 2,
    title: "Intelligent Content Creation ",
    description:
      "AI-enhanced content creation and sharing. AI-enhanced content creation and sharing",
    image: bg_2,
  },
  {
    id: 3,
    title: "Trustworthy Reward & Monetization",
    description:
      "HVT enables direct, authentic creator compensation. No intermediaries; users keep full rewards",
    image: bg_3,
  },
  {
    id: 4,
    title: "Continuous Governance & Growth",
    description:
      "Users propose and vote via decentralized governance. Ecosystem grows through user participation and value",
    image: bg_1,
  },
];

const VideoPlayer = () => {
  const splideRef = (useRef < SplideCore) | (null > null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!splideRef.current || isScrolling.current) return;

      isScrolling.current = true;
      if (e.deltaY > 0) {
        splideRef.current.go(">"); // next slide
      } else {
        splideRef.current.go("<"); // previous slide
      }

      // Throttle scroll to avoid rapid changes
      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section className="bg-black py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <Splide
          onMounted={(splide) => {
            splideRef.current = splide;
          }}
          options={{
            type: "fade",
            rewind: true,
            autoplay: false,
            speed: 1000,
            arrows: false,
            pagination: true,
          }}
        >
          {slides.map((slide) => (
            <SplideSlide key={slide.id}>
              <div className="flex flex-col md:flex-row items-center gap-10">
                {/* Text */}
                <div className="w-full md:w-1/2 text-white">
                  <div className="text-sm font-medium text-gray-500 border border-gray-800 rounded-md w-fit px-3 py-1 mb-4">
                    {String(slide.id).padStart(2, "0")}
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                    {slide.title}
                  </h2>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    {slide.description}
                  </p>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default VideoPlayer;
