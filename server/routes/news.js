import { Router } from 'express';
import fetch from 'node-fetch';

const routerNews = Router(); 

routerNews.get('/api/news', async (req, res) => {
    try {
        const url = 'https://newsapi.org/v2/everything?language=en&pagesize=50&sortby=publishedAt&sources=abc-news&apiKey=2efe58d8179d44cf8abd0611e232b929';
        const resp = await fetch(url);
        const data = await resp.json();
        res.json(data.articles);
    } catch (error) {
        console.log(error);
    }
})


export default routerNews;

