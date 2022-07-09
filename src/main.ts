import express from 'express';
import bodyParser from 'body-parser';

import {PORT} from "./common/utils/constants";
import swaggerDocs from "./common/utils/swagger";
import controllers from "./controllers"
import logger from "./common/utils/logger";

const app = express()
const port = PORT || 3000

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/v1', controllers)

app.listen(port, () => {
    logger.info(`App is running at http://localhost:${port}`);
    swaggerDocs(app, port)
})
