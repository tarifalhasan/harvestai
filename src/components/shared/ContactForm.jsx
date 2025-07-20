import Button from "./Button";
import { InputField } from "./InputField";

const ContactForm = () => {
  return (
    <div className="order-1 block rounded-lg bg-white px-[30px] py-[50px] shadow-[0_4px_60px_0_rgba(0,0,0,0.1)] md:order-2">
      <form className="flex flex-col gap-y-5">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <InputField
            label="Enter your name"
            id="contact-name"
            required
            placeholder="Adam Smith"
          />
          <InputField
            label="Email address"
            id="contact-email"
            type="email"
            required
            placeholder="example@gmail.com"
          />
        </div>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <InputField
            label="Phone number"
            id="contact-phone"
            type="tel"
            required
            placeholder="+880-1345-922210"
          />
          <InputField
            label="Company"
            id="contact-company"
            placeholder="EX Facebook"
          />
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="flex flex-col gap-y-[10px]">
            <label
              htmlFor="contact-message"
              className="text-lg font-bold leading-[1.6]"
            >
              Message <b className="text-red-500">*</b>
            </label>
            <textarea
              id="contact-message"
              className="min-h-[180px] rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 placeholder:font-bold focus:border-red-500"
              placeholder="Write your message here..."
            />
          </div>
        </div>
        <div>
          <Button
            type="submit"
            className="button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-red-500  hover:text-white"
          >
            Send your message
          </Button>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
