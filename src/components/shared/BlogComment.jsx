import BlogCommentManOne from "../../assets/images/blogcommentman.jpg";
import BlogCommentManTwo from "../../assets/images/blogcommentmantwo.webp";
import AnimatonVariants from "./AnimatonVariants";
import Button from "./Button";

const BlogComment = ({ blog }) => {
  return (
    <div className="">
      <div className="mb-6 text-[24px] font-extrabold font-primary">
        {blog.comments} comments on this post:
      </div>

      {/* Comments List */}
      <AnimatonVariants>
        <ul className="flex flex-col gap-y-[30px]">
          <li className="border-b border-[#EAEDF0] last:border-b-0">
            <div className="flex gap-x-5">
              <div className="h-[80px] w-[80px] overflow-hidden rounded-full">
                <img
                  src={BlogCommentManOne}
                  alt="Ricky Smith"
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex flex-1 flex-col gap-y-4">
                <div className="flex items-center justify-between gap-x-5">
                  <div className="flex flex-col gap-y-1">
                    <div className="text-lg font-primary font-extrabold">
                      Ricky Smith
                    </div>
                    <div className="text-sm font-primary text-primary">
                      June 14, 2024
                    </div>
                  </div>
                  <button className="transition-all duration-300 hover:text-red-500 font-extrabold font-primary cursor-pointer">
                    Reply
                  </button>
                </div>
                <p className="max-w-[616px] text-lg font-primary">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>

            {/* Reply */}
            <ul className="mt-[30px] flex flex-col pl-8 sm:pl-32">
              <li className="border-t border-[#EAEDF0] py-[30px]">
                <div className="flex gap-x-5">
                  <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
                    <img
                      src={BlogCommentManTwo}
                      alt="Joshua Jones"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-y-4">
                    <div className="flex items-center justify-between gap-x-5">
                      <div className="flex flex-col gap-y-1">
                        <div className="font-extrabold font-primary text-primary">
                          Joshua Jones
                        </div>
                        <div className="text-sm font-primary text-primary">
                          June 15, 2024
                        </div>
                      </div>
                      <button className="font-extrabold font-primary transition-all duration-300 hover:text-red-500 cursor-pointer">
                        Reply
                      </button>
                    </div>
                    <p className="max-w-[536px] text-lg font-primary">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </AnimatonVariants>
      <AnimatonVariants>
        <h2 className="text-2xl font-extrabold font-primary text-primary lg:mt-30 mt-10">
          Leave a comment:
        </h2>
        {/* Comment Form */}
        <div className="order-1 mt-12 block rounded-lg bg-white px-[30px] py-[50px] shadow-[0_4px_60px_0_rgba(0,0,0,0.1)] md:order-2">
          <form className="flex flex-col gap-y-5">
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <div className="flex flex-col gap-y-[10px]">
                <label
                  htmlFor="comment-name"
                  className="text-lg font-bold font-primary leading-[1.6]"
                >
                  Enter your name
                </label>
                <input
                  type="text"
                  name="comment-name"
                  id="comment-name"
                  placeholder="Adam Smith"
                  className="placeholder:[#7F8995] rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-semibold text-black outline-none transition-all focus:border-colorOrangyRed"
                />
              </div>
              <div className="flex flex-col gap-y-[10px]">
                <label
                  htmlFor="comment-email"
                  className="text-lg font-primary font-bold leading-[1.6]"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="comment-email"
                  id="comment-email"
                  placeholder="example@gmail.com"
                  className="placeholder:[#7F8995] rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-semibold text-black outline-none transition-all focus:border-colorOrangyRed"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col gap-y-[10px]">
                <label
                  htmlFor="comment-message"
                  className="text-lg font-bold leading-[1.6] font-primary"
                >
                  Message
                </label>
                <textarea
                  name="comment-message"
                  id="comment-message"
                  className="placeholder:[#7F8995] min-h-[180px] rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-semibold text-black outline-none transition-all focus:border-colorOrangyRed"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
            </div>
            <div>
              <Button className="bg-black py-4 text-white hover:text-white outline-none border-none rounded-[50px]">
                Send your message
              </Button>
            </div>
          </form>
        </div>
      </AnimatonVariants>
    </div>
  );
};
export default BlogComment;
