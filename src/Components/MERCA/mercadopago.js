export const initializeMercadopago = (preference_id) => {
    if (preference_id) {
        const mp = new window.MercadoPago(
            "TEST-d9ce698b-8910-455b-b6c7-3d2f64de1f85",
            {
                locale: "es-AR"
            }
        );
        mp.checkout({
            preference: {
                id: preference_id
            }
            ,
            autoOpen: true
        })

    }
}