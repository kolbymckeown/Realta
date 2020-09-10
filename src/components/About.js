import React from "react";
import styled from "styled-components";

function About() {
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

export default About;
