import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Styles from "./Projects.module.css";




export default function Projects(props) {

  let projects = useSelector((state) => state.project.projects);

  // Paginacion
  // Estados de la paginacion
  let [currentPage, setCurrentPage] = useState(1);
  let [itemForPage, setItemForPage] = useState(1);

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
  for (let i = 1; i <= Math.ceil(projects.length / itemForPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemForPage;
  const indexOfFirstItem = indexOfLastItem - itemForPage;
  const currentItems = projects.slice(indexOfFirstItem, indexOfLastItem);

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
    <>
      <div>
        <p
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginLeft: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Link style={{ marginRight: ".3rem", color: "#62A3F7" }} to="/">
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

        {currentItems.length > 0 ? (
          currentItems.map((project) => (
            <div
              style={{ backgroundImage: `url(${project.img})` }}
              className={Styles.cardContainer}
              key={project.id}
            >
              <h2>{project.nameProject}</h2>
              <h4>{project.description}</h4>
              <Link to={`/proyectos/${project.id}`}>
                <button>Ver mas...</button>
              </Link>
            </div>
          ))
        ) : (
          <h2>No hay projectos</h2>
        )}


        <div >
          <ul className={Styles.pageNumbers}>
            <li
              className={currentPage === pages[0] ? null : Styles.buttonPrevNext}
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

    </>
  );
}
