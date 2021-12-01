# ongclient
<!-- 
{
    "id": "05040551WM089943J",
    "intent": "CAPTURE",
    "status": "COMPLETED",
    "purchase_units": [
        {
            "reference_id": "default",
            "amount": {
                "currency_code": "USD",
                "value": "141.00"
            },
            "payee": {
                "email_address": "sb-di4jq8591269@business.example.com",
                "merchant_id": "TP2F2Z483858L"
            },
            "shipping": {
                "name": {
                    "full_name": "John Doe"
                },
                "address": {
                    "address_line_1": "Free Trade Zone",
                    "admin_area_2": "Buenos Aires",
                    "admin_area_1": "Buenos Aires",
                    "postal_code": "B1675",
                    "country_code": "AR"
                }
            },
            "payments": {
                "captures": [
                    {
                        "id": "36C256674V660713C",
                        "status": "COMPLETED",
                        "amount": {
                            "currency_code": "USD",
                            "value": "141.00"
                        },
                        "final_capture": true,
                        "seller_protection": {
                            "status": "ELIGIBLE",
                            "dispute_categories": [
                                "ITEM_NOT_RECEIVED",
                                "UNAUTHORIZED_TRANSACTION"
                            ]
                        },
                        "create_time": "2021-11-30T12:31:41Z",
                        "update_time": "2021-11-30T12:31:41Z"
                    }
                ]
            }
        }
    ],
    "payer": {
        "name": {
            "given_name": "John",
            "surname": "Doe"
        },
        "email_address": "sb-vf6k18691477@business.example.com",
        "payer_id": "9FN7SLLWM2XRW",
        "address": {
            "country_code": "AR"
        }
    },
    "create_time": "2021-11-30T12:31:26Z",
    "update_time": "2021-11-30T12:31:41Z",
    "links": [
        {
            "href": "https://api.sandbox.paypal.com/v2/checkout/orders/05040551WM089943J",
            "rel": "self",
            "method": "GET"
        }
    ]
} -->

<!-- (node:6320) UnhandledPromiseRejectionWarning: Error
    at Query.run (C:\Users\Chicha\Documents\GitHub\ong-server\node_modules\sequelize\lib\dialects\postgres\query.js:76:25)
    at C:\Users\Chicha\Documents\GitHub\ong-server\node_modules\sequelize\lib\sequelize.js:626:28
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
    at async PostgresQueryInterface.createTable (C:\Users\Chicha\Documents\GitHub\ong-server\node_modules\sequelize\lib\dialects\abstract\query-interface.js:225:12)
    at async Function.sync (C:\Users\Chicha\Documents\GitHub\ong-server\node_modules\sequelize\lib\model.js:1299:5)
    at async Sequelize.sync (C:\Users\Chicha\Documents\GitHub\ong-server\node_modules\sequelize\lib\sequelize.js:800:35)
(Use `node --trace-warnings ...` to show where the warning was created)
(node:6320) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:6320) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code. -->