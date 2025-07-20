import { useState } from "react";
import { servicesFaqs } from "../../utils/constants";
import PlusIcon from "../../assets/icons/plus.svg";

const ServiceAccordionCard = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="md:ml-10 lg:ml-20 xl:ml-32" data-jos_animation="fade-left">
      <ul className="accordion divide-y divide-[#DBD6CF]">
        {servicesFaqs.map((faq, index) => (
          <li
            key={index}
            className={`accordion-item py-6 ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <div
              className="flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px] cursor-pointer font-secondary"
              onClick={() => toggleAccordion(index)}
            >
              <p>{faq.question}</p>
              <div>
                <img
                  src={PlusIcon}
                  alt="toggle icon"
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-45" : ""
                  }`}
                />
              </div>
            </div>
            {activeIndex === index && (
              <div className="accordion-content text-[#2C2C2C] mt-3 text-base font-primary ">
                <p>{faq.answer}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ServiceAccordionCard;
