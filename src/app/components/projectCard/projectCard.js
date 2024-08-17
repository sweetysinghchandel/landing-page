// import React from 'react'
import Image from "next/image";
import webDesigns1 from "@/image/webDesigns1.png";
import webDesigns2 from "@/image/webDesigns2.png";
import "./projectCard.css";

function ProjectCard() {
  return (
    <div className="project-card-container marginY-50">
      <div className="project-image-container">
        <Image
          className="project-img1"
          src={webDesigns1}
          width={30}
          height={30}
          alt="Picture of the author"
        />
        <Image
          className="project-img2"
          src={webDesigns2}
          width={30}
          height={30}
          alt="Picture of the author"
        />
      </div>
      <div className="project-detail-container">
        <p className="project-title">Web Design</p>
        <p className="project-description">Aircalling Landing Page Design</p>
      </div>
    </div>
  );
}

export default ProjectCard;
