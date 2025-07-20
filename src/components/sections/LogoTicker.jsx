import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { LogoTickerItems } from "../../utils/constants";

const LogoTicker = () => {
  const logos = [...LogoTickerItems, ...LogoTickerItems];
  return (
    <div className="mt-15 py-5">
      <Swiper
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={60}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 }, // ✅ Desktop
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img
              src={logo}
              alt={`logo-${index}`}
              className="h-[26px] w-[120px]  mx-auto sm:w-[200px] object-contain sm:h-[37px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoTicker;
