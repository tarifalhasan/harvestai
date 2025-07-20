import BlogCard from "../components/cards/BlogCard";

import BlogSidebar from "../components/shared/BlogSidebar";
import MaxWidthWrapper from "../components/shared/MaxWidthWrapper";
import PageNavbar from "../components/shared/PageNavbar";
import Pagination from "../components/shared/Pagination";
import { blogs } from "../utils/constants";

const Blog = () => {
  return (
    <>
      <PageNavbar pages="Our Blog" page="Our Blog" />
      <section className="py-20 mb-30 xl:py-[120px]">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-[2fr_1fr] lg:-mt-10">
            {/* Blog Posts */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:-mt-5">
              {blogs.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-28 h-fit">
              <BlogSidebar />
            </div>
          </div>
          {/* Pagination */}
          <div className="mt-10 flex justify-center">
            <Pagination />
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default Blog;
