import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"

import Styles from "./NewsDetail.module.css"

export default function NewsDetail(props) {
  let id = props.match.params.id;

  let newss = useSelector((state) => state.new.news);

  let news = newss.find((news) => news.id.toString() === id);

  return (
    <div>
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
        <Link style={{marginLeft: ".5rem", marginRight: ".5rem", color: "#62A3F7" }} to="/news">
          Noticias
        </Link>
        {">"} Detalle de la noticia
      </p>
      
     <div className={Styles.containerDetailNews}>
        <h1>{news.nameNews}</h1>
        <h3>{news.longDescription}</h3>
     </div>
    </div>
  );
}
