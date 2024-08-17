import Headline from "../headline/headline";
import ProjectCard from "../projectCard/projectCard";
import "./project.css"
const Project = () => {
  return (
    <section id="#project" className="project-section">
      <Headline
        title="My Projects"
        description=" Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus"
        center
      />

      <div className="tab-wrapper">
      <button style={{width:'auto'}} className="btn secondary">All</button>
      <button className="btn secondary">UI/UX</button>
      <button className="btn primary">Web Design</button>
      <button className="btn secondary">App Design</button>
      <button className="btn secondary">Graphic Design</button>
      </div>

      <div className="project-card-wrapper">
        <ProjectCard/>
      </div>
    </section>
  );
};

export default Project;
