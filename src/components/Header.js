import React from "react";
import styled from "styled-components";
import logo from "../work.svg";


function Header() {
	return (
		<>
			<Wrapper>
				<Title>Realta <Logo src={logo} /> Logistics & Warehousing</Title>

				<Nav>
                    <A href="#">Home</A>
                    <A href="#about">About</A>
                    <A href="#products">Products</A>
                    <A href="#contact">Contact</A>
                </Nav>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 40px;
    margin-right: 40px;
    align-items: baseline;
    font-family: 'Sora', sans-serif;
    color: #39683c;
    border-bottom: 2px solid #39683c;

`;

const Title = styled.h1`
    font-size: 40px;
    margin-bottom: 2px;

`;

const Logo = styled.img`
    height: 80px;
    margin-bottom: -20px;
`;

const Nav = styled.nav`
`;

const A = styled.a`
    text-decoration: none;
    margin: 5px;
    font-size: 25px;
    margin-bottom: -20px;
    color: #39683c;

`;

export default Header;
