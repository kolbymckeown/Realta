import React from "react";
import styled from "styled-components";
import { Data } from "../data.js";
import ProductRender from './ProductsRender'

function Products() {
	console.log(Data);
	// Map over Object.entries(Data).map()?? Render UL / LI
	return (
		<>
			<Header id="products">Products</Header>
			
			<ProductRender />

			
		</>
	);
}

const Wrapper = styled.div`
	font-family: "Sora", sans-serif;
	color: #39683c;
	font-size: 40px;
	margin-top: 15px;
	display: flex;
	justify-content: space-evenly;
`;

const Header = styled.div`
	margin-left: 40px;
	font-family: "Sora", sans-serif;
	color: #39683c;
	font-size: 40px;
	margin-top: 15px;
`;

const Product = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 25px;
	margin-right: 25px;
	width: 25%;
`;

const ProductName = styled.span`
	font-size: 30px;
	text-decoration: underline;
	padding-bottom: 5px;
`;

const ProductSubHead = styled.span`
	font-size: 18px;
	padding-bottom: 10px;
`;

const ProductDesc = styled.p`
	font-size: 15px;
	color: black;
	text-align: center;
`;

const ProductImg = styled.img`
	height: 215px;
	width: 175px;
`;

export default Products;
