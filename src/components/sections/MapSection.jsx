import { locations } from "../../utils/constants";
import MapImage from "../../assets/images/map.svg";
import GrayLoactionMarker from "../../assets/icons/graylocationmarker.svg";
import OrangeLocationMarker from "../../assets/icons/orangegraymarker.svg";
import BlackLocationMarker from "../../assets/icons/blacklocationmarker.svg";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";

const MapSection = () => {
  return (
    <section className="map-section lg:mt-50 mt-1">
      <div className="bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]">
        <MaxWidthWrapper>
          <div className="mb-10 text-center lg:mb-16 xl:mb-20">
            <div className="mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[950px]">
              <h2 className="text-white lg:text-[80px] lg:leading-[80px] font-bold text-[36px] leading-[45px] tracking-tight ">
                We always welcome our clients to our office
              </h2>
            </div>
          </div>
          <div className="relative">
            <img src={MapImage} alt="mapbase" className="h-auto w-full" />
            {locations.map((loc, index) => (
              <div
                key={index}
                className={`group absolute hidden sm:flex gap-2 ${loc.position}`}
              >
                <div className="relative w-[50px] h-[50px]">
                  <button className="group flex justify-center items-center w-[50px] h-[50px] relative transition-all duration-300">
                    <img
                      src={GrayLoactionMarker}
                      alt="gray-marker"
                      width="35"
                      height="35"
                      className="opacity-100 group-hover:opacity-0 transition-all duration-300"
                    />
                    <img
                      src={OrangeLocationMarker}
                      alt="orange-marker"
                      width="50"
                      height="50"
                      className="absolute opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                    />
                  </button>
                  <div className="absolute bg-white rounded-[8px] p-4 text-sm w-[170px] bottom-0 right-0 xl:right-[50px] xxl:right-auto xxl:left-[50px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 xl:translate-y-12 group-hover:translate-y-0">
                    <div className="flex gap-1 font-bold pb-3">
                      <img
                        src={BlackLocationMarker}
                        alt="black-marker"
                        width="17"
                        height="17"
                      />
                      {loc.name}
                    </div>
                    <address className="not-italic font-semibold">
                      Line 1: House/Flat 208, Venue Street
                    </address>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default MapSection;
