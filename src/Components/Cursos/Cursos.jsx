import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../Store/Actions/actionArticles';
import axios from 'axios';
import Styles from "../News/News.module.css";
import { Button } from "@mui/material";
import jwt_decode from "jwt-decode"


export default function Curse({history}) {
    const dispatch = useDispatch();
    const allArt = useSelector((state) => state.articles.categories);
    const [send, setSend] = useState(false);
    const [idUser, setuserid] = useState("")
    const [form, setForm] = useState({
        userId: null, 
        courseId: null,
    })
    useEffect(() => {
        dispatch(getCategories("Course"))
    }, [])
    
    if (!localStorage.getItem("token")){
        history.push('/login')
    }
    
    if (localStorage.getItem("token") && idUser === ""){
        const data = localStorage.getItem("token")
        setuserid(jwt_decode(data))
        
    };

    function handleSubmit(){
       console.log(form)
        axios.post('/articles/asign',form)
        .then( responese => {
            setForm({})
            setSend(true);
            alert("suscripcion realizada con exito")
        }).catch(e => {
            console.log(e)
        })
    }
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
  for (let i = 1; i <= Math.ceil(allArt.length / itemForPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemForPage;
  const indexOfFirstItem = indexOfLastItem - itemForPage;
  const currentItems = allArt.slice(indexOfFirstItem, indexOfLastItem);

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
  
          <h1>Cursos</h1>
  
          <h3>
            Enterate sobre los cursos que ofrecemos
          </h3>
  
          <div className={Styles.cardsNewsContainer}>
            {currentItems.length > 0 ? (
              currentItems.map((cursos) => (
                <div
                  className={Styles.cardContainer}
                  key={cursos.id}
                >
                  <div className={Styles.containerImg}>
                    <img className={Styles.imgFromCard}  src={cursos.img} alt="" />
                  </div>

                  <div className={Styles.containerTitleDescriptionFromNew}>
                    <h2>{cursos.title}</h2>

                    <h4 >{cursos.description.substr(0,200)}...</h4>
                  </div>

                  <div className={Styles.viewMoreButton}>
                      <Button  onClick={() => handleSubmit(form.courseId = cursos.id, form.userId = idUser.id)} variant="outlined" style={{ color: "#2EC4B6", borderColor:"#2EC4B6", margin:".2rem .5rem 0 .5rem", fontSize:".8rem"}}>Suscribirse</Button>
                  </div>
                </div>
              ))
            ) : (
              <h2>No hay cursos vigentes!!!</h2>
            )}
          </div>

          <div className={Styles.pagedStyle} >
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
  
      </div>
    );
}