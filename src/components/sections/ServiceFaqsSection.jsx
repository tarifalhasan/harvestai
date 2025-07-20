import { Link } from "react-router-dom";
import ServiceAccordionCard from "../cards/ServiceAccordionCard";
import Button from "../shared/Button";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import { motion } from "motion/react";

const fadeRight = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.5, ease: "easeInOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.5, ease: "easeInOut" },
  },
};

const ServiceFaqsSection = () => {
  return (
    <section>
      <div className="pb-20 xl:pb-[150px] py-15 lg:py-30">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2">
            {/* Left side with fade-right animation */}
            <motion.div
              className="flex flex-col"
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="mb-6 lg:max-w-4xl">
                <h2 className="text-[35px] leading-10 font-bold text-primary font-secondary lg:text-[70px] lg:leading-[80px]">
                  Freely ask us for more information
                </h2>
              </div>
              <div className="text-lg leading-[1.4] lg:text-[21px]">
                <p className="mb-7 text-lg font-primary">
                  Our AI SaaS solutions can be quickly deployed, enabling users
                  to start benefiting from AI capabilities without lengthy setup
                  and development times in fast-paced industries.
                </p>
                <Link to="/contact" className="button mt-5">
                  <Button className="bg-black text-white py-4 font-secondary text-lg">
                    Ask your questions
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right side accordion with fade-left animation */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <ServiceAccordionCard />
            </motion.div>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default ServiceFaqsSection;
