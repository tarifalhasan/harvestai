import PageNavbar from "../components/shared/PageNavbar";
import ContentImageOne from "../assets/images/content-image1.webp";
import ContentImageTwo from "../assets/images/content-image-4.jpg";
import DataIcon from "../assets/icons/trending-up-icon.svg";
import GearIcon from "../assets/icons/gear.svg";
import MaxWidthWrapper from "../components/shared/MaxWidthWrapper";
import VideoPlayer from "../components/sections/VideoPlayer";
import AutomotinIcon from "../assets/icons/icon-orange-cursor-click.svg";
import ClockIcon from "../assets/icons/icon-orange-clock.svg";
import AboutContact from "../components/sections/AboutContact";
import AnimatonVariants from "../components/shared/AnimatonVariants";

const ServiceDetails = () => {
  return (
    <>
      <PageNavbar pages="Data Analytics" page="Service Details" />
      <section className="py-10 overflow-hidden">
        <MaxWidthWrapper>
          <div className="">
            {/* top row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-10 lg:gap-20">
              <div>
                <h1 className="text-[36px] font-bold text-primary leading-10 font-secondary tracking-tight lg:text-[80px] lg:leading-[90px]">
                  Analyze any data perfectly with AI
                </h1>
                <div className="lg:max-w-xl">
                  <p className="text-lg text-primary font-primary mt-5 lg:text-xl">
                    AI data analysis, also known as artificial intelligence data
                    analysis or AI-driven data analysis, refers to the process
                    of using artificial intelligence and machine learning
                    techniques.
                  </p>{" "}
                </div>
                <div className="lg:flex lg:mt-8 items-center">
                  <div className="lg:flex flex-col">
                    <div className="lg:flex">
                      <img src={DataIcon} alt="" className="mt-5 lg:w-15" />
                    </div>
                    <div>
                      <h2 className="text-[30px] font-semibold tracking-tighter font-secondary ">
                        Data Preprocessing
                      </h2>
                      <p className="text-lg text-primary mt-4 font-primary">
                        AI data analysis can begin, and raw data must be
                        collected, cleaned.
                      </p>
                    </div>
                  </div>
                  <div className="lg:flex flex-col">
                    <img src={GearIcon} alt="" className="mt-5 lg:w-12" />
                    <h2 className="text-[30px] font-semibold tracking-tighter font-secondary mt-4">
                      Predictive Analytics
                    </h2>
                    <p className="text-lg text-primary mt-4 font-primary">
                      Algorithms use historical data to forecast future trends,
                      behaviors.
                    </p>
                  </div>
                </div>
              </div>

              <img
                src={ContentImageOne}
                alt=""
                width="526"
                height="450"
                className="sm:h-[50%] sm:w-[50%] w-full "
              />
            </div>
            {/* middle row */}
            <div className="mt-20 lg:mt-30">
              <div className="sm:max-w-sm mx-auto lg:max-w-5xl text-center">
                <h2 className="text-[36px] font-bold text-primary leading-10 font-secondary tracking-tight lg:text-[80px] lg:leading-[80px]">
                  Widely used throughout the industry for work
                </h2>
              </div>

              <div className="mt-20 flex flex-col gap-12 sm:flex-row items-center lg:gap-30">
                <AnimatonVariants
                  animation="fade-right"
                  delay={0.7}
                  duration={0.7}
                >
                  <img
                    src={ContentImageTwo}
                    alt=""
                    width="526"
                    height="450"
                    className="lg:w-[1400px] sm:w-[1400px] h-auto object-cover"
                  />
                </AnimatonVariants>
                <AnimatonVariants
                  animation="fade-left"
                  delay={0.7}
                  duration={0.7}
                >
                  <div>
                    <div className="flex flex-col gap-8 mt-10">
                      <div>
                        <h2 className="text-2xl sm:text-xl font-secondary font-bold tracking-tighter lg:text-2xl">
                          1. Businesses and Corporations:
                        </h2>
                        <p className="text-lg mt-2 font-primary">
                          Businesses use AI data analysis to gain competitive
                          advantages, optimize operations, & make data-driven
                          decisions. This includes industries such as retail,
                          finance, manufacturing.
                        </p>
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-xl font-secondary font-bold tracking-tighter lg:text-2xl">
                          2. Data Scientists and Analysts:
                        </h2>
                        <p className="text-lg mt-2 font-primary">
                          Data scientists and analysts leverage AI tools and
                          algorithms to extract actionable insights from large
                          datasets. They also use AI for predictive modeling,
                          anomaly detection, and data visualization.
                        </p>
                      </div>
                      <div>
                        <h2 className="text-2xl font-secondary font-bold tracking-tighter sm:text-xl lg:text-2xl">
                          3. Government and Public Sector:
                        </h2>
                        <p className="text-lg mt-2 font-primary">
                          Government agencies use AI data analysis for various
                          purposes, including public policy development, law
                          enforcement, urban planning, and disaster.
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatonVariants>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        <div className="flex flex-col gap-40">
          <VideoPlayer isGradient={false} />
          <MaxWidthWrapper>
            {/* bottom row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-10 lg:gap-20">
              <AnimatonVariants
                animation="fade-left"
                delay={0.5}
                duration={0.7}
              >
                <div>
                  <h1 className="text-[36px] font-bold text-primary leading-10 font-secondary tracking-tight lg:text-[80px] lg:leading-[90px]">
                    Manage large amounts of data
                  </h1>
                  <div className="lg:max-w-xl">
                    <p className="text-lg text-primary font-primary mt-5 lg:text-xl">
                      AI data analysis also can handle vast amounts of data,
                      making it suitable for big data environments. Data
                      analysis can automate many aspects of data processing and
                      analysis
                    </p>
                  </div>
                  <div className="lg:flex lg:mt-8 items-center">
                    <div className="lg:flex flex-col">
                      <div className="lg:flex">
                        <img
                          src={ClockIcon}
                          alt=""
                          className="mt-5 lg:w-14 w-10"
                        />
                      </div>
                      <div>
                        <h2 className="text-[30px] font-semibold tracking-tighter font-secondary ">
                          Real-Time Analysis
                        </h2>
                        <p className="text-lg text-primary mt-4 font-primary">
                          Some AI data analysis solutions are design to process
                          making instant.
                        </p>
                      </div>
                    </div>
                    <div className="lg:flex flex-col">
                      <img
                        src={AutomotinIcon}
                        alt=""
                        className="mt-6 lg:w-10 w-10"
                      />
                      <h2 className="text-[30px] font-semibold tracking-tighter font-secondary mt-4">
                        Automation
                      </h2>
                      <p className="text-lg text-primary mt-4 font-primary">
                        his leads to increased efficiency and quicker
                        decision-making.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatonVariants>
              <AnimatonVariants
                animation="fade-right"
                delay={0.5}
                duration={0.7}
              >
                <div>
                  <img
                    src={ContentImageOne}
                    alt=""
                    width="526"
                    height="450"
                    className="lg:w-[1000px] sm:w-[1400px] h-auto object-cover"
                  />
                </div>
              </AnimatonVariants>
            </div>
          </MaxWidthWrapper>
          <AboutContact />
        </div>
      </section>
    </>
  );
};
export default ServiceDetails;
