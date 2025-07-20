import { Link } from "react-router-dom";

import { GoArrowRight } from "react-icons/go";

const FeatureCard = ({ feature }) => {
  const Icon = feature.icon; // Assign the icon component

  return (
    <div className="border border-black outline-none group hover:bg-black transition-colors duration-300">
      <div className="px-8 h-full py-10 flex flex-col justify-between text-primary transition-colors duration-300 ">
        <div className="space-y-4">
          {/* Icon */}
          {Icon && <Icon size={40} className="group-hover:text-blue-500" />}

          {/* Title */}
          <h2 className="text-lg group-hover:text-white font-bold font-secondary mt-6 lg:text-2xl">
            {feature.title}
          </h2>

          {/* Description */}
          <p className="font-primary text-lg group-hover:text-white mt-4">
            {feature.desc}
          </p>
        </div>

        {/* Arrow Icon */}
        <Link to="/servicedetails">
          <div className="mt-10">
            <GoArrowRight className="group-hover:text-blue" size={32} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
