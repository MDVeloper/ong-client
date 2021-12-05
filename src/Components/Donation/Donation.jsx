import React from "react";
import styles from "./Donation.module.css";
import Carousel from "../Carrusel/Carousel";
import { Typography } from "@mui/material";

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import charityIMG from "../img/charity.jpg";
import { PayPalButton } from "react-paypal-button-v2";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import axios from "axios";

function Donation() {
  const [donationAmount, setDonationAmount] = useState(1);

    const handleDonationInput = function (e) {
        e.preventDefault();
        setDonationAmount(e.target.value)
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
              variant="body2"
            >
              Tu solidaridad de hoy se puede transformar en la esperanza y
              resiliencia de miles de personas que se encuentran en situación de
              vulnerabilidad en todo el país
            </Typography>

            <button onClick={() => alert("PRESIONADO XD")}>
              <Typography variant="h5">Donar</Typography>
            </button>

            <input type='number' placeholder="Digita aqui tu ayuda" onChange={handleDonationInput} value={donationAmount} />
            <PayPalButton
              amount={donationAmount}
              // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
              onSuccess={(details, data) => {
                alert("Transaction completed by " + details.payer.name.given_name);
                console.log(details, data)

                // OPTIONAL: Call your server to save the transaction
                return axios.post("http://localhost:3001/donations", {
                  amount: donationAmount,
                  date: details.create_time,
                  estatus: details.status,
                  email: details.payer.email_address
                });
              }}
              options={{
                clientId: "ARAly0W3BAIu2BBAi77Fg9TzXzNcJAA4Hy8SJHEkHalrYB5WWGwwXDvJ5q8aIfxs8S13dGvk0NoQUddf",
                disableFunding:'credit,card'
              }}
            />

          </div>
        </div>
      </div>
      <div>
        <Carousel />
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>¿Como puedo saber a donde va mi donación?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Donation;
