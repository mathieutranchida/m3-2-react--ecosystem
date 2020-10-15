import React from "react";
import styled from "styled-components";

import { useParams } from "react-router-dom";

import { items, sellers } from "../data";

const MainDiv = styled.div`
  margin: 50px 125px;
  display: flex;
`;

const ProductImage = styled.img`
  border-radius: 15px;
  width: 400px;
`;

const SecondaryDiv = styled.div`
  padding: 0px 0px 0px 25px;
`;

const ProductTitle = styled.h1``;

const ProductSecondaryTitle = styled.h2``;

const ProductDescription = styled.p``;

const ProductOrigin = styled.p``;

const Button = styled.button``;

const ButtonOutOfStock = styled.button``;

const Seller = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const SellerAvatar = styled.img`
  width: 50px;
  border-radius: 50%;
`;

const SellerStore = styled.span``;

const ItemDetails = () => {
  const { itemId } = useParams();
  const item = items[itemId];
  console.log(item);
  const seller = sellers[item.sellerId];
  console.log(seller);
  let itemStock = true;
  if (item.quantity === 0) {
    itemStock = false;
  }

  return (
    <MainDiv>
      <ProductImage src={item.imageSrc} />
      <SecondaryDiv>
        <ProductTitle>{item.name}</ProductTitle>
        <ProductSecondaryTitle>{item.latinName}</ProductSecondaryTitle>
        <ProductDescription>{item.description}</ProductDescription>
        <ProductOrigin>Product of {item.countryOfOrigin}</ProductOrigin>
        {itemStock ? (
          <Button>${item.price} - Buy Now!</Button>
        ) : (
          <ButtonOutOfStock>Out of stock</ButtonOutOfStock>
        )}
        <Seller>
          <SellerAvatar src={seller.avatarSrc} alt="Avatar of seller" />
          <SellerStore>Sold by: {seller.storeName}</SellerStore>
        </Seller>
      </SecondaryDiv>
    </MainDiv>
  );
};

export default ItemDetails;
