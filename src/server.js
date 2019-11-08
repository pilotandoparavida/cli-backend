global.mongoose = require('mongoose');

const mongoose_db = process.env.MONGOOSE_DB;
const mongoose_user = process.env.MONGOOSE_USER;
const mongoose_conf = process.env.MONGOOSE_CONF;
const mongoose_url = process.env.MONGOOSE_URL;
const mongoose_key = process.env.MONGOOSE_KEY;

async function dataBaseConnection() {
    let mongoose_connection = `mongodb+srv://${mongoose_user}:${mongoose_key}@${mongoose_url}/${mongoose_db}?${mongoose_conf}`;
    // if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    //     mongoose_connection = `mongodb://${mongoose_url}/${mongoose_db}?${mongoose_conf}`;
    // }

    console.log("CONNECTING TO: " + mongoose_connection);
    try {
        await mongoose.connect(mongoose_connection, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MONGOOSE STATE: " + mongoose.connection.readyState);

        const express = require('express');
        const routes = require('./routes');
        const cors = require('cors');

        const app = express();

        app.use(cors());
        app.use(express.json()); // informando para utilizar formatos JSON no body
        app.use(routes); // vem depois do express JSON! leitura é sequencial

        const port = process.env.PORT || 3333;
        app.listen(port);

        // https://nodemailer.com/about/
        // https://nodemailer.com/usage/using-gmail/
        // https://www.thedigitalnonprofit.com/blog/use-gmail-own-domain-free

    } catch (error) {
        console.log(error);
    }
}

dataBaseConnection();

