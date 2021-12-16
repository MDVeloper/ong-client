import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"
import {BsPencilSquare} from "react-icons/bs"
import jwt_decode from "jwt-decode"

import Styles from "./CursosDetalle.module.css"

export default function CursosDetalle(props) {
  
  let id = props.match.params.id;

  const cursos = useSelector((state) => state.articles.categories);

  let curso = cursos.find((data) => data.id.toString() === id);



  return (
    <div className={Styles.componentContainerFromNewsDetail}>
      {curso 
      &&
      <div className={Styles.containerDetailNews}>

          {jwt_decode(localStorage.getItem("token")).privilege === "Admin" && (
            <Link
              className={Styles.containerEditIcon}
              to={`/backoffice/form/${id}`}
            >
              <p>Editar</p>
              <BsPencilSquare className={Styles.editIcon} />
            </Link>
          )}

          <h1>{curso.title}</h1>

          <div className={Styles.containerImg}>
            <img src={`${curso.img}`} alt="Imagen del proyecto" />
          </div>

          <div style={{width:"100%", wordWrap:"break-word"}}>
            <h3>{curso.description.replace(/<[^>]+>/g, '')}</h3>
          </div>
      </div>
}
    </div>
  );
}
