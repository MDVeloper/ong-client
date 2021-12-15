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
     <div className={Styles.containerDetailProject}>
        <h1>{project.title}</h1>

        <div className={Styles.containerImg}>
          <img src={project.img} alt="imagen del proyecto" />
        </div>

        <h3>{project.description.replace(/<[^>]+>/g, '')}</h3>
     </div>
    </div>
  );
}
