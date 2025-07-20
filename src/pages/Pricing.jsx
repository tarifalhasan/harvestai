import { useState } from "react";
import MaxWidthWrapper from "../components/shared/MaxWidthWrapper";
import PageNavbar from "../components/shared/PageNavbar";
import { PricingmonthlyPlans, PricingannuallyPlans } from "../utils/constants";
import PricingPageCard from "../components/cards/PricingPageCard";
import ServiceFaqsSection from "../components/sections/ServiceFaqsSection";
import AnimatonVariants from "../components/shared/AnimatonVariants";
const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const plans = isMonthly ? PricingmonthlyPlans : PricingannuallyPlans;
  return (
    <>
      <PageNavbar pages="Pricing Plans" page="Pricing" />
      <section className="lg:py-20 py-10">
        <MaxWidthWrapper>
          <AnimatonVariants>
            <div className="max-w-sm mx-auto lg:max-w-4xl">
              <h1 className="text-[36px] font-bold leading-10 tracking-tighter text-center lg:text-[80px] lg:leading-[80px] lg:tracking-tigheter">
                Find a flexible plan that fits your business
              </h1>
            </div>
            <div className="container mx-auto font-primary mt-10 ">
              <div className="flex justify-center">
                <div className="inline-flex space-x-2 rounded-full border-2 border-black font-semibold">
                  <button
                    className={`px-8 py-3 text-lg rounded-full transition-all duration-300 ${
                      isMonthly
                        ? "bg-black text-white"
                        : "bg-transparent text-black hover:bg-gray-100"
                    }`}
                    onClick={() => setIsMonthly(true)}
                  >
                    Monthly
                  </button>
                  <button
                    className={`px-8 py-3 text-lg rounded-full transition-all duration-300 ${
                      !isMonthly
                        ? "bg-black text-white"
                        : "bg-transparent text-black hover:bg-gray-100"
                    }`}
                    onClick={() => setIsMonthly(false)}
                  >
                    Annually
                  </button>
                </div>
              </div>
            </div>
          </AnimatonVariants>
        </MaxWidthWrapper>
        <div className="mx-auto max-w-7xl px-5 lg:px-0">
          <AnimatonVariants>
            <div className="mt-12 lg:mt-16 xl:mt-20">
              <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {plans.map((plan, idx) => (
                  <PricingPageCard key={idx} plan={plan} />
                ))}
              </ul>
            </div>
          </AnimatonVariants>
        </div>
        <div className="lg:-ml-12">
          <ServiceFaqsSection />
        </div>
      </section>
    </>
  );
};
export default Pricing;
