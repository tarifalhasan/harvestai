import { Link } from "react-router-dom";
import AnimatonVariants from "../shared/AnimatonVariants";

const BlogCard = ({ post }) => {
  return (
    <AnimatonVariants>
      <li className="group overflow-hidden rounded-[10px] bg-white shadow-md">
        <Link to={`/blog/${post.id}`} className="block overflow-hidden">
          <img
            src={post.image}
            alt={post.alt}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        <div className="p-5">
          <ul className="flex gap-9 text-sm text-primary mb-3 font-bold lg:text-lg font-primary">
            <li>{post.category}</li>
            <li className="list-disc">{post.date}</li>
          </ul>
          <h5 className="text-lg lg:text-[24px] font-secondary lg:tracking-tighter lg:leading-7 font-semibold hover:text-red-500 mb-2 cursor-pointer">
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </h5>
          <p className="text-gray-600 line-clamp-2 mb-4 text-lg font-primary">
            {post.excerpt}
          </p>
          <Link
            to={`/blog/${post.id}`}
            className="text-red-500 lg:text-lg  text-sm font-medium"
          >
            Read More
          </Link>
        </div>
      </li>
    </AnimatonVariants>
  );
};

export default BlogCard;
