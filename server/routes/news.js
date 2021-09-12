import { Router } from 'express';
import fetch from 'node-fetch';
import Storage from '../models/storage.js';

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


routerNews.get('/api/news/count', async (req, res) => {
    try {
        const url = 'https://newsapi.org/v2/everything?language=en&pagesize=50&sortby=publishedAt&sources=abc-news&apiKey=2efe58d8179d44cf8abd0611e232b929';
        const resp = await fetch(url);
        const data = await resp.json();

        var data_str = ' ';
        data.articles.map(article => {
            data_str+=article.title.concat(' ');
            data_str+=article.description.concat(' ');
        })

        const storage = count_words(data_str);
        var st = new Storage({storage: storage});
        st.save();
        res.json(st);
    } catch (error) {
        console.log(error);
    }
})

const count_words = (words_str) => {
    var words_arr = words_str.split(' ');
 
    // let countedWords = words_arr.reduce( function (allWords, word) {
    //     if (word in allWords) {
    //         allWords[word]++;
    //     }
    //     else {
    //         allWords[word] = 1;
    //     }
    //     return allWords;
    // }, {});

    function getWordCount(array) {  
        let map = {};
        for (let i = 0; i < array.length; i++) { 
               let item = array[i];
                map[item] = (map[item] + 1) || 1;
            }  
        return map;
    };

    let countedWords =  getWordCount(words_arr);
    return countedWords;
}


export default routerNews;

