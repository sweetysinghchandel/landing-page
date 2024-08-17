import ImageCard from "../imageCard/imageCard";
import SocialLinks from "../socialLinks/socialLinks";
import './hero.css';
import ProfilePhoto from "@/image/profilePhoto.png";

function Hero() {
  return (
    <main className="hero-container">
      <div className="hero-detail-container">
        <p> Hi I am</p>
        <p className="hero-container-name"> Mohammad Umair</p>
        <h4 className="hero-title">UI & UX</h4>
        <h4 className="hero-title margin-left-150">Designer</h4>
        <p className="hero-description">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <button className="btn primary">Hire Me</button>
      </div>
      <div>
        <ImageCard  img={ProfilePhoto}/>
        <SocialLinks/>
      </div>
    </main>
  );
}
export default Hero;
