import React from "react";
import styled from "styled-components";

import ListingGrid from "./ListingGrid";

const Section = styled.div`
  padding: 0px 125px;
`;

const ListingGridWrapper = styled.div`
  margin: 0px auto 0px auto;
`;

const ListingGridItem = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  grid-gap: 40px;
  margin: 40px 0px;
`;

const Home = (props) => {
  console.log(props);
  const items = Object.values(props.items);
  return (
    <Section>
      <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
      <p>Browse items:</p>
      <ListingGridWrapper>
        <ListingGridItem>
          <ListingGrid items={items} />
        </ListingGridItem>
      </ListingGridWrapper>
    </Section>
  );
};

export default Home;
