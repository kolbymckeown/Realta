import React from "react";
import styled from "styled-components";
import logo from "../work.svg";

function Footer() {
	return (
		<>
			<Wrapper>
				<Logo src={logo} />
				<Tm>Realta 2020 &trade;</Tm>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
	font-family: "Sora", sans-serif;
	position: fixed;
	left: 45%;
	bottom: 5px;
	/* Make footer push away text it comes into contact with */
`;

const Logo = styled.img`
	margin-right: 2px;
	height: 20px;
	margin-bottom: -4px;
`;

const Tm = styled.span``;

export default Footer;
