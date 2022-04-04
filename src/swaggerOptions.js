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
                url: "https://safe-meadow-76300.herokuapp.com"
            }
        ]
    },
    apis: ["./src/routes/*.js"]
}

module.exports = options;