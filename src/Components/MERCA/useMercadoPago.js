import { useEffect, useState } from "react";
import useScript from "./useScript";
import { formConfig } from "./formConfig.js";
import axios from "axios";
import { useSelector } from "react-redux";

export default function useMercadoPago() {
    const [resultPayment, setResultPayment] = useState(undefined);
    const realAmount = useSelector((state) => state.donations.amount)

    const { MercadoPago } = useScript(
        "https://sdk.mercadopago.com/js/v2",
        "MercadoPago"
    );

    // console.log(realAmount)
    // console.log("AAAAAAAAAAA", realAmount)
    // console.log(formConfig)
    useEffect(() => {
        if (MercadoPago) {
            const mp = new MercadoPago("TEST-d9ce698b-8910-455b-b6c7-3d2f64de1f85");
            const cardForm = mp.cardForm({
                amount: "619",
                autoMount: true,
                form: formConfig,
                callbacks: {
                    onFormMounted: (error) => {
                        if (error)
                            return console.warn(
                                "Form Mounted handling error: ",
                                error
                            );
                    },
                    
                    onSubmit: (event) => {
                        event.preventDefault();

                        const {
                            paymentMethodId: payment_method_id,
                            issuerId: issuer_id,
                            cardholderEmail: email,
                            amount,
                            token,
                            installments,
                            identificationNumber,
                            identificationType,
                        } = cardForm.getCardFormData();

                        console.log(realAmount)

                        axios.post("http://localhost:3001/mp/process_payment", {
                            token,
                            amount,
                            realAmount,
                            issuer_id,
                            payment_method_id,
                            transaction_amount: realAmount,
                            installments: Number(installments),
                            description: "Descripción del producto",
                            payer: {
                                email,
                                identification: {
                                    type: identificationType,
                                    number: identificationNumber,
                                },
                            },
                        })
                            .then((res) => res.json())
                            .then((data) => setResultPayment(data))
                            .catch((err) => {
                                setResultPayment(err);
                            });
                    },
                    onFetching: (resource) => {
                        // Animate progress bar
                        const progressBar =
                            document.querySelector(".progress-bar");
                        progressBar.removeAttribute("value");

                        return () => {
                            progressBar.setAttribute("value", "0");
                        };
                    },
                },
            });
        }
    }, [MercadoPago]);

    return resultPayment;
}
