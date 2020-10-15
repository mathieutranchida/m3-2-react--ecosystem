import React from "react";

import styled from "styled-components";

import { Link } from "react-router-dom";

const ItemWrapper = styled(Link)``;

const Image = styled.img`
  width: 125px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  margin: 0px auto;
`;

const TextWrapper = styled.div`
  height: 200px;
  position: relative;
  top: -125px;
  border-radius: 10px;
  box-shadow: 0px 0px 30px 2px #dbdbdb;
  z-index: -1;
`;

const TextName = styled.p`
  text-align: center;
  position: relative;
  top: 120px;
  z-index: 1;
`;

const TextLatinName = styled.p`
  text-align: center;
  position: relative;
  top: 120px;
  z-index: 1;
`;

const ListingGrid = (props) => {
  return props.items.map((item) => {
    return (
      <ItemWrapper key={item.id} to={`/items/${item.id}`}>
        <Image src={item.imageSrc} alt="product-image" />
        <TextWrapper>
          <TextName>{item.name}</TextName>
          <TextLatinName>{item.latinName}</TextLatinName>
        </TextWrapper>
      </ItemWrapper>
    );
  });
};

export default ListingGrid;
