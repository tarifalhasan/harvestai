import ArrowRight from "../../assets/icons/arrowright.svg";
import ArrowOrange from "../../assets/icons/arroworange.svg";
// import ArrowRight from "../../assets/icons/arrowright.svg"
import { Link } from "react-router-dom";

const ServiceCard = ({ feature }) => {
  return (
    <div className="border border-black outline-none group hover:bg-black transition-colors duration-300">
      <div className="px-8 py-10 text-primary group-hover:text-white transition-colors duration-300">
        {/* Icon */}
        <img
          src={feature.icon}
          alt=""
          className="group-hover:hidden"
          width={70}
          height={70}
        />
        <img
          src={feature.orangeicon}
          alt=""
          className="hidden group-hover:block"
          width={70}
          height={70}
        />

        {/* Title */}
        <h2 className="text-lg font-bold font-secondary mt-6 lg:text-2xl hover:text-red-500">
          {feature.title}
        </h2>

        {/* Description */}
        <p className="font-primary text-lg mt-4 ">{feature.desc}</p>

        {/* Arrow Icon */}
        <Link to="/servicedetails">
          <div className="mt-10">
            <img src={ArrowRight} alt="" className="group-hover:hidden" />
            <img
              src={ArrowOrange}
              alt=""
              className="hidden group-hover:block"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
