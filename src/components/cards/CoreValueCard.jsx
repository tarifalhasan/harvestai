const CoreValueCard = ({ icon, title, description }) => {
  return (
    <li className="relative sm:pt-6 lg:pt-10 after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-[#FF5630] after:transition-all after:duration-300 xxl:hover:after:scale-x-100">
      <div className="mb-3 flex items-center gap-x-3 md:mb-6">
        <div className="h-[30px] w-[30px]">
          <img src={icon} alt={title} width="30" height="30" />
        </div>
        <h4 className="flex-1 text-white text-[30px] font-bold font-secondary tracking-tight">
          {title}
        </h4>
      </div>
      <div className="mx-auto lg:max-w-[300px]">
        <p className="sm:text-lg text-white lg:text-[21px] text-xl font-primary">
          {description}
        </p>{" "}
      </div>
    </li>
  );
};

export default CoreValueCard;
