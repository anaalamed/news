import React from "react";
import styled from "styled-components";

const Article = ({ article }) => {
  // console.log(article.urlToImage)

  return (
    <Main>
      <Data>
        <Title>{article.title}</Title>
        <Description>{article.description}</Description>
        <Details>
          <div>{article.author}</div>
          <div> {article.publishedAt?.substring(0, 10)} {article.publishedAt?.substring(11, 16)}</div>
        </Details>
        <Content>{article.content}</Content>
        <a href={article.url} target="_blank" >Full article...</a>
      </Data>

      {(article.urlToImage !== null) ?
        (<div className="image"><img src={article.urlToImage}></img></div>) :
        (null)}
    </Main>
  );
};
export default Article;

const Main = styled.main`
  width: 70%;
  height: 100%;
  padding: 5rem 1rem;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  border: 1px solid midnightblue;
  margin: 1rem;
  background-color: #9bdef3;
  border-top-right-radius: 10rem;
  border-bottom-right-radius: 15rem;
  border-top-left-radius: 15rem;
  border-bottom-left-radius: 10rem;
   
   a {
     color: whitesmoke;
     padding-top: 2rem;
     text-decoration: underline;
     text-align: center;
   }

   img {
     width: 500px;
     border-radius: 5rem;
   }
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  line-height: 1.15;
  font-size: 3rem;
  text-align: center;
  color: midnightblue;
  font-weight: bold;
  padding: 1rem 2rem;
`;

const Description = styled.p`
  line-height: 2;
  text-align: center;
  font-size: 1.6rem;
  font-family: cursive;
  color: white
`;

const Details = styled.div`
  line-height: 2;
  font-size: 1.6rem;
  /* display: flex; */
  /* justify-content: space-between; */
  font-weight: bold;
  /* width: 40%; */
  float: right;
  margin: 0 auto;
  text-align: center;
`;

const Content = styled.p`
  line-height: 2;
  /* text-align: center; */
  font-size: 1.9rem;
`;