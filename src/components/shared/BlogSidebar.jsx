import { categories, recentPosts, tags } from "../../utils/constants";
import SearchIcon from "../../assets/icons/search.svg";
import CalenderIcon from "../../assets/icons/calender.svg";
import { Link } from "react-router-dom";
import Button from "./Button";

const BlogSidebar = () => {
  return (
    <aside className="flex flex-col gap-y-[30px]">
      {/* Search */}
      <div>
        <form className="relative h-[60px]">
          <input
            type="search"
            name="sidebar-search"
            placeholder="Type to search..."
            className="h-full w-full rounded-[50px] border border-[#E1E1E1] bg-white py-[15px] pl-16 pr-8 text-lg outline-none transition-all focus:border-colorOrangyRed"
          />
          <button type="submit" className="absolute left-[30px] top-0 h-full">
            <img src={SearchIcon} alt="search" width="20" height="20" />
          </button>
        </form>
      </div>

      {/* Blog Categories */}
      <div className="rounded-[10px] border border-[#EAEDF0] p-8">
        <div className="relative mb-[30px] inline-block pb-[10px] text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black font-primary">
          Blog Categories
        </div>
        <ul>
          {categories.map((category, index) => (
            <li key={index} className="mb-6 last:mb-0">
              <Link
                to="#"
                className="text-black hover:text-red-500 font-primary text-lg"
              >
                {category.name} ({category.count})
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="rounded-[10px] border border-[#EAEDF0] p-8">
        <div className="relative mb-[30px] inline-block pb-[10px] text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black font-primary">
          Recent Posts
        </div>
        <ul className="flex flex-col gap-y-6">
          {recentPosts.map((post, index) => (
            <li
              key={index}
              className="group flex flex-col items-center gap-x-4 gap-y-4 sm:flex-row"
            >
              <Link
                to="#"
                className="inline-block h-[150px] w-full overflow-hidden rounded-[5px] sm:h-[100px] sm:w-[150px]"
              >
                <img
                  src={post.image}
                  alt=""
                  className="h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105"
                />
              </Link>
              <div className="flex w-full flex-col gap-y-3 sm:w-auto sm:flex-1">
                <Link
                  to="#"
                  className="flex items-center gap-[10px] text-sm hover:text-colorOrangyRed"
                >
                  <div className="h-6 w-6">
                    <img
                      src={CalenderIcon}
                      alt="calendar"
                      className="h-full w-full object-cover text-primary font-primary"
                    />
                  </div>
                  {post.date}
                </Link>
                <Link
                  to="#"
                  className="text-base font-bold hover:text-red-500 text-primary tracking-tight font-primary"
                >
                  {post.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="rounded-[10px] border border-[#EAEDF0] p-8">
        <div className="relative mb-[30px] inline-block pb-[10px] text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black">
          Tags
        </div>
        <ul className="flex flex-wrap gap-x-2 gap-y-4">
          {tags.map((tag, index) => (
            <li key={index}>
              <Link
                to="#"
                className="inline-block rounded-[55px] bg-black/5 px-5 py-1 hover:bg-red-500 transition-colors duration-300 hover:text-white font-medium"
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Subscribe */}
      <div className="rounded-[10px] border border-[#EAEDF0] p-8">
        <div className="relative mb-[30px] inline-block pb-[10px] text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black">
          Subscribe
        </div>
        <p className="mb-3">
          Subscribe to our newsletter and get the latest news updates lifetime
        </p>
        <form className="flex flex-col">
          <input
            type="email"
            name="sidebar-newsletter"
            placeholder="Enter your email address"
            className="h-[60px] w-full rounded-[50px] border border-red-500 bg-transparent px-10 py-[15px] text-lg outline-none transition-all placeholder:text-black focus:border-colorOrangyRed"
          />
          <Link to="#" className="mt-5 ">
            <Button className="sm:px-25 py-4 bg-black text-white px-20 sm:w-full ">
              Subscribe Now
            </Button>
          </Link>
        </form>
      </div>
    </aside>
  );
};
export default BlogSidebar;
