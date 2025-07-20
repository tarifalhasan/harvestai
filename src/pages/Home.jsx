import Lenis from "@studio-freight/lenis";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Card from "../components/elements/ParllexCard";
import AudienceSection from "../components/sections/AudienceSection";
import Features from "../components/sections/Features";
import ReviewCarousel from "../components/sections/Feedback";
import HeroSection from "../components/sections/HeroSection";
import SuiBuildersEvents from "../components/sections/SuiBuildersEvents";
import TestimonialSection from "../components/sections/TestimonialSection";
const Home = () => {
  const projects = [
    {
      title: "Decentralized Onboarding",
      description:
        "Users can connect with any EVM-compatible Web3 wallet.",
      src: "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg",
      link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
      color: "#BBACAF",
    },
    {
      title: "Intelligent Content Creation ",
      description:
        "HVT enables direct, authentic creator compensation",
      src: "https://images.pexels.com/photos/8147146/pexels-photo-8147146.jpeg",
      link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
      color: "#977F6D",
    },
    {
      title: " Trustworthy Reward & Monetization",
      description:
        "Users propose and vote via decentralized governance.",
      src: "https://images.pexels.com/photos/27834228/pexels-photo-27834228.jpeg",
      link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
      color: "#C2491D",
    },
    {
      title: "Continuous Governance & Growth",
      description:
        "Users propose and vote via decentralized governance.",
      src: "https://images.pexels.com/photos/8690102/pexels-photo-8690102.jpeg",
      link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
      color: "#B62429",
    },
  
  ];

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <main>
      <HeroSection />
      <Features />
      <AudienceSection />

      <div ref={container}>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
      <SuiBuildersEvents />

      <ReviewCarousel />
      <TestimonialSection />
    </main>
  );
};
export default Home;
