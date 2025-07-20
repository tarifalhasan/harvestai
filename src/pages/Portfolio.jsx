import MaxWidthWrapper from "../components/shared/MaxWidthWrapper";
import PageNavbar from "../components/shared/PageNavbar";
import ArrowBlack from "../assets/icons/icon-black-long-arrow-right.svg";
import { portfolioItems } from "../utils/constants";
import { Link } from "react-router-dom";
import AnimatonVariants from "../components/shared/AnimatonVariants";

const Portfolio = () => {
  return (
    <>
      <PageNavbar pages="Our Portfolio" page="Portfolio" />
      <section className="pb-40 xl:pb-[220px] mb-20">
        <MaxWidthWrapper>
          <div className="mb-10 text-center lg:mb-16 xl:mb-20">
            <div className="mx-auto lg:max-w-xl xl:max-w-[746px] sm:max-w-[350px]">
              <AnimatonVariants>
                <h2 className="text-[36px] leading-10 font-secondary text-primary md:text-4xl font-bold lg:text-[80px] lg:leading-[80px]">
                  Valuable AI projects for new generation
                </h2>
              </AnimatonVariants>
            </div>
          </div>

          <ul className="col-1 gap-6 md:columns-2">
            {portfolioItems.map((item, index) => (
              <li
                key={item.id}
                className="group mb-10 flex flex-col gap-y-6 last:mb-0"
              >
                <AnimatonVariants>
                  <Link
                    to={`/portfolio/${item.id}`}
                    className={`block w-full overflow-hidden rounded-[10px] ${
                      index % 2 === 0
                        ? "h-80 lg:h-[550px]"
                        : "h-96 lg:h-[750px]"
                    }`}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      width={636}
                      height={550}
                      className="h-full w-full object-cover scale-100 transition-all duration-300 group-hover:scale-105"
                    />
                  </Link>
                </AnimatonVariants>
                <Link
                  to={`/portfolio/${item.id}`}
                  className="flex items-center justify-between gap-x-6 text-xl font-bold leading-[1.4] hover:text-red-500 lg:gap-x-14 lg:text-2xl xl:gap-x-20 xl:text-3xl"
                >
                  <span className="flex-1 text-xl tracking-tight font-extrabold text-primary font-primary lg:text-3xl hover:text-red-500">
                    {item.title}
                  </span>
                  <div className="h-8 w-8 lg:h-[45px] lg:w-[45px]">
                    <img src={ArrowBlack} alt="arrow" width={45} height={45} />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default Portfolio;
