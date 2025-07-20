import { Link } from "react-router-dom";
import FacebookIcon from "../assets/icons/Facebook.svg";
import GoogleIcon from "../assets/icons/Google.svg";
import MaxWidthWrapper from "../components/shared/MaxWidthWrapper";
import Button from "../components/shared/Button";

const Login = () => {
  return (
    <section>
      <div className="lg:pt-20 pb-20 lg:mb-20 sm:mb-40  xl:pb-[200px] pt-15 mb-40 ">
        <MaxWidthWrapper>
          <div className="mx-auto max-w-[910px] text-center">
            <h1 className="mb-[50px] text-[48px] font-extrabold  font-secondary sm:text-[60px] lg:text-[120px] lg:leading-[120px]">
              Welcome back
            </h1>
            <div className="block rounded-lg  px-[30px] py-[50px] text-left shadow-[0_4px_60px_0_rgba(0,0,0,0.1)] sm:px-10">
              <form className="flex flex-col gap-y-5">
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col gap-y-[10px]">
                    <label
                      htmlFor="login-email"
                      className="text-lg font-extrabold leading-[1.6] text-primary font-primary"
                    >
                      Email address
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      id="login-email"
                      placeholder="example@gmail.com"
                      className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-red-500 placeholder:text-lg placeholder:font-extrabold"
                    />
                  </div>
                  <div className="flex flex-col gap-y-[10px]">
                    <label
                      htmlFor="login-password"
                      className="text-lg font-bold leading-[1.6] font-primary"
                    >
                      Enter Password
                    </label>
                    <input
                      required
                      type="password"
                      name="password"
                      id="login-password"
                      placeholder="............"
                      className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-red-500 placeholder:text-lg placeholder:font-extrabold"
                    />
                  </div>
                  <div className="flex flex-wrap justify-between gap-x-10 gap-y-4">
                    <div className="flex items-center gap-3">
                      <input
                        required
                        type="checkbox"
                        className="w-4 h-4 bg-red-500 border border-gray-300 rounded "
                      />
                      <label
                        htmlFor="login-check"
                        className="text-base leading-[1.6]"
                      >
                        Remember me
                      </label>
                    </div>
                    <Link
                      className="text-base hover:text-red-500 font-primary text-primary"
                      to="/reset-password"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <button type="submit" className="button mt-7">
                  <Button className=" bg-black py-4 text-white after:bg-red-500 hover:text-white border-2 rounded-[50px] px-28 font-primary sm:w-full">
                    {" "}
                    Sign in
                  </Button>
                </button>
              </form>
              <div className="relative z-[1] mb-14 mt-9 text-center font-bold before:absolute before:left-0 before:top-1/2 before:-z-[1] before:h-[1px] before:w-full before:-translate-y-1/2 before:bg-[#EAEDF0]">
                <span className="inline-block bg-white px-6 text-base font-extrabold font-primary">
                  Or
                </span>
              </div>
              <div className="flex flex-col gap-y-6">
                <Link
                  to="#"
                  className="button flex w-full justify-center gap-x-4 rounded-[50px] border-2 border-[#EAEDF0] bg-white py-4 hover:bg-slate-200 cursor-pointer font-bold tracking-tight text-lg font-primary"
                >
                  <span className="hidden h-6 w-6 sm:inline-block text-primary ">
                    <img
                      src={GoogleIcon}
                      alt="flat-color-icons-google"
                      width="24"
                      height="24"
                    />
                  </span>
                  Signup with Google
                </Link>
                <Link
                  to="#"
                  className="button flex w-full justify-center gap-x-4 rounded-[50px] border-2 border-[#EAEDF0] bg-white py-4 hover:bg-slate-200 cursor-pointer font-bold font-primary"
                >
                  <span className="hidden h-6 w-6 sm:inline-block">
                    <img
                      src={FacebookIcon}
                      alt="flat-color-icon-facebook"
                      width="24"
                      height="24"
                    />
                  </span>
                  Signup with Facebook
                </Link>
              </div>
              <div className="mt-10 text-center text-lg font-primary">
                Don't have an account? &nbsp;
                <Link
                  className="text-base font-semibold hover:text-red-500"
                  to="/signup"
                >
                  Sign Up here
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};
export default Login;
