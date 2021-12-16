import React from "react";
import styles from "./Donation.module.css";
import Carousel from "../Carrusel/Carousel";
import { Typography } from "@mui/material";
import { initializeMercadopago } from "../MERCA/mercadopago";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import charityIMG from "../img/charity.jpg";
import { PayPalButton } from "react-paypal-button-v2";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode"
import mercadopagoLogo from '../img/mercadopago-logo.png';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


function Donation({ history }) {
  const [donationAmountPayPal, setDonationAmountPayPal] = useState(1);
  const [donationAmountMercadoPago, setDonationAmountMercadoPago] = useState(1);
  const [userinfo, setuserinfo] = useState("")
  const [userid, setuserid] = useState("")


  if (!localStorage.getItem("token")) {
    history.push('/login')
  }

  if (localStorage.getItem("token") && userid === "") {
    const data = localStorage.getItem("token")
    setuserid(jwt_decode(data))
  };

  const actinfo = () => {
    axios.get(`/users/detail?id=${userid.id}`)
      .then(response => setuserinfo(response.data))
  }

  if (userinfo === "" && userid.id) {
    actinfo()
  }
  const handleInputPayPal = function (e) {
    e.preventDefault();
    setDonationAmountPayPal(e.target.value)
  };

  const handleInputMercadoPago = function (e) {
    e.preventDefault();
    setDonationAmountMercadoPago(e.target.value)
  };

  const handleMp = async function () {
    const mp = {
      description: "Donation For CTL",
      price: donationAmountMercadoPago,
      quantity: 1,
      email: userinfo.email
    }
    console.log("ENTRO", mp)
    let { data } = await axios.post('mp/create_preference', mp);
    initializeMercadopago(data.id)
  }

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    borderTop: `1px solid ${theme.palette.divider}`,
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "0.5rem",
    backgroundColor: "transparent",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary {...props} />
  ))(({ theme }) => ({
    flexDirection: "row-reverse",
    justifyContent: "center",
    marginTop: "0.5rem",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  var detailProject = useSelector(state => state.articles.currentDetailProject)

  return (
    <div>
      <div className={styles.box_buttonMercadoPago}>
        
        <div className={styles.box_buttonMercadoPago_container}>

          <div className={styles.box_buttonMercadoPago_izq}>
            <img src={charityIMG} alt="IMG: Donation Box" />
          </div>

          <div className={styles.box_buttonMercadoPago_der}>
            <Typography
              className={styles.box_buttonMercadoPago_der_h2}
              variant="h2"
            >
              Quiero ayudar donando
            </Typography>

            <Typography
              className={styles.box_buttonMercadoPago_der_p}
              variant="h6"
            >
              Tu solidaridad de hoy se puede transformar en la esperanza y
              resiliencia de miles de personas que se encuentran en situación de
              vulnerabilidad en todo el país
            </Typography>

            {/* <button onClick={() => alert("PRESIONADO XD")}>
              <Typography variant="h5">Donar</Typography>
            </button> */}


            <div className={styles.containerPagos}>
              <div className={styles.paypalContainer}>
                <label htmlFor="">Por donaciones en dolares:</label>
                <input className={styles.inputPaypal} type='number' placeholder="PAYPAL" onChange={handleInputPayPal} value={donationAmountPayPal} onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }} />
                <div className={styles.buttonPaypal}>
                   <PayPalButton
                  amount={donationAmountPayPal}
                  // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                  onSuccess={(details, data) => {
                  alert("Transaction completed");
                  console.log(details, data)

                  // OPTIONAL: Call your server to save the transaction
                  return axios.post("/donations", {
                  amount: donationAmountPayPal,
                  estatus: details.status,
                  target: detailProject.id, 
                  date: details.create_time,
                  email: userinfo.email
                  });
                  }}
                  options={{
                  clientId: "ARAly0W3BAIu2BBAi77Fg9TzXzNcJAA4Hy8SJHEkHalrYB5WWGwwXDvJ5q8aIfxs8S13dGvk0NoQUddf",
                  disableFunding: 'credit,card'
                  }}
                  /> 

                </div>

              </div>

              <div className={styles.mpContainer}>
                <label htmlFor="">Por donaciones en pesos:</label>
                <input type='text' placeholder="MERCADOPAGO" onChange={handleInputMercadoPago} value={donationAmountMercadoPago} onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}></input>
                <button onClick={() => handleMp()}>
                  <img width="114.5" src={mercadopagoLogo} alt="" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>

      
      <div>
        <Carousel/>
      </div>


      <div className={styles.box_preguntasFrecuentes}>
        <div className={styles.box_preguntasFrecuentes_container}>
          <h2>Preguntas Frecuentes</h2>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>¿Que medios de pago aceptan?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nuestros dos principales medios de pagos son para dolares, Paypal, y para pesos contamos con MercadoPago
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                ¿Como puedo ayudar de manera no monetaria?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Podes participar en nuestro sistema de "Manos A La Obra" para colaborar presencialmente en alguna de nuestras filiales.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>¿Hay un monto minimo para poder donar?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                No contamos con un minimo, cualquier tipo de donacion por mas minima que sea es bienvenida.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Donation;