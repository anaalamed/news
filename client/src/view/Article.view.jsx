import React from "react";
import styled from "styled-components";

const Article = ({ article }) => {
  return (
    <Main>
      <Title>{article.title}</Title>
      <Description>{article.description}</Description>
      <Details>
        <div>{article.author}</div>
        <div> {article.publishedAt?.substring(0, 10)} {article.publishedAt?.substring(11, 16)}</div>
      </Details>
      <Content>{article.content}</Content>
      <a href={article.url} target="_blank" >full article</a>
    </Main>
  );
};
export default Article;

const Main = styled.main`
  width: 70%;
  height: 100%;
  padding: 5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid midnightblue;
  margin: 1rem;
  background-color: #def196;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  line-height: 1.15;
  font-size: 3rem;
  text-align: center;
`;
const Description = styled.p`
  line-height: 2;
  text-align: center;
  font-size: 1.6rem;
  font-family: cursive;
`;

const Details = styled.div`
  line-height: 2;
  font-size: 1.6rem;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  width: 40%;
`;

const Content = styled.p`
  line-height: 2;
  text-align: center;
  font-size: 1.6rem;
`;