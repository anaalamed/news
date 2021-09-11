import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Home from "./pages/Home.page";
import Cloud from "./pages/Cloud.page";

import Footer from "./Footer.view";
import TopBar from "./TopBar.view";

const App = () => {
  return (
    <Box>
      <TopBar />

      <Route path="/" exact component={Home} />
      <Route path="/cloud" exact component={Cloud} />


      <Footer />
    </Box>
  );
};
export default App;

const Box = styled.div`
  min-height: 100vh;
  width: 100%;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
