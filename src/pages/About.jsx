import PageNavbar from "../components/shared/PageNavbar";

import CoreValuesSection from "../components/sections/CoreValuesSection";
import AboutClientSection from "../components/sections/AboutClientSection";
import TeamSection from "../components/sections/TeamSection";
import AboutContact from "../components/sections/AboutContact";
const About = () => {
  return (
    <section>
      <PageNavbar pages="About Us" page="About" />
      <AboutClientSection />
      <CoreValuesSection />
      <TeamSection />
      <AboutContact />
    </section>
  );
};
export default About;
