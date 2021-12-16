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


///tablas mui

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




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

const allTransactions = useSelector((state) => state.donations.allTransactions);

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: '#F3F3F3', display: 'flex', height: 600 } } className={style.userContainer}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
        className={style.containerButtonTabs}
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
          <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
          <Table sx={{ maxWidth: 1700, overflow: 'scroll'}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                
                <TableCell align="right">E-mail</TableCell>
                <TableCell align="right">Cantidad</TableCell>
                <TableCell align="right">Método de pago</TableCell>
                <TableCell align="right">Estado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allDonations.map((donations) => (
                <TableRow
                  key={donations.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {donations.id}
                  </TableCell>
                  <TableCell align="right" sx={{ maxWidth: 900, overflow: 'hidden'}} >{donations.email}</TableCell>
                  <TableCell align="right">{donations.date.slice(0, 10)}</TableCell>
                  <TableCell align="right">{donations.paymentMethod}</TableCell>
                  <TableCell align="right">{donations.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>





          // allDonations.map( t => {
          //   return (
          //     <div>
          //       <h6>{t.id}</h6>
          //       <h6>{t.email}</h6>
          //       <h6>${t.amount}</h6>
          //       <h6>{t.date.slice(0, 10)}</h6>
          //       <h6>{t.paymentMethod}</h6>
          //       <h6>{t.status}</h6>
          //     </div>
          //   )
          // }) 
          :
          userinfo.donatios ?

          <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
          <Table sx={{ maxWidth: 1700, overflow: 'scroll'}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                
                <TableCell align="right">E-mail</TableCell>
                <TableCell align="right">Cantidad</TableCell>
                <TableCell align="right">Método de pago</TableCell>
                <TableCell align="right">Estado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allDonations.map((donations) => (
                <TableRow
                  key={donations.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {donations.id}
                  </TableCell>
                  <TableCell align="right" sx={{ maxWidth: 900, overflow: 'hidden'}} >{donations.email}</TableCell>
                  <TableCell align="right">{donations.date.slice(0, 10)}</TableCell>
                  <TableCell align="right">{donations.paymentMethod}</TableCell>
                  <TableCell align="right">{donations.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

           :
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
          <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
      <Table sx={{ maxWidth: 1700, overflow: 'scroll'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Título</TableCell>
            
            <TableCell align="right">Descripción</TableCell>
            <TableCell align="right">Categoría</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Modificar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project) => (
            <TableRow
              key={project.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" >
                {project.title}
              </TableCell>
              <TableCell align="right" sx={{ maxWidth: 900, overflow: 'hidden'}} className={style.wrapper}>{project.description.replace(/<[^>]+>/g, '').substr(0, 200)}</TableCell>
              <TableCell align="right">{project.category}</TableCell>
              <TableCell align="right">{project.status}</TableCell>
              <TableCell align="right"><Link to={`/backoffice/form/${project.id}`}>Editar proyecto</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

                  : <p>Para votar por los proyectos que mas te gusten haciendo click <a href='/proyectos'>aquí</a></p>

        }
        

      </TabPanel>
      <TabPanel value={value} index={2}>
        <h2>Toda la información de los cursos</h2>
        {
          userinfo.privilege === "Admin"? 
          <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
          <Table sx={{ maxWidth: 1700, overflow: 'scroll'}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                
                <TableCell align="right">Título</TableCell>
                <TableCell align="right">Descripción</TableCell>
                <TableCell align="right">Modificar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allArt.map((c) => (
                <TableRow
                  key={c.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                      {c.id}
                  </TableCell>
                  <TableCell align="right" sx={{ maxWidth: 900, overflow: 'hidden'}} >{c.title}</TableCell>
                  <TableCell align="right" className={style.wrapper}>{c.description.replace(/<[^>]+>/g, '').substr(0, 200)}</TableCell>
                  <TableCell align="right"><Link to={`/backoffice/form/${c.id}`}>Editar curso</Link></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

          :
          userinfo.articles? 

          <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
          <Table sx={{ maxWidth: 1700, overflow: 'scroll'}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                
                <TableCell align="right">Título</TableCell>
                <TableCell align="right">Descripción</TableCell>
                <TableCell align="right">Modificar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userinfo.articles.map((t) => (
                <TableRow
                  key={t.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                      {t.id}
                  </TableCell>
                  <TableCell align="right" sx={{ maxWidth: 900, overflow: 'hidden'}} >{t.title}</TableCell>
                  <TableCell align="right" className={style.wrapper}>{t.description.replace(/<[^>]+>/g, '').substr(0, 200)}</TableCell>
                  <TableCell align="right"><Link to={`/backoffice/form/${t.id}`}>Editar curso</Link></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
            : <h4>¿Aún no te inscribiste a ningun curso? Conocé todos los que hay disponibles <a href='/curse'>aquí</a>  </h4>


        }


      </TabPanel>

       <TabPanel value={value} index={3}>
            <h2>Editar y crear noticias </h2>
            {
              <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
              <Table sx={{ maxWidth: 1700, overflow: 'scroll'}} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>id</TableCell>
                    
                    <TableCell align="right">Título</TableCell>
                    <TableCell align="right">Descripción</TableCell>
                    <TableCell align="right">Modificar</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {news.map((t) => (
                    <TableRow
                      key={t.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                          {t.id}
                      </TableCell>
                      <TableCell align="right" sx={{ maxWidth: 900, overflow: 'hidden'}} >{t.title}</TableCell>
                      <TableCell align="right" className={style.wrapper}>{t.description.replace(/<[^>]+>/g, '').substr(0, 200)}</TableCell>
                      <TableCell align="right"><Link to={`/backoffice/form/${t.id}`}>Editar noticia</Link></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            
            }
       </TabPanel>
      
    </Box>
  );
}