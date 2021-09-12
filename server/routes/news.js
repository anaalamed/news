import { Router } from 'express';
import fetch from 'node-fetch';
import Storage from '../models/storage.js';
import { count_words, generateDates} from './functions.js';
import async from 'async';
import axios from 'axios';

const routerNews = Router(); 

routerNews.get('/api/news', async (req, res) => {
    try {
        const url = 'https://newsapi.org/v2/everything?language=en&pagesize=50&sortby=publishedAt&sources=abc-news&apiKey=2efe58d8179d44cf8abd0611e232b929';
        const resp = await fetch(url);
        const data = await resp.json();
        // const data = await axios.get("https://newsapi.org/v2/everything?language=en&pagesize=50&sortby=publishedAt&sources=abc-news&apiKey=2efe58d8179d44cf8abd0611e232b929&from=2021-09-10&to=2021-09-10");
        // console.log(data);

        // -------------------- to count words ------------------------
        // create str of all titles and descriptions
        var data_str = ' ';
        data.articles.map(article => {
            data_str+=article.title.concat(' ');
            data_str+=article.description.concat(' ');
        })

        const storage_obj = count_words(data_str); // return obj word+count
        var storage = new Storage({storage: storage_obj});
        storage.save();
        res.json({news: data.articles, storage: storage});
    } catch (error) {
        console.log(error);
    }
})

routerNews.get('/api/news_week',  (req, res) => {
    const dates = generateDates(7);
    console.log(dates);

    const URL = "https://newsapi.org/v2/everything?language=en&pagesize=50&sortby=publishedAt&sources=abc-news&apiKey=2efe58d8179d44cf8abd0611e232b929"

    const functionArray = dates.map((date) => {
        return async function () {
          const data = await axios.get(`${URL}&from=${date}&to=${date}`);

          var data_str = ' ';
          data.data.articles.map(article => {
              data_str+=article.title.concat(' ');
              data_str+=article.description.concat(' ');
          })
  
          const storage_obj = count_words(data_str); // return obj word+count
          return ({articles: data.data.articles, storage: storage_obj });
        }
      })
    
      async.parallel(functionArray, (err, result) => {
        res.status(200).json({ items: result.length, data: result });
      })
})






export default routerNews;

