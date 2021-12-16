import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
import jwt_decode from "jwt-decode"
import {BsPencilSquare} from "react-icons/bs"


import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import Fab from '@mui/material/Fab';


import {actionVoteCount} from "../../../Store/Actions/actionVoteCount"
import {saveDetailCurrent} from "../../../Store/Actions/actionArticles"
import { getProject } from "../../../Store/Actions/actionGetProjects";
import Styles from "./ProjectDetail.module.css"




export default function ProjectsDetail(props) {


  // Logica para mostrar el detalle del proyecto
  let id = props.match.params.id;

  let projects = useSelector((state) => state.project.projects);

  let project = projects.find((project) => project.id.toString() === id);

  if (!localStorage.getItem("token")) {
    alert("Debes ingresar a tu cuenta para votar proyectos")

    window.location.href = '/login'
  }
  
  useEffect(() => {
    
  },[])



  // Logica para votar proyecto
  let [vote, setVote] = useState({
    vote2 : true,
    id: id
  })


  let dispatch = useDispatch()

  dispatch(saveDetailCurrent(project))

  const handlerVote = async () => {

    if (!localStorage.getItem("token")) {
      alert("Debes ingresar a tu cuenta para votar proyectos")

      window.location.href = '/login'
    }
    else {
      if(vote.vote2 === true) {
        setVote({
          ...vote,
          vote2 : false
        })
      }
      else {
        setVote({
          ...vote,
          vote2 : true
        })
      }
  
      dispatch(actionVoteCount(vote))
    }

  }

  let auxEffect = useSelector(state => state.voteCount.vote)

  useEffect(() => {
      dispatch(getProject())
  },[auxEffect])

  
  return (
    <div className={Styles.componentContainerFromProjectDetail}>
      {
        project 
        && 
        <div className={Styles.containerDetailProject}>
          
          <div className={Styles.containerIcons}>
            {
              project.status  === "InProgress"
              ?
              vote.vote2 === true
              ?
              <AiOutlineHeart onClick={handlerVote}  className={Styles.heart} style={{color:"#FFBF69"}}/>
              :
              <AiFillHeart onClick={handlerVote}  color="red" className={Styles.heart}/>
              :
              null
            }
          

            {
              jwt_decode(localStorage.getItem("token")).privilege === "Admin" 
              &&
              <Link  className={Styles.containerEditIcon} to={`/backoffice/form/${id}`}>
                <p>Editar</p>
                <BsPencilSquare className={Styles.editIcon}/>
              </Link>
            }
          </div>

          <h1>{project.title}</h1>

          <div className={Styles.containerImg}>
            <img src={project.img} alt="imagen del proyecto" />
          </div>

          <div style={{width:"100%", wordWrap:"break-word"}}>
            <h3>{project.description.replace(/<[^>]+>/g, '')}</h3>
          </div>

          <h2 style={{color:"#fff"}}>Cantidad de votos: {project.voteCount}</h2>
          
          <div>
            <h4 className={Styles.status}>{project.status === "Approved" ? "Estado: Aprobado" : project.status === "InProgress" ? "Estado: En proceso" : "Estado: Pausado" }</h4>
          </div>


          <Fab className={Styles.btnFooter} aria-label="add">
            <Link style={{color:"#000"}} to={`/donaciones`}>
                Donar
            </Link>
          </Fab>
        </div>
      }
      

    </div>
  );
}


