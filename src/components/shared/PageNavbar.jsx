import { ChevronRight } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Link } from "react-router-dom";

const PageNavbar = ({ pages, page }) => {
  return (
    <section className="lg:py-25 py-5 mb-20 bg-secondary rounded-b-[30px]">
      <MaxWidthWrapper>
        <h1 className="text-[48px] flex justify-center font-semibold lg:font-bold text-primary font-secondary sm:text-[60px] lg:text-[120px] lg:-mt-10">
          {pages}
        </h1>
        <div className="flex justify-center text-lg font-semibold font-primary mt-5 mb-5 gap-3">
          <Link to="/" className="hover:text-red-500">
            Home
          </Link>{" "}
          <ChevronRight /> <h2 className="text-red-500">{page}</h2>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
export default PageNavbar;
