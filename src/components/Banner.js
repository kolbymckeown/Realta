import React from "react";
import styled from "styled-components";
import logo from '../work.svg'
import { useWindowSize } from './helpers/Window'


function Banner() {
    const { isMobile } = useWindowSize()
    if (isMobile) {
        return (
            <WrapperM>
                <ImgM src={logo} />
                <TextM>iCloth Cleaning Wipes</TextM>

            </WrapperM>
        )
    }
    return (

        <Wrapper>
            <Img src={logo} />
            <Text>iCloth Cleaning Wipes</Text>
        </Wrapper>
        
    )
}

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;    
    margin-top: 15px;
`;

const Text = styled.span`
    margin-bottom: 0;
    font-family: "Sora", sans-serif;
	color: #39683c;
    font-size: 55px;

`;

const Img = styled.img`
    height: 200px;
    width: 200px;
`;

const WrapperM = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const ImgM = styled.img`
    height: 40px;
`;

const TextM = styled.span`
    font-size: 25px;
    color: #39683c;
    font-family: "Sora", sans-serif;
`;

export default Banner;