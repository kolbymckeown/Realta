import React from "react";
import styled from "styled-components";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
import { IconContext } from "react-icons";

function Contact() {
	return (
		<>
			<IconContext.Provider
				value={{ color: "#39683c", verticalAlign: "middle", paddinTop: "5px" }}
			>
				<Wrapper>
					<Header id="contact">Contact Us</Header>
					<Div>
						<InfoName>Sheila Whalen</InfoName>
						<InfoEmail href={`mailto:swhaler@realtalw.com`}>
							<HiOutlineMail style={{ fontSize: "25px", marginRight: "5px" }} />
							swhaler@realtalw.com
						</InfoEmail>
						<InfoPhone>
							<BiPhone style={{ fontSize: "25px", marginRight: "5px" }} />
							(514) 733-3223
						</InfoPhone>
					</Div>
				</Wrapper>
			</IconContext.Provider>
		</>
	);
}

const Wrapper = styled.div`
	font-family: "Sora", sans-serif;

	margin-top: 15px;
	margin-left: 40px;
`;

const Header = styled.div`
	/* margin-left: 40px; */
	color: #39683c;
	font-size: 40px;
`;

const InfoPhone = styled.p`
	list-style-type: none;
`;

const InfoEmail = styled.a``;

const InfoName = styled.p`
	font-size: 25px;
	color: #39683c;
	list-style-type: none;
`;


const Div = styled.div`
	display: flex;
	flex-direction: column;
	
`;

export default Contact;
