import React, { Component } from "react";
import PROJECTS from "./data/projects";
import Project from "./Project";

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Kiemelt projektjeim</h2>
        {/* JS map fuggvenye vegigjar a PROJECTS tombon es mindegyik elemnel visszaterul egy diven belul a title
                    lasd: projects.js file */}
        {PROJECTS.map((PROJECT) => {
          return <Project project={PROJECT} key={PROJECT.id} />;
        })}
        
      </div>
    );
  }
}

export default Projects;
