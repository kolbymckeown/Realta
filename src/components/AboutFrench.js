import React from "react";
import styled from "styled-components";
import { useWindowSize } from "./helpers/Window";

function AboutFrench() {
  const { isMobile } = useWindowSize();
  if (isMobile) {
    return (
      <WrapperM>
        <HeaderM id="about">Découvrez-nous</HeaderM>
        <InfoM>
          Depuis 2010, Realta mène la charge en fournissant aux compagnies
          aériennes des produits de nettoyage appropriés pour entretenir les
          composants vitaux des avions.
        </InfoM>
      </WrapperM>
    );
  }

  return (
    <>
      <Wrapper>
        <Header id="about">Découvrez-nous</Header>
        <Info>
			Depuis 2010, Realta mène la charge en fournissant aux compagnies
          aériennes des produits de nettoyage appropriés pour entretenir les
          composants vitaux des avions.
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

export default AboutFrench;
