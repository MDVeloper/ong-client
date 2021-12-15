import React from 'react';
import { Paper, Grid, Card } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import qdonations from '../img/solidarity.png';
import members from '../img/people.png';
import donations from '../img/piggy-bank.png';
import projectDone from '../img/briefing.png';
import projectCurso from '../img/project-management.png';
import Styles from './Statistics.module.css';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUsers } from "../../Store/Actions/actionsStatistics";
import { getAllTransactions } from '../../Store/Actions/actionDonations';
import { getProject } from '../../Store/Actions/actionGetProjects';
import axios from 'axios';
import { useState } from 'react';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Statistics() {
    const allUsers = useSelector(state => state.statistics.users);
    const allDonations = useSelector(state => state.donations.allTransactions);
    const allProjects = useSelector(state => state.project.projects);
    const dispatch = useDispatch();
    const [dolar, setDolar] = useState(0)


    let allDonationsAmount = allDonations.reduce((acc, obj) => {
        if (obj.paymentMethod === "PayPal") {
            return acc + (Number(obj.amount) * dolar);
        }
        return acc + Number(obj.amount);
    }, 0)



    useEffect(async () => {
        dispatch(getAllUsers())
        dispatch(getAllTransactions())
        dispatch(getProject())
        const dolarNow = await axios.get('https://api.bluelytics.com.ar/v2/latest');
        setDolar(dolarNow.data.blue.value_avg)
    }, [])
    console.log(dolar)
    return (
        <div className={Styles.desaparecer}>
            <Grid
                container
                mt={1}
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid item xs={2}>
                    <Card border={2}>
                        <Item>
                            <img className={Styles.img} src={members} alt="statistics_proyects" />
                            <h1 className={Styles.h1}>{allUsers.length}</h1>
                            <p className={Styles.p}>Miembros de la comunidad</p>
                        </Item>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card border={2}>
                        <Item>
                            <img className={Styles.img} src={donations} alt="statistics_proyects" />
                            <h1 className={Styles.h1}>${allDonationsAmount}</h1>
                            <p className={Styles.p}>Toda la ayuda monetaria</p>
                        </Item>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card border={2}>
                        <Item>
                            <img className={Styles.img} src={qdonations} alt="statistics_proyects" />
                            <h1 className={Styles.h1}>{allDonations.filter(d => d.status === 'Approved').length}</h1>
                            <p className={Styles.p}>Cantidad de donaciones</p>
                            
                        </Item>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card border={2}>
                        <Item>
                            <img className={Styles.img} src={projectDone} alt="statistics_proyects" />
                            <h1 className={Styles.h1}>{allProjects.filter(p => p.status === "Approved").length}</h1>
                            <p className={Styles.p}>Proyectos terminados</p>
                            <p className={Styles.hide}>Filler</p>
                        </Item>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card border={2}>
                        <Item>
                            <img className={Styles.img} src={projectCurso} alt="statistics_proyects" />
                            <h1 className={Styles.h1}>{allProjects.filter(p => p.status === "InProgress").length}</h1>
                            <p className={Styles.p}>Proyectos en curso</p>
                            <p className={Styles.hide}>Filler</p>
                        </Item>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
