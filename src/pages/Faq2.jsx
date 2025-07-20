import { useState } from "react";
import MaxWidthWrapper from "../components/shared/MaxWidthWrapper";
import PageNavbar from "../components/shared/PageNavbar";
import PlusIcon from "../assets/icons/plus.svg";
import { faqData2 } from "../utils/constants";
import AboutContact from "../components/sections/AboutContact";
import AnimatonVariants from "../components/shared/AnimatonVariants";

const tabs = [
  { id: "general-questions", label: "General questions" },
  { id: "about-the-company", label: "About the company" },
  {
    id: "about-artificial-intelligence",
    label: "About artificial intelligence",
  },
  { id: "about-the-team", label: "About the team" },
];

export default function Faq2() {
  const [activeTab, setActiveTab] = useState("general-questions");
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <PageNavbar pages="FAQs" page="FAQs" />
      <div className="py-20 xl:pb-[130px]">
        <MaxWidthWrapper>
          <div className="mb-10 text-center lg:mb-16 xl:mb-20">
            <div className="mx-auto max-w-md lg:max-w-3xl xl:max-w-[950px]">
              <AnimatonVariants>
                <h2 className="text-[36px] font-secondary leading-10 tracking-tight font-extrabold lg:text-[80px] lg:leading-[80px] lg:-mt-10">
                  Our experts are able to answer all your questions
                </h2>
              </AnimatonVariants>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-[minmax(0,_auto)_1fr] lg:grid-cols-[minmax(354px,_auto)_1fr] lg:gap-x-[86px]">
            {/* Sidebar Tabs */}
            <div className="flex flex-col gap-y-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`border border-black/20 tracking-normal font-bold font-primary cursor-pointer py-5 px-5 text-xl ${
                    activeTab === tab.id
                      ? "bg-black text-white rounded-full"
                      : "bg-white text-black rounded-3xl"
                  }`}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setOpenIndex(null);
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* FAQ Accordion */}
            <div>
              <ul className="sflex flex-col gap-y-6">
                {(faqData2[activeTab] || []).map((questionItem, index) => (
                  <AnimatonVariants key={index}>
                    <li
                      className={`accordion-item is-2 rounded-[10px] border-[1px] border-[#EAEDF0] bg-white px-7 py-[30px] ${
                        openIndex === index ? "active" : ""
                      }`}
                    >
                      <div
                        className="accordion-header flex items-center justify-between text-xl leading-[1.2] -tracking-[0.5px] lg:text-[28px] cursor-pointer"
                        onClick={() => handleAccordionToggle(index)}
                      >
                        <div className="max-w-[250px] sm:max-w-3xl">
                          <h5 className="text-2xl lg:text-[25px] font-bold tracking-tighter font-secondary">
                            {questionItem.question}
                          </h5>
                        </div>
                        <div className="accordion-icon">
                          <img
                            src={PlusIcon}
                            alt="toggle"
                            className={`w-6 h-6 transition-transform duration-300 ${
                              openIndex === index ? "rotate-45" : ""
                            }`}
                          />
                        </div>
                      </div>
                      {openIndex === index && (
                        <div className="accordion-content text-[#2C2C2C] mt-4 text-lg font-primary">
                          <p>{questionItem.answer}</p>
                        </div>
                      )}
                    </li>
                  </AnimatonVariants>
                ))}
              </ul>
            </div>
          </div>
        </MaxWidthWrapper>
        <div className="mt-30">
          <AboutContact />
        </div>
      </div>
    </>
  );
}
