import React from "react";
import styled from "styled-components";
import { Data } from "../data.js";
import { useWindowSize } from './helpers/Window'


const ProductRender = () => {
	const { isMobile } = useWindowSize()

	return Object.entries(Data).map((value) => {
		const data = value[1];

		if (isMobile) {
			return (
				<LiM style={{ listStyleType: "none" }}>
				<WrapperM>
					<ProductM>
						<ProductNameM>{data.productName}</ProductNameM>
						<ProductSubHeadM>Size: {data.productSubHead}</ProductSubHeadM>
						<ProductImgM src={data.imgURL} />
						<ProductDescM>{data.productDesc}</ProductDescM>
					</ProductM>
				</WrapperM>
			</LiM>
			)
		}

		return (
			<Li style={{ listStyleType: "none" }}>
				<Wrapper>
					<Product>
						<ProductName>{data.productName}</ProductName>
						<ProductSubHead>Size: {data.productSubHead}</ProductSubHead>
						<ProductImg src={data.imgURL} />
						<ProductDesc>{data.productDesc}</ProductDesc>
					</Product>
				</Wrapper>
			</Li>
		);
	});
};

export default ProductRender;

const Wrapper = styled.div`
	font-family: "Sora", sans-serif;
	color: #39683c;
	font-size: 40px;
	margin-top: 15px;
	display: flex;
	justify-content: space-evenly;
`;

const Product = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 25px;
	margin-right: 25px;
	width: 40%;
	margin-bottom: 25px;
`;

const Li = styled.li`
	display: inline-block;
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

const ProductImg = styled.img`
	height: 215px;
	width: 175px;
	border-radius: 5px;
	padding-bottom: 15px;
`;

const ProductDesc = styled.span`
	font-size: 15px;
	color: black;
	text-align: center;
`;

const WrapperM = styled.div`
	font-family: "Sora", sans-serif;
	color: #39683c;
	font-size: 28px;
	margin-top: 8px;
	display: flex;
	justify-content: space-evenly;
`;

const ProductM = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 5px;
	margin-right: 5px;
	width: 40%;
	margin-bottom: 5px;
`;

const LiM = styled.li`
	display: inline-block;
`;

const ProductNameM = styled.span`
	font-size: 24px;
	text-decoration: underline;
	padding-bottom: 5px;
`;

const ProductSubHeadM = styled.span`
	font-size: 14px;
	padding-bottom: 10px;
`;

const ProductImgM = styled.img`
	height: 125px;
	width: 75px;
	border-radius: 5px;
	padding-bottom: 15px;
`;

const ProductDescM = styled.span`
	font-size: 12px;
	color: black;
	text-align: center;
	width: 75vw;
`;