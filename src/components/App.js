import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import Home from "./Home";
import About from "./About";
import ItemDetails from "./ItemDetails";

const Wrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
`;

const App = (props) => {
  console.log(props);
  return (
    <Wrapper>
      <BrowserRouter>
        <Header />
        <div>
          <Switch>
            <Route exact path="/">
              <Home items={props.items} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/items/:itemId">
              <ItemDetails />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Wrapper>
  );
};

export default App;
