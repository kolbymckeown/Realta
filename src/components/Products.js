import React from "react";
import styled from "styled-components";
import { Data } from "../data.js";
import ProductRender from './ProductsRender'

function Products() {
	return (
		<>
			<Header id="products">Products</Header>
			<Ul>
			<ProductRender />
			</Ul>
		</>
	);
}

export default Products;

const Header = styled.div`
	margin-left: 40px;
	font-family: "Sora", sans-serif;
	color: #39683c;
	font-size: 40px;
	margin-top: 15px;
`;

const Ul = styled.ul`
	display: grid;
	grid-template-columns: 1fr 1fr;
`;