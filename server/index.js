import express from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import colors from 'colors';
import routerNews from './routes/news.js';
import {connect} from './news-db.js'

// import {dates} from './routes/functions.js';

const app = express();
app.use(bodyParser.json()); 
app.use(cors()); // go from port to port 
app.use(routerNews); 


const uri = "mongodb+srv://news:KnvZCB5hdwABlAWa@cluster0.wld4w.mongodb.net/news?retryWrites=true&w=majority";
connect(process.env.MONGODB_URI || uri );
// connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/news');

// serve UI 
const __dirname = path.resolve();
app.use(express.static(path.resolve(__dirname, './client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
  });


const port = process.env.PORT || 7000; 
app.listen(port,() =>  console.log(`Running on: http://localhost:${port}`.green.bold));
    