import { Button } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Styles from "./News.module.css";

export default function News(props) {
  // Datos de los proyectos
  let news = useSelector((state) => state.new.news);

  // Paginacion
  // Estados de la paginacion
  let [currentPage, setCurrentPage] = useState(1);
  let [itemForPage, setItemForPage] = useState(6);

  let [pageNumberLimit, setpageNumberLimit] = useState(5);
  let [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  let [minPagaNumberLimit, setminPagaNumberLimit] = useState(0);

  // manejadores de los eventos de los clicks
  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  const handleClickPrev = () => {
    if (!(currentPage === pages[0])) {
      setCurrentPage(currentPage - 1);

      if ((currentPage - 1) % pageNumberLimit === 0) {
        setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setminPagaNumberLimit(minPagaNumberLimit - pageNumberLimit);
      }
    }
  };

  const handleClickNext = () => {
    if (!(currentPage === pages[pages.length - 1])) {
      setCurrentPage(currentPage + 1);

      if (currentPage + 1 > maxPageNumberLimit) {
        setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setminPagaNumberLimit(minPagaNumberLimit + pageNumberLimit);
      }
    }
  };

  // seteo de la cantiadad de paginas e items que se mostraran
  let pages = [];
  for (let i = 1; i <= Math.ceil(news.length / itemForPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemForPage;
  const indexOfFirstItem = indexOfLastItem - itemForPage;
  const currentItems = news.slice(indexOfFirstItem, indexOfLastItem);

  // renderizado de los numeros de las paginas
  const renderPageNumebers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPagaNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? Styles.active : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  let pagesDecrementBtn = null;
  if (minPagaNumberLimit >= 1) {
    pagesDecrementBtn = <li onClick={handleClickPrev}>&hellip;</li>;
  }

  let pagesIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pagesIncrementBtn = <li onClick={handleClickNext}>&hellip;</li>;
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.newsContainer}>
        <h1>Noticias</h1>

        <h3>Enterate sobre los ultimos temas de interes sobre la ONG</h3>

        <div className={Styles.cardsNewsContainer}>
          {currentItems.length > 0 ? (
            currentItems.map((news) => (
              <div>
                <Link to={`/noticias/${news.id}`}>
                  <div className={Styles.cardContainer} key={news.id}>
                      <div className={Styles.containerImg}>
                        <img
                          className={Styles.imgFromCard}
                          src={news.img}
                          alt=""
                        />
                      </div>

                      <div className={Styles.containerTitleDescriptionFromNew}>
                        <h2>{news.title}</h2>

                        <h4>
                          {news.description
                            .substr(0, 200)
                            .replace(/<[^>]+>/g, "")}
                          ...
                        </h4>

                        <h5 style={{color:"#000"}}>{news.createdAt.slice(0, 10)}</h5>
                      </div>

                      <div className={Styles.viewMoreButton}>
                        <Button
                          variant="outlined"
                          style={{
                            color: "#2EC4B6",
                            borderColor: "#2EC4B6",
                            margin: ".2rem .5rem 0 .5rem",
                            fontSize: ".8rem",
                          }}
                        >
                          Ver mas...
                        </Button>
                      </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <h2>No hay noticias</h2>
          )}
        </div>

        <div className={Styles.pagedStyle}>
          <ul className={Styles.pageNumbers}>
            <li
              className={
                currentPage === pages[0] ? null : Styles.buttonPrevNext
              }
              onClick={handleClickPrev}
            >
              Prev
            </li>
            {pagesDecrementBtn}
            {renderPageNumebers}
            {pagesIncrementBtn}
            <li
              className={
                currentPage === pages[pages.length - 1]
                  ? null
                  : Styles.buttonPrevNext
              }
              onClick={handleClickNext}
            >
              Next
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
