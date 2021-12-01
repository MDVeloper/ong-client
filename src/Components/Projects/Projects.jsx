import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Styles from "./Projects.module.css";

export default function Projects(props) {
  let projects = useSelector((state) => state.project.projects);

  return (
    <div>

      <div>
        <p
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginLeft: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Link
            style={{ marginRight: ".3rem", color: "#62A3F7" }}
            to="/"
          >
            Menu principal
          </Link>
          {">"} Projectos
        </p>
      </div>

      <div className={Styles.projectsContainer}>
        <h1>Conoce nuestros proyectos</h1>

        <h3>
          ¡Conoce lo que estamos logrando gracias al apoyo de personas como vos!
        </h3>

        {projects.length > 0 ? (
          projects.map((project) => (
            <div
              style={{ backgroundImage: `url(${project.img})` }}
              className={Styles.cardContainer}
              key={project.id}
            >
              <h2>{project.nameProject}</h2>
              <h4>{project.description}</h4>
              <Link to={`/project/${project.id}`}>
                <button>Ver mas...</button>
              </Link>
            </div>
          ))
        ) : (
          <h2>No hay projectos</h2>
        )}
      </div>
    </div>
  );
}
