import { Link } from "react-router-dom";

const TeamCard = ({ member }) => {
  return (
    <li className=" rounded-[20px] bg-secondary p-5">
      <div className="lg:h-[400px] w-full overflow-hidden rounded-[20px] xxl:h-[400px]">
        <img
          src={member.image}
          alt={member.name}
          width="376"
          height="400"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-5">
        <Link
          to={""}
          className="font-secondary text-[26px] leading-[1.33] text-2xl xxl:text-[30px] font-bold hover:text-red-500 transition-colors duration-300"
          href="/team-details"
        >
          {member.name}
        </Link>
        <div className="mt-3 flex flex-col justify-between gap-3 xxl:flex-row xxl:flex-wrap xxl:items-center">
          <span className="text-[21px] text-primary font-primary">
            {member.designation}
          </span>
          <ul className="mt-auto flex gap-x-[15px]">
            {member.socials.map((social, index) => (
              <li key={index}>
                <Link
                  rel="noopener noreferrer"
                  className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black hover:bg-red-500 transition-colors duration-300"
                  to={social.link}
                >
                  <img
                    src={social.iconWhite}
                    alt={social.name}
                    width="14"
                    height="14"
                    className="opacity-100 group-hover:opacity-0"
                  />
                  <img
                    src={social.iconBlack}
                    alt={social.name}
                    width="14"
                    height="14"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default TeamCard;
