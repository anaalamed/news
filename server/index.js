import express from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import colors from 'colors';
import routerNews from './routes/news.js';

const __dirname = path.resolve();

// const {connect} = require('./mongo-db'); // mongoose connection
// mongoose connection to DB 
// connect(process.env.MONGODB_URI || 'mongodb+srv://someone:Z5IFlN3WQosXxkDD@cluster0.wld4w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

const app = express();
app.use(bodyParser.json()); 
app.use(cors()); // go from port to port 
app.use(routerNews); 

// serve UI 
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });


const port = process.env.PORT || 7000; 
app.listen(port,() =>  console.log(`Running on: http://localhost:${port}`.green.bold));
    