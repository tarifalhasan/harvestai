export const InputField = ({
  label,
  id,
  type = "text",
  required,
  placeholder,
}) => (
  <div className="flex flex-col gap-y-[10px]">
    <label
      htmlFor={id}
      className="text-lg font-bold leading-[1.6] font-primary"
    >
      {label} {required && <b className="text-red-500">*</b>}
    </label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-red-500 font-secondary text-xl"
    />
  </div>
);
