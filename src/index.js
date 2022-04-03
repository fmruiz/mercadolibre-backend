const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const items = require('./routes/items.routes');

const app = express();

// middlewares
app.use(morgan('tiny'));
app.use(cors());

app.use('/api/items', items);

// init server
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`Server up in port ${PORT}`);
});
