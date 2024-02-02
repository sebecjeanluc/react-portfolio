import React from "react";
import projects from "../../assets/data/projects.json"
import { NavLink } from 'react-router-dom';


function ProjectGallery(){
  const projectsData = projects;
  // console.log(projectsData);
  return (
    <section className="section-picTop__wrapper">
      <img src="/reactPortfolio/src/assets/images/work/signature.png" alt="signature" />
        <div className="section-picTop__inner">
          <h3>PROJECT GALLERY</h3>
        </div>
        <div className="projectGallery__wrapper">
          <div className="projectGallery__inner">
            {projectsData.map(project=>(
              <div key={project.id} className="projectGallery-button__wrapper">
                <div className="projectGallery-item">
                {`# 0${project.id}`}
                </div>
                <button className="projectGallery-button" type="button" data-bs-toggle="collapse" data-bs-target={`#project0${project.id}`} aria-expanded="false" aria-controls={`project0${project.id}`}>
                  {project.name}
                </button>
                <div className="collapse projectGallery-content" id={`project0${project.id}`}>
                  <div className="projectGallery-content-item">
                    <img src={`${project.imageLink}`} className="card-img-top" alt="..." />
                    <div className="projectGallery-content-item">
                      {project.description}
                    </div>
                    <div>Deployed:
                      {project.link ? <a href={`${project.link}`}target="__blank"> LINK</a> : " N/A"}
                    </div>
                    <div>GITHUB:
                      {project.githubLink ? <a href={`${project.githubLink}`}target="__blank"> LINK</a> : " N/A"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="subSection__wrapper">
          <div className="contact-button__wrapper arrow-right">
            <button className="contact-button">
              <NavLink to='/reactPortfolio'>BACK TO HOME</NavLink>
            </button>
          </div>
        </div>
    </section>
  )
}
export default ProjectGallery;
