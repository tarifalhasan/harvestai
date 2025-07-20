import RatingIcon from "../../assets/icons/rating.svg";
import AnimatonVariants from "../shared/AnimatonVariants";
const TestimonialCard = ({ testimonial }) => {
  return (
    <AnimatonVariants>
      <div className="border border-white/15 p-8 rounded-lg">
        <img src={RatingIcon} alt="" />
        <p className="text-lg text-white mt-8 font-medium font-primary">
          {testimonial.desc}
        </p>
        <div className="flex items-center mt-8 gap-5">
          <img src={testimonial.image} alt="" className="rounded-full" />
          <div>
            <h3 className="text-xl font-semibold text-white font-primary">
              {testimonial.name}
            </h3>
            <p className="text-white font-primary text-sm mt-2">
              {testimonial.speaclist}
            </p>
          </div>
        </div>
      </div>
    </AnimatonVariants>
  );
};
export default TestimonialCard;
