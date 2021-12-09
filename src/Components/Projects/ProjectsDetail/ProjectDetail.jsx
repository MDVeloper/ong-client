import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"

import Styles from "./ProjectDetail.module.css"

export default function ProjectsDetail(props) {
  let id = props.match.params.id;

  let projects = useSelector((state) => state.project.projects);

  let project = projects.find((project) => project.id.toString() === id);

  return (
    <div className={Styles.componentContainerFromProjectDetail}>
      <p
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: "1rem",
          marginBottom: "1rem",
        }}
      > 
        <Link style={{ marginRight: ".5rem", color: "#62A3F7" }} to="/">
          Menu principal
        </Link>
        {">"} 
        <Link style={{marginLeft: ".5rem", marginRight: ".5rem", color: "#62A3F7" }} to="/proyectos">
          Projectos
        </Link>
        {">"} Detalle de projecto
      </p>
      
     <div className={Styles.containerDetailProject}>
        <h1>{project.title}</h1>

        <div className={Styles.containerImg}>
          <img src={project.img} alt="imagen del proyecto" />
        </div>

        <h3>{project.description}</h3>
     </div>
    </div>
  );
}
