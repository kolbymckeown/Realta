import React from "react";
import styled from "styled-components";
import ProductRenderFR from './ProductRenderFR'
import { useWindowSize } from './helpers/Window'


function ProductsFrench() {
	const { isMobile } = useWindowSize()
	if (isMobile) {
		return (
			<>
				<HeaderM id="products">Nos Produits</HeaderM>
				<UlM>
					<ProductRenderFR />
				</UlM>
			</>
		)
	}
	return (
		<>
			<Header id="products">Nos Produits</Header>
			<Ul>
			<ProductRenderFR />
			</Ul>
		</>
	);
}

export default ProductsFrench;

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

const HeaderM = styled.div`
	font-family: "Sora", sans-serif;
	color: #39683c;
	font-size: 22px;
	margin-top: 8px;
	padding-left: 8px;
`;

const UlM = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid #39683c;

`;