import React from 'react'
import styled from 'styled-components'
import logo from '../work.svg'
import { Link } from 'react-router-dom'



const fourOhFour = () => {
	return (
		<Wrapper>
			<Error>
				<Title>Realta || Logistics & Warehousing</Title>
				<Img src={logo} />
				<ErrMsg>404 - This page doesn't seem to exist!</ErrMsg>
				<LinkD to="/">Back to Home</LinkD>
			</Error>
		</Wrapper>
	)
}

export default fourOhFour;

const Wrapper = styled.div`
`;

const Error = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Title = styled.h1`
  border-bottom: 2px solid #39683c;
  font-family: "Sora", sans-serif;
  color: #39683c;

`;

const Img = styled.img`
	height: 250px;
`;

const ErrMsg = styled.p`
	font-family: "Sora", sans-serif;
  color: #39683c;
  font-size: 22px;
`;

const LinkD = styled(Link)`
font-family: "Sora", sans-serif;
  color: #39683c;
  text-decoration: none;
  border: 1px solid #39683c;
  padding: 3px 8px;
  border-radius: 5px;
`;