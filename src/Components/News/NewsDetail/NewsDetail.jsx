import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"
import {BsPencilSquare} from "react-icons/bs"
import jwt_decode from "jwt-decode"

import Styles from "./NewsDetail.module.css"

export default function NewsDetail(props) {
  let id = props.match.params.id;

  let newss = useSelector((state) => state.new.news);

  let news = newss.find((news) => news.id.toString() === id);



  return (
    <div className={Styles.componentContainerFromNewsDetail}>
      {news 
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

          <h1>{news.title}</h1>

          <div className={Styles.containerImg}>
            <img src={`${news.img}`} alt="Imagen del proyecto" />
          </div>

          <div style={{width:"100%", wordWrap:"break-word"}}>
            <h3>{news.description.replace(/<[^>]+>/g, '')}</h3>
          </div>
      </div>
}
    </div>
  );
}
