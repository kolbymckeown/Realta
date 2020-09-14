import React from "react";
import styled from "styled-components";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
import { IconContext } from "react-icons";
import { useWindowSize } from './helpers/Window'


function Contact() {
	const { isMobile } = useWindowSize()
	if (isMobile) {
		return (
			<WrapperM>
				<HeaderM id="contact">Contact Us</HeaderM>
				<DivM>
					<InfoNameM>Sheila Whalen</InfoNameM>
					<Click>Click on one of the links below to get in touch with us!</Click>
					<InfoM>
					<InfoEmailM href={`mailto:swhaler@realtalw.com`}>swhaler@realtalw.com</InfoEmailM>
					<InfoPhoneM href={`tel:5147333223`}>(514) 733-3223</InfoPhoneM>
					</InfoM>
				</DivM>
			</WrapperM>
		)
	}
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

const WrapperM = styled.div`
	font-family: "Sora", sans-serif;
	color: #39683c;
	margin-top: 8px;
	border-bottom: 1px solid #39683c;

`;

const HeaderM = styled.div`
	padding-left: 8px;
	font-size: 22px;
`;

const DivM = styled.div``;

const InfoNameM = styled.p`
	text-align: center;
	font-size: 20px;
`;

const InfoEmailM = styled.a``;

const InfoPhoneM = styled.a``;

const InfoM = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-bottom: 8px;
`;

const Click = styled.p`
	font-size: 15px;
	padding-left: 8px;
`;

export default Contact;
