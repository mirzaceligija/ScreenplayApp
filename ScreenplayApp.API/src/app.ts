import express from "express";
import cors from 'cors';
import config from "config";
import log from "../config/logger";
import connect from "./db/connect";

const path = require('path');

import routes from "./routes/index.routes";
import deserializeUser from "./middlewares/deserializeUser";

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();
app.use(deserializeUser);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1/images', express.static(path.join('public/images')));

app.use(cors());

app.listen(port, host, () => {
    log.info(`Server listing at http://${host}:${port}`);

    connect();

    routes(app);
});