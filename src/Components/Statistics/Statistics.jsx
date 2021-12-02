import React from 'react';
import { Paper, Grid, Card } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import proyects from '../img/statistics_proyects.jpg';
import donation from '../img/statistics_donation.jpg';
import colaborators from '../img/statistics_colaborators.png';
import Styles from './Statistics.module.css';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Statistics() {
    return (
        <div>
            <Grid 
              container 
              spacing={4}
              direction="row"
              justifyContent="center"
              alignItems="center">
                <Grid item xs={3}> 
                <Card border={2}>
                    <Item>
                    <img className={Styles.img} src={proyects} alt="statistics_proyects" />
                    <h3>1</h3>
                    <p>Cantidad de proyectos realidos 100% finalizados y vamos por mas</p>
                    </Item>
                </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card border={2}>
                    <Item>
                    <img className={Styles.img} src={donation} alt="statistics_donation" />
                    <h3>7</h3>
                    <p>Cantidad de donaciones recibidas y distribuidas, Muchas Gracias!!!</p>
                    </Item>
                    </Card> 
                </Grid>
                <Grid item xs={3}>
                <Card border={2}>
                    <Item>
                    <img className={Styles.img} src={colaborators} alt="statistics_colaborators" />
                    <h3>7</h3>
                    <p>Cantidad de colaboradores y miembros que nos ayudan a ayudar</p>
                    </Item>
                </Card> 
                </Grid>
            </Grid>
        </div>
    )
}
