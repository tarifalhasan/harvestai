import { coreValues } from "../../utils/constants";
import CoreValueCard from "../cards/CoreValueCard";
import AnimatonVariants from "../shared/AnimatonVariants";

const CoreValuesSection = () => {
  return (
    <section className="mx-5 rounded-[50px] bg-black px-[20px] py-20 sm:px-[50px] md:mx-[50px] lg:px-[100px] xl:py-[130px] mt-30">
      <AnimatonVariants>
        <div>
          <div className="mb-10 text-center lg:mb-12 xl:mb-20">
            <div className="mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-[745px] lg:text-[80px] font-bold lg:leading-[80px] font-secondary text-[36px] leading-10">
              <h2 className="text-white">The core values behind our work</h2>
            </div>
          </div>
          <div className="mb-6 h-[4px] w-full rounded bg-[#1b1b1b] sm:mb-0"></div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 justify-between gap-6 lg:grid-cols-4 xxl:flex xxl:flex-nowrap">
            {coreValues.map((value, index) => (
              <CoreValueCard key={index} {...value} />
            ))}
          </ul>
        </div>
      </AnimatonVariants>
    </section>
  );
};
export default CoreValuesSection;
