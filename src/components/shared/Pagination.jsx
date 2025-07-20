import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <div className="mt-10 flex justify-center">
      <ul className="flex gap-x-[15px] relative">
        {/* Prev Button */}
        <li>
          <Link
            to="#"
            className="group relative flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-lg font-bold transition-all duration-300 hover:bg-black hover:text-white active:bg-black"
          >
            <ChevronLeft />
          </Link>
        </li>

        {/* Page Numbers */}
        {[1, 2, 3].map((page) => (
          <li key={page}>
            <Link
              to="#"
              className={`group font-extrabold flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-xl transition-all duration-300 hover:bg-black hover:text-white ${
                page === 1 ? "active:bg-black active:text-white" : ""
              }`}
            >
              {page}
            </Link>
          </li>
        ))}

        {/* Next Button */}
        <li>
          <Link
            to="#s"
            className="group relative flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-lg font-bold transition-all duration-300 hover:bg-black hover:text-white"
          >
            <ChevronRight />
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Pagination;
