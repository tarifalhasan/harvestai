import BlogOne from "../../assets/images/blog1.jpg";
import BlogInnerImage from "../../assets/images/blog-inner-image.jpg";
import LikeSvg from "../../assets/icons/like.svg";
import CommentSvg from "../../assets/icons/comment.svg";
import ShareSvg from "../../assets/icons/share.svg";
import DownloadSvg from "../../assets/icons/download.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatonVariants from "./AnimatonVariants";
import { blogs } from "../../utils/constants";
import BlogComment from "./BlogComment";
const BlogArticle = ({ id }) => {
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <p className="text-center">Blog not found</p>;
  return (
    <article className="overflow-hidden bg-white">
      <div className="mb-7 block overflow-hidden rounded-[10px]">
        <AnimatonVariants>
          <img
            src={blog.image}
            alt="blog-main-1"
            width={856}
            height={540}
            className="h-auto w-full scale-100 object-cover"
          />
        </AnimatonVariants>
      </div>
      <ul className="flex flex-wrap items-center gap-6 text-lg font-primary ">
        <li className="relative font-semibold after:absolute after:left-full after:top-1/2 after:h-[7px] after:w-[7px] after:-translate-y-1/2 after:translate-x-2 after:rounded-full after:bg-colorCodGray last:after:hidden">
          <Link className="hover:text-red-500" to="/blog/1">
            {blog.category}
          </Link>
        </li>
        <li className="relative font-semibold after:absolute after:left-full after:top-1/2 after:h-[7px] after:w-[7px] after:-translate-y-1/2 after:translate-x-2 after:rounded-full after:bg-colorCodGray last:after:hidden">
          <Link to="#" className="hover:text-red-500" href="/blog-details">
            {blog.date}
          </Link>
        </li>
      </ul>
      <h5 className="mb-3 mt-5 text-2xl font-secondary tracking-tighter font-bold">
        {blog.title}
      </h5>
      <p className="mb-7 last:mb-0 text-xl font-primary text-primary">
        {blog.excerpt}
      </p>
      <ul className="mb-7 flex flex-col gap-7 last:mb-0">
        {blog.content.aiPoints.map((item, index) => (
          <li key={index}>
            {item.isImage ? (
              <img
                src={item.imageSrc}
                alt={item.alt || "blog inner"}
                className="my-7 rounded"
              />
            ) : (
              <>
                <div className="font-semibold text-lg font-primary text-primary">
                  {item.title}
                </div>
                <p className="mb-7 last:mb-0 text-lg font-primary text-primary">
                  {item.desc}
                </p>
              </>
            )}
          </li>
        ))}
      </ul>
      <div className="font-semibold text-lg font-primary text-primary mb-2">
        Key Takeaways for Founders
      </div>
      <ul className="mb-7 last:mb-0">
        {blog.content.keyTakeaways.map((content, index) => (
          <li
            key={index}
            className="relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[5px] after:w-[5px] after:rounded-[50%] after:bg-black text-primary text-lg font-primary"
          >
            {content}
          </li>
        ))}
      </ul>
      <p className="mb-7 last:mb-0 text-lg font-primary text-primary">
        {blog.footerContent}
      </p>
      <p className="mb-7 last:mb-0 text-lg font-primary text-primary">
        Thanks for reading 🖤
      </p>
      <AnimatonVariants>
        <div className="flex justify-between text-lg font-medium">
          <div className="flex gap-7 cursor-pointer">
            <div className="flex items-center gap-2">
              <img src={LikeSvg} alt="" />
              <span>{blog.likes}</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={CommentSvg} alt="" />
              <span>{blog.comments}</span>
            </div>
          </div>
          <div className="flex gap-3 cursor-pointer">
            <div className="flex items-center gap-2">
              <img src={ShareSvg} alt="" />
            </div>
            <div className="flex items-center gap-2">
              <img src={DownloadSvg} alt="" />
            </div>
          </div>
        </div>
      </AnimatonVariants>
      <div className="my-[50px] h-[1px] w-full bg-[#EAEDF0]"></div>
      {/* prev next  */}
      <AnimatonVariants>
        <div className="flex flex-col justify-between md:flex-row md:gap-x-10 xl:gap-x-24 xxl:gap-x-[196px]">
          <Link class="group text-left" to="/blogdetails">
            <span class="inline-flex items-center gap-x-3 text-[21px] transition-all duration-300 group-hover:text-red-500 font-extrabold font-primary">
              <ChevronLeft />
              Previous post
            </span>
            <div className="lg:max-w-xl mx-auto">
              <p className="text-lg font-primary text-primary">
                Amazon testing AI tools to improve product descriptions: a
                game-changer
              </p>{" "}
            </div>
          </Link>
          <Link className="group text-right" to="/blog-details">
            <span className="inline-flex flex-row-reverse items-center gap-x-3 text-[21px] transition-all duration-300 group-hover:text-red-500 font-extrabold font-primary">
              <ChevronRight />
              Next post
            </span>
            <p className="text-lg font-primary text-primary">
              3 best AI businesses to make money with in 2024 everyone is
              buzzing
            </p>
          </Link>
        </div>
      </AnimatonVariants>
      <div className="mt-20">
        <BlogComment blog={blog} />
      </div>
    </article>
  );
};
export default BlogArticle;
