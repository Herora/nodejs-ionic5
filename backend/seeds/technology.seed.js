const mongoose = require("mongoose");
const { MONGO_URI } = require("../config");
const { Technology } = require("../models");

mongoose.connect(MONGO_URI, { useNewUrlParser: true });

const technologies = [{
        line_number: "3013453456",
        formatted_line_number: "301 345 3456",
        expiration_date: "01/09/2019",
        last_payment_date: "12/08/2019",
        payment_reference: 234422498,
        invoice_status: "Vencida",
        amount: 124000,
        currency: "$",
        country_mobile_code: 57,
        payment_history: [{
                period: "08 Jun 2019 al 08 de Jul de 2019",
                amount: 30000,
                balance: 200
            },
            {
                period: "08 Abr 2019 al 08 de May de 2019",
                amount: 30000,
                balance: 150
            },
            {
                period: "08 Jul 2019 al 08 de Ago de 2019",
                amount: 30000,
                balance: 0
            },
            {
                period: "08 Mar 2019 al 08 de Abr de 2019",
                amount: 34000,
                balance: 4
            },
            {
                period: "08 May 2019 al 08 de Jun de 2019",
                amount: 32600,
                balance: 50
            }
        ]
    },
    {
        line_number: "3227087800",
        formatted_line_number: "322 708 7800",
        expiration_date: "01/09/2019",
        last_payment_date: "12/08/2019",
        payment_reference: 234422438,
        invoice_status: "Por pagar",
        amount: 256000,
        currency: "$",
        country_mobile_code: 57,
        payment_history: [{
                period: "08 Jun 2019 al 08 de Jul de 2019",
                amount: 50000,
                balance: 110
            },
            {
                period: "08 Abr 2019 al 08 de May de 2019",
                amount: 50000,
                balance: 150
            },
            {
                period: "08 Jul 2019 al 08 de Ago de 2019",
                amount: 50000,
                balance: 0
            },
            {
                period: "08 Mar 2019 al 08 de Abr de 2019",
                amount: 54000,
                balance: 4
            },
            {
                period: "08 May 2019 al 08 de Jun de 2019",
                amount: 52600,
                balance: 50
            }
        ]
    },
    {
        line_number: "3235246089",
        formatted_line_number: "323 524 6089",
        expiration_date: "01/09/2019",
        last_payment_date: "12/08/2019",
        payment_reference: 233322498,
        invoice_status: "Vencida",
        amount: 200000,
        currency: "$",
        country_mobile_code: 57,
        payment_history: [{
                period: "08 Jun 2019 al 08 de Jul de 2019",
                amount: 50000,
                balance: 110
            },
            {
                period: "08 Abr 2019 al 08 de May de 2019",
                amount: 50000,
                balance: 150
            },
            {
                period: "08 Jul 2019 al 08 de Ago de 2019",
                amount: 50000,
                balance: 0
            },
            {
                period: "08 Mar 2019 al 08 de Abr de 2019",
                amount: 54000,
                balance: 4
            }
        ]
    },
    {
        line_number: "3178889999",
        formatted_line_number: "317 888 9999",
        expiration_date: "01/09/2019",
        last_payment_date: "12/08/2019",
        payment_reference: 211122498,
        invoice_status: "por pagar",
        amount: 200000,
        currency: "$",
        country_mobile_code: 57,
        payment_history: [{
                period: "08 Jun 2019 al 08 de Jul de 2019",
                amount: 50000,
                balance: 110
            },
            {
                period: "08 Abr 2019 al 08 de May de 2019",
                amount: 50000,
                balance: 150
            },
            {
                period: "08 Jul 2019 al 08 de Ago de 2019",
                amount: 50000,
                balance: 0
            },
            {
                period: "08 Mar 2019 al 08 de Abr de 2019",
                amount: 54000,
                balance: 4
            }
        ]
    },
    {
        line_number: "3205478352",
        formatted_line_number: "320 547 8352",
        expiration_date: "01/09/2019",
        last_payment_date: "12/08/2019",
        payment_reference: 219999498,
        invoice_status: "vencida",
        amount: 550000,
        currency: "$",
        country_mobile_code: 57,
        payment_history: [{
                period: "08 Jun 2019 al 08 de Jul de 2019",
                amount: 50000,
                balance: 110
            },
            {
                period: "08 Abr 2019 al 08 de May de 2019",
                amount: 50000,
                balance: 150
            },
            {
                period: "08 Jul 2019 al 08 de Ago de 2019",
                amount: 50000,
                balance: 0
            },
            {
                period: "08 Mar 2019 al 08 de Abr de 2019",
                amount: 50000,
                balance: 6
            },
            {
                period: "08 Mar 2019 al 08 de Abr de 2019",
                amount: 100000,
                balance: 5
            },
            {
                period: "08 Mar 2019 al 08 de Abr de 2019",
                amount: 100000,
                balance: 8
            },
            {
                period: "08 Mar 2019 al 08 de Abr de 2019",
                amount: 150000,
                balance: 9
            }
        ]
    },

];

Technology.create(technologies)
    .then(() => {
        console.log("Technologies Created");
        mongoose.disconnect();
    })
    .catch(console.log);