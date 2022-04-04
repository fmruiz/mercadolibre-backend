const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "mercadolibre challenge API",
            version: "1.0.0",
            description: "simple API for mercadolibre frontend challenge"
        },
        servers: [
            {
                url: "http://localhost:9000"
            }
        ]
    },
    apis: ["./src/routes/*.js"]
}

module.exports = options;