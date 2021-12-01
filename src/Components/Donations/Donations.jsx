import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { PayPalButton } from "react-paypal-button-v2";
import axios from "axios";


export default function Login() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [donationAmount, setDonationAmount] = useState(1);

    const handleDonationInput = function (e) {
        e.preventDefault();
        setDonationAmount(e.target.value)
    }

    return (
        <Fragment>
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
                    clientId: "ARAly0W3BAIu2BBAi77Fg9TzXzNcJAA4Hy8SJHEkHalrYB5WWGwwXDvJ5q8aIfxs8S13dGvk0NoQUddf"
                }}
            />
        </Fragment>
    )
}
