import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { TagCloud } from 'react-tagcloud' // value count

import ReactWordcloud from 'react-wordcloud'; // text value
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { select } from "d3-selection";


const Cloud = () => {
    const { storage } = useSelector(state => state.news);

    console.log(storage);
    let objKeys = Object.keys(storage);
    let objToArr = objKeys.map(key => {
        // let arr = { value: key, count: storage[key] };
        let arr = { text: key, value: storage[key] };
        return arr;
    })
    console.log(objToArr);

    const options = {
        fontSizes: [15, 50],
    };
    const size = [2000, 800];

    function getCallback(callback) {
        return function (word, event) {
            const isActive = callback !== "onWordMouseOut";
            const element = event.target;
            const text = select(element);
            text
                .transition()
                .attr("font-size", isActive ? "300%" : "100%")
                .attr("text-decoration", isActive ? "underline" : "none");
        };
    }

    const callbacks = {
        getWordTooltip: (word) =>
            `The word "${word.text}" appears ${word.value} times.`,
        onWordMouseOut: getCallback("onWordMouseOut"),
        onWordMouseOver: getCallback("onWordMouseOver")
    };


    return (
        <Main>
            <Title>ABC News World Cloud</Title>

            {(storage.length === 0) ?
                (<h1>Loading...</h1>) :
                (
                    <div>
                        <ReactWordcloud words={objToArr}
                            // size={size}
                            options={options}
                            callbacks={callbacks} />
                    </div>)
            }

            {/* <TagCloud
                minSize={12}
                maxSize={35}
                tags={objToArr}
                onClick={tag => alert(`'${tag.value}' was selected!`)}
            /> */}
        </Main>
    );
};
export default Cloud;

const Main = styled.main`
  height: 100%;
  width: 100%;
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
  background-color: #9bdef3;
  background-color: #9bdef3;
  border-top-right-radius: 10rem;
  border-bottom-right-radius: 15rem;
  border-top-left-radius: 15rem;
  border-bottom-left-radius: 10rem;
  border: 10px solid yellow;
  width: 80%;
  height: 600px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;

const Title = styled.h1`
  /* margin-top: 2rem; */
  margin-bottom: 1rem;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  background-color: white;
  padding: 2.2rem 4.4rem;
  border-radius: 0.4rem;
  box-shadow: 0.2rem 0.2rem 2rem rgba(184, 187, 200, 0.3);
`;


const Button = styled.button`
  line-height: 2;
  text-align: center;
  font-size: 1.6rem;
`;


