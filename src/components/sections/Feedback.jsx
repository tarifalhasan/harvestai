import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const newsItems = [
    {
      id: 1,
      title: "Parasol Brings Trading Card Gaming Experience to Sui",
      category: "Games",
      image:
        "https://cdn.prod.website-files.com/6425f546844727ce5fb9e5ab/680f1bf26b5bfd247785ac0c_Parasol-feature.avif",
      link: "#",
    },
    {
      id: 2,
      title: "Sui Expands Access to Real-World Payments with xMoney...",
      category: "DeFi",
      image:
        "https://cdn.prod.website-files.com/6425f546844727ce5fb9e5ab/680f1c5c6b5bfd247785f887_xMoney-xPortal.avif",
      link: "#",
    },
    {
      id: 3,
      title: "Announcing the Move Registry (MVR): Radical Interoperability",
      category: "Move",
      image:
        "https://cdn.prod.website-files.com/6425f546844727ce5fb9e5ab/680f1ccd5c6d45a068e6d907_04-03-Blog-Header.avif",
      link: "#",
    },
    {
      id: 4,
      title: "Sui Network Reaches New Milestone in Transaction Speed",
      category: "Network",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      link: "#",
    },
    {
      id: 5,
      title: "Developer Tools Enhancement for Better Web3 Experience",
      category: "Development",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
      link: "#",
    },
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const getSlidePosition = (index) => {
    const diff = index - currentIndex;
    const totalSlides = newsItems.length;

    let position = diff;
    if (diff > totalSlides / 2) {
      position = diff - totalSlides;
    } else if (diff < -totalSlides / 2) {
      position = diff + totalSlides;
    }

    return position;
  };

  const getSlideStyles = (index) => {
    const position = getSlidePosition(index);
    const isActive = position === 0;
    const isAdjacent = Math.abs(position) === 1;

    let transform = `translateX(${position * 40}%) translateZ(${
      isActive ? 0 : -100
    }px)`;
    let opacity = isActive ? 1 : isAdjacent ? 0.6 : 0;
    let scale = isActive ? 1 : 0.8;

    if (Math.abs(position) > 1) {
      opacity = 0;
      scale = 0.6;
    }

    return {
      transform: `${transform} scale(${scale})`,
      opacity,
      zIndex: isActive ? 10 : isAdjacent ? 5 : 1,
      transition: isTransitioning
        ? "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        : "all 0.3s ease",
    };
  };

  return (
    <div className=" text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Catch up on what's happening <br />
            across the ecosystem
          </h2>
          <Link
            to="#"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
          >
            <span className="text-lg">Read the Sui blog</span>
            <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div className="relative h-96 md:h-[28rem] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              {newsItems.map((item, index) => (
                <div
                  key={item.id}
                  className="absolute w-80 md:w-96 h-96 "
                  style={getSlideStyles(index)}
                >
                  <Link
                    to={item.link}
                    className="block h-full bg-gray-800 rounded-3xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 group"
                  >
                    {/* Image */}
                    <div className="h-50 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col justify-between h-36">
                      <div>
                        <div className="inline-block bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm font-medium mb-3">
                          {item.category}
                        </div>
                        <h3 className="text-xl font-bold text-white leading-tight mb-4 line-clamp-2">
                          {item.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 text-gray-300 group-hover:text-blue-400 transition-colors">
                        <span className="text-base">Read article</span>
                        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className=" flex justify-between gap-4 mt-32 z-50 absolute w-full max-sm:hidden ">
              <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full border border-gray-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <ArrowLeft className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
              </button>

              <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full border border-gray-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <ArrowRight className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
              </button>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="justify-center gap-4 mt-8 max-sm:flex hidden  ">
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full border border-gray-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <ArrowLeft className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
            </button>

            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full border border-gray-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <ArrowRight className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
            </button>
          </div>

          {/* Dots Indicator */}
          {/* <div className="flex justify-center gap-2 mt-6">
            {newsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 800);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-400 w-8"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
