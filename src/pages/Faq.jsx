import { useState, useRef } from "react";
import PageNavbar from "../components/shared/PageNavbar";
import { faqsData } from "../utils/constants";
import PlusIcon from "../assets/icons/plus.svg";
import MaxWidthWrapper from "../components/shared/MaxWidthWrapper";
import AboutContact from "../components/sections/AboutContact";
import AnimatonVariants from "../components/shared/AnimatonVariants";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <PageNavbar pages="FAQs" page="FAQs" />
      <section>
        <div className="py-20 xl:pb-[130px]">
          <MaxWidthWrapper>
            <div className="mb-10 text-center lg:mb-16 xl:mb-20">
              <div className="mx-auto max-w-md lg:max-w-3xl xl:max-w-[950px]">
                <AnimatonVariants>
                  <h2 className="text-[36px] font-secondary leading-10 tracking-tight font-extrabold lg:text-[80px] lg:leading-[80px]">
                    Our experts are able to answer all your questions
                  </h2>
                </AnimatonVariants>
              </div>
            </div>

            <ul className="flex flex-col gap-y-6">
              {faqsData.map(({ question, answer }, i) => {
                const isOpen = openIndex === i;

                return (
                  <AnimatonVariants>
                    <li
                      key={question}
                      className="rounded-[10px] border border-[#EAEDF0] bg-white px-7 py-[30px]"
                    >
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => toggleIndex(i)}
                      >
                        <div className="max-w-[250px] sm:max-w-3xl">
                          <h5 className="text-lg lg:text-[25px] font-bold tracking-tighter font-secondary">
                            {question}
                          </h5>
                        </div>
                        <img
                          src={PlusIcon}
                          alt="toggle"
                          className={`w-6 h-6 transition-transform duration-300 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        />
                      </div>

                      <div
                        ref={(el) => (contentRefs.current[i] = el)}
                        className="overflow-hidden transition-all duration-500 ease-in-out"
                        style={{
                          height: isOpen
                            ? contentRefs.current[i]?.scrollHeight + "px"
                            : "0px",
                        }}
                      >
                        <p className="mt-4 text-[#2C2C2C] text-lg font-primary">
                          {answer}
                        </p>
                      </div>
                    </li>
                  </AnimatonVariants>
                );
              })}
            </ul>
          </MaxWidthWrapper>
        </div>
      </section>
      <AboutContact />
    </>
  );
};

export default Faq;
