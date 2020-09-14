import React from "react";
import styled from "styled-components";
import logo from "../work.svg";
import { useWindowSize } from './helpers/Window'



function Header() {
    const { isMobile } = useWindowSize()
    if (isMobile) {
        return (
            <WrapperM>
                <TitleM>Realta || Logistics & Warehousing</TitleM>
                <NavM>
                    <AM href="#about">About</AM>
                    <AM href="#products">Products</AM>
                    <AM href="#contact">Contact</AM>
                </NavM>
            </WrapperM>
        )
    }
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
// Desktop Styles
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

// Mobile Styles

const WrapperM = styled.div`
text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    color: #39683c;

`;

const TitleM = styled.h1`

    font-size: 22px;
`;

const SubM = styled.p`
    font-size: 18px;
`;

const LogoM = styled.img`
    height: 50px;
`;

const NavM = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border-top: 1px solid #39683c;
    border-bottom: 1px solid #39683c;
`;

const AM = styled.a`
     text-decoration: none;
    margin: 5px;
    font-size: 15px;
    color: #39683c;
`;

export default Header;
