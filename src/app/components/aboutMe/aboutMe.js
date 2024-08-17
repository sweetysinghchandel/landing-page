import Headline from "../headline/headline";
import ImageCard from "../imageCard/imageCard";
import "./aboutMe.css";
const { default: ProgressBar } = require("../progressbar/progressbar");
import ProfilePhoto2 from "@/image/profilePhoto2.png";

const AboutMe = () => {
  return (
    <section id="#about" className="about-me-section">
      <div className="my-photo-container">
        <ImageCard img={ProfilePhoto2} />
      </div>
      <div className="about-me-description">
        <Headline
          title="About Me"
          description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra"
        />
        <ProgressBar title="UX" growth="80%" />
        <ProgressBar title="Website Design" growth="70%" />
        <ProgressBar title="App Design" growth="90%" />
        <ProgressBar title="Graphic Design" growth="85%" />
      </div>
    </section>
  );
};

export default AboutMe;
