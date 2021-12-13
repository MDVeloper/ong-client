import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"

import Styles from "./NewsDetail.module.css"

export default function NewsDetail(props) {
  let id = props.match.params.id;

  let newss = useSelector((state) => state.new.news);

  let news = newss.find((news) => news.id.toString() === id);

  console.log(news)

  return (
    <div className={Styles.componentContainerFromNewsDetail}>
      <div className={Styles.containerDetailNews}>
          <h1>{news.title}</h1>

          <div className={Styles.containerImg}>
            <img src={`${news.img}`} alt="Imagen del proyecto" />
          </div>

          <h3>{news.description}</h3>
      </div>

    </div>
  );
}
