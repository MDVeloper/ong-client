import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

import { useEffect } from 'react';
import style from "./UserPanel.module.css";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useState } from 'react';
import styles from "./UserPanel.module.css"
import { getProject } from "../../Store/Actions/actionGetProjects.js"
import { getAllTransactions } from '../../Store/Actions/actionDonations';
import { getCategories } from '../../Store/Actions/actionArticles';



function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({ history }) {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch()
  const [userinfo, setuserinfo] = useState("")
  const [userid, setuserid] = useState("")
  

  //ME TRAIGO LA INFO DE PROYECTOS PARA LA PARTE DEL ADMIN
  useEffect(() => {
    dispatch(getProject())
    }, [dispatch])

  let projects = useSelector((state) => state.project.projects);

  //----------------------------------------------------------

  //TODO LO QUE NECESITO DE LAS TRANSACCIONES PARA EL ADMIN
  useEffect(async () => {
    dispatch(getAllTransactions())
    }, [])

  const allDonations = useSelector(state => state.donations.allTransactions);

  //----------------------------------------------------------

  //LO QUE NECESITO PARA CURSOS

  const allArt = useSelector((state) => state.articles.categories);

  useEffect(() => {
    dispatch(getCategories("Course"))
    }, [])


  //-----------------------------------------------------------

  //LO QUE NECESITO PARA NOTICIAS

  let news = useSelector((state) => state.new.news);

  //-----------------------------------------------------------

  if (localStorage.getItem("token") && userid === ""){
      const data = localStorage.getItem("token")
      setuserid(jwt_decode(data))
  };

  const actinfo = () => {
      axios.get(`/users/detail?id=${userid.id}`)
      .then(response => setuserinfo(response.data))
  }

  if (userinfo === "" && userid.id){
      actinfo()
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const allTransactionsss = useSelector((state) => state.donations.allTransactions);

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: '#F3F3F3', display: 'flex', height: 500 } } className={style.userContainer}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Donaciones" {...a11yProps(0)} />
        <Tab label="Proyectos" {...a11yProps(1)} />
        <Tab label="Cursos" {...a11yProps(2)} />
        {userinfo.privilege === "Admin" ? 
        <Tab label="Noticias" {...a11yProps(3)} /> :
        console.log("No soy admin") }
      </Tabs>
      <TabPanel value={value} index={0}>
        <h2> Información de las donaciones </h2> 

        {
          userinfo.privilege === "Admin" ?
          allDonations.map( t => {
            return (
              <div>
                <h6>{t.id}</h6>
                <h6>{t.email}</h6>
                <h6>${t.amount}</h6>
                <h6>{t.date.slice(0, 10)}</h6>
                <h6>{t.paymentMethod}</h6>
                <h6>{t.status}</h6>
              </div>
            )
          }) :
          userinfo.donatios ? userinfo.donations.map(t => {
            return (
              <div key={t.id}>
                <p>Acá podrás ver un historial de tus donaciones hechas</p>
                <h6>{t.id}</h6>
                <h6>{t.email}</h6>
                <h6>${t.amount}</h6>
                <h6>{t.date.slice(0, 10)}</h6>
                <h6>{t.paymentMethod}</h6>
                <h6>{t.status}</h6>
              </div>
            )
          }) :
           <div>
             <p>Acá podrás ver un historial de tus donaciones hechas</p>
             <h4>De momento no has hecho ninguna donacion</h4>
           </div>
        }
      </TabPanel>
      <TabPanel value={value} index={1}> 

           <h2> Toda la información de los proyectos </h2>

        {
          userinfo.privilege === "Admin" ? 
          projects.map( p => {
            return(
              <div>

                <div className={styles.divContainerinfo}>
                  <h5>{p.id}</h5>
                </div>

                <div className={styles.divContainerinfo}>
                  <h5>{p.title}</h5>
                </div>

                <div className={styles.divContainerinfo}>
                  <h5 style={{color:"#000"}}>{p.img}</h5>
                </div>

                <div className={styles.divContainerinfo}>
                  <h5>{p.description}</h5>
                </div>
                
                <div className={styles.divContainerinfo}>
                  <h5>{p.category}</h5>
                </div>

                <div className={styles.divContainerinfo}>
                  <h5>{p.status}</h5>
                </div>

                <Link to={`/backoffice/form/${p.id}`}>Editar proyecto</Link>
              </div>
            )
          }) : <p>Para votar por los proyectos que mas te gusten haciendo click <a href='/proyectos'>aquí</a></p>

        }
        
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h2>Toda la información respectiva de los cursos</h2>
        {
          userinfo.privilege === "Admin"? 
          allArt.map( c => {
            return(
              <div >
                
                <div className={styles.divContainerinfo}>
                  <h5>{c.id}</h5>
                </div>

                <div className={styles.divContainerinfo}>
                  <h5>{c.title}</h5>
                </div>

                <div className={styles.divContainerinfo} >
                  <h5 style={{color:"#000"}}>{c.img}</h5>
                </div>

                <div className={styles.divContainerinfo}>
                  <h5>{c.description}</h5>
                </div>
                
                <div className={styles.divContainerinfo}>
                  <h5>{c.category}</h5>
                </div>


                <Link to={`/backoffice/form/${c.id}`}>Editar curso</Link>
              </div>
            )
          })
          :
          userinfo.articles? userinfo.articles.map(t => {
             return (
                 <div key={t.id} >
                    <div className={styles.divContainerinfo}>
                      <h5>{t.id}</h5>
                    </div>

                    <div className={styles.divContainerinfo}>
                      <h5>{t.title}</h5>
                    </div>

                    <div className={styles.divContainerinfo}>
                      <h5 style={{color:"#000"}}>{t.img}</h5>
                    </div>

                    <div className={styles.divContainerinfo}>
                      <h5>{t.description}</h5>
                    </div>
                  
                    <div className={styles.divContainerinfo}>
                      <h5>{t.category}</h5>
                    </div>

                 </div>
               )
             }) : <h4>¿Aún no te inscribiste a ningun curso? Conocé todos los que hay disponibles <a href='/curse'>aquí</a>  </h4>


        }


      </TabPanel>

       <TabPanel value={value} index={3}>
            <h2>Editar y crear noticias </h2>
            {
              news.map( n => {
                return(
                  <div>
                    <h5>{n.id}</h5>
                    <h5>{n.title}</h5>
                    <div style={{overflow:"hidden"}}>
                      <h5>{n.img}</h5>
                    </div>
                    <h5>{n.description}</h5>
                    <Link to={`/backoffice/form/${n.id}`}>Editar noticia</Link>
                  </div>

                )
              })
            }
       </TabPanel>
      
    </Box>
  );
}