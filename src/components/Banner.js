import React from "react";
import styled from "styled-components";
import logo from '../work.svg'

function Banner() {
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

export default Banner;