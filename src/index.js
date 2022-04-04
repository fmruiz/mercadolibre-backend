const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// Swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const options = require('./swaggerOptions')

const items = require("./routes/items.routes");

const app = express();

// middlewares
app.use(morgan("tiny"));
app.use(cors());

const specs = swaggerJsDoc(options)

app.use("/api/items", items);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));


// init server
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`Server up in port ${PORT}`);
});
