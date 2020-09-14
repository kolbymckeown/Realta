import React from "react";
import styled from "styled-components";
import { useWindowSize } from './helpers/Window'

function About() {
	const { isMobile } = useWindowSize()
	if (isMobile) {
		return (
			<WrapperM>
				<HeaderM id="about">About Us</HeaderM>
				<InfoM>
					Since 2010 Realta has been leading the charge in supplying airlines
					with proper cleaning products to maintain the vital components of
					planes.
				</InfoM>
			</WrapperM>
		)
	}

	return (
		<>
			<Wrapper>
				<Header id="about">About Us</Header>
				<Info>
					Since 2010 Realta has been leading the charge in supplying airlines
					with proper cleaning products to maintain the vital components of
					planes.
				</Info>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
	font-family: "Sora", sans-serif;
	color: #39683c;
    font-size: 40px;
    margin-top: 15px;
	margin-left: 40px;

`;

const Header = styled.div`
	/* margin-left: 40px; */
`;

const Info = styled.p`
	font-size: 22px;
	color: black;
	margin-top: 5px;
`;

const WrapperM = styled.div`
	font-family: "Sora", sans-serif;
	color: #39683c;
	font-size: 28px;
	margin-top: 8px;
	padding-left: 8px;
	border-bottom: 1px solid #39683c;

`;

const HeaderM = styled.div`
	font-size: 22px;
`;

const InfoM = styled.p`
	font-size: 18px;
	color: black;
	margin-top: 5px;
	width: 90vw;

`;

export default About;
