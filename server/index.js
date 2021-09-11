import express from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import colors from 'colors';
import mongoose from 'mongoose';
import routerNews from './routes/news.js';

const __dirname = path.resolve();

const app = express();
app.use(bodyParser.json()); 
app.use(cors()); // go from port to port 
app.use(routerNews); 

function connect(mongoURI) {
	console.log('Connecting to MongoDB: ', mongoURI);
     mongoose.connect(mongoURI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then( () => {
        console.log("MongoDB connected...");
    })
        .catch ( () => {
        console.log('MONGODB is not connected');
        process.exit(1);
    });
}

const uri = "mongodb+srv://news:G9ggrT1V7rwl4t7R@cluster0.wld4w.mongodb.net/news?retryWrites=true&w=majority";
// const uri = "mongodb+srv://someone:d4lhr2l25iYIWFyH@cluster0.wld4w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// connect(process.env.MONGODB_URI || uri );



// serve UI 
app.use(express.static(path.resolve(__dirname, './client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
  });


const port = process.env.PORT || 7000; 
app.listen(port,() =>  console.log(`Running on: http://localhost:${port}`.green.bold));
    