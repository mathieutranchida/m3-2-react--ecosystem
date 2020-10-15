import React from "react";
import styled from "styled-components";

const Section = styled.div`
  margin: 0px 125px;
`;

const About = () => {
  return (
    <Section>
      <p>
        Fruit emporium is founded on a very simple principle: Fruit is good.
      </p>
      <p>
        We carry the finest selection of produce from around the world, from
        tart citrus to sweet cherries. Our sellers are world-class, and your
        fruit is guaranteed to be worthy of auction in Asian markets.
      </p>
    </Section>
  );
};

export default About;
