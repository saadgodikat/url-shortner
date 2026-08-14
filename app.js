import express from 'express';
import bodyParser from 'body-parser';
import {shortenURL , redirectURL} from './urlRoutes.js';


const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/shorten' , shortenURL);
app.get('/:short_url' , redirectURL);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
} );

