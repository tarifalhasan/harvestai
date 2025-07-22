import {
  footerPrimaryPages,
  footerUtilitiesPages,
  involvedPages,
  LegalPages,
  ResourcesPages,
} from "../../utils/constants";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="relative z-[1] -mt-[150px] overflow-hidden rounded-tl-[30px] rounded-tr-[35px] bg-[#f2f8ff] lg:rounded-tl-[50px] lg:rounded-tr-[38px]">
      {/* Footer top */}
      {/* <FooterTop /> */}

      {/* Footer Main Content */}
      <MaxWidthWrapper>
        <div>
          <div className="h-[1px] w-full bg-[#f2f8ff]"></div>
          <div className="lg grid grid-cols-1 gap-10 py-[60px] lg:grid-cols-5 md:grid-cols-3 xl:grid-cols-5 xl:gap-20 xl:py-[100px]">
            {/* Logo & Description */}
            <div className="flex flex-col gap-y-6">
              <a href="/" className="inline-block">
                <img
                  src={"/icons/logo.png"}
                  alt="Harvest ai"
                  className="md:h-20 w-auto h-12 md:-ml-5 -mt-4"
                />
              </a>
              <p className="text-lg font-primary">
                At Harvest AI, we are building a future where every voice is
                valued, every action is rewarded, and every user owns their
                digital identity.
              </p>
              {/* <p className="text-lg font-primary">
                Website: <a href="/">www.example.com</a>
              </p> */}
            </div>

            {/* Primary Pages */}
            <div className="flex flex-col gap-y-6">
              <h4 className="text-[21px] font-semibold capitalize text-black font-secondary">
                Platform
              </h4>
              <ul className="flex flex-col gap-y-[10px] capitalize">
                {footerPrimaryPages.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.path}
                      className="transition-all duration-300 ease-linear hover:text-[#298DED] text-lg font-primary"
                    >
                      {item.page}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Utility Pages */}
            <div className="flex flex-col gap-y-6">
              <h4 className="text-[21px] font-semibold capitalize text-black font-secondary">
                Ecosystem
              </h4>
              <ul className="flex flex-col gap-y-[10px] capitalize">
                {footerUtilitiesPages.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.path}
                      className="transition-all duration-300 ease-linear hover:text-[#298DED] text-lg font-primary"
                    >
                      {item.page}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources   */}
            <div className="flex flex-col gap-y-6">
              <h4 className="text-[21px] font-semibold capitalize text-black font-secondary">
                Resources
              </h4>
              <ul className="flex flex-col gap-y-[10px] capitalize">
                {ResourcesPages.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.path}
                      className="transition-all duration-300 ease-linear hover:text-[#298DED] text-lg font-primary"
                    >
                      {item.page}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* legal   */}
            <div className="flex flex-col gap-y-6">
              <h4 className="text-[21px] font-semibold capitalize text-black font-secondary">
                Legal
              </h4>
              <ul className="flex flex-col gap-y-[10px] capitalize">
                {LegalPages.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.path}
                      className="transition-all duration-300 ease-linear hover:text-[#298DED] text-lg font-primary"
                    >
                      {item.page}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-y-6">
              <h4 className="text-[21px] font-semibold capitalize text-black font-secondary">
                Get Involved
              </h4>
              <ul className="flex flex-col gap-y-[10px] capitalize">
                {involvedPages.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.path}
                      className="transition-all duration-300 ease-linear hover:text-[#298DED] text-lg font-primary"
                    >
                      {item.page}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="h-[1px] w-full bg-[#DBD6CF]"></div>

          {/* Copyright */}
          <div className="py-9 text-center text-lg font-primary">
            <p>© Copyright 2025, All Rights Reserved by Mthemeus</p>
          </div>
        </div>
      </MaxWidthWrapper>
      {/* Gradient Backgrounds */}
      <div className="orange-gradient-2 absolute -top-[290px] right-[90px] -z-[1] h-[406px] w-[406px] -rotate-[58deg] rounded-full"></div>
      <div className="orange-gradient-1 absolute -right-[200px] -top-[205px] -z-[1] h-[451px] w-[451px] -rotate-[58deg] rounded-full"></div>
    </footer>
  );
};

export default Footer;
