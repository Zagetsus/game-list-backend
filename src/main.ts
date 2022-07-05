import express from 'express';
import {PORT} from "./common/utils/constants";

const app = express()

app.get('/', (_, res) => {
    res.send('Hello world')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} 🎮`)
})
