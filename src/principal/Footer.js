import React from "react";
import styled from "styled-components";
import dd from "./img/dd.png";

const FooterContainer = styled.footer`
  background-color: #282c34;
  color: white;
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row; /* Modification ici pour avoir une disposition en ligne */
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

const FooterText = styled.p`
  font-size: 14px;
  margin: 5px 0; /* Ajustement de l'espacement ici */
`;

const FooterHeading = styled.h2`
  font-size: 18px;
  margin: 5px 0; /* Ajustement de l'espacement ici */
`;

const HorizontalLine = styled.hr`
  margin: 20px 0;
  width: 100%;
  border-color: white;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Column>
        <Logo src={dd} alt="Logo EBDev" />
        <FooterText>
          EBDev
          <br />
          Djibril Drame
          <br />
          DEVELOPPEUR FRONT-END
          <br />
          3 rue Niepce
          <br />
          93110 Rosny Sous Bois
          <br />
          FRANCE
          <br />
          PORT. : +33 6 51 62 27 85
        </FooterText>
      </Column>
      <Column>
        <FooterHeading>Société</FooterHeading>
        <FooterText>Contact</FooterText>
      </Column>
      <Column>
        <FooterHeading>Navigation</FooterHeading>
        <FooterText>Mes services</FooterText>
        <FooterText>Compétences</FooterText>
        <FooterText>Portfolio</FooterText>
      </Column>
      <Column>
        <FooterHeading>Réseaux</FooterHeading>
        <FooterText>Github</FooterText>
        <FooterText>Linkden</FooterText>
      </Column>
      <HorizontalLine />
      <FooterText>© 2023 developed withby DD</FooterText>
      <FooterText>Stack utilisé : React . Styled-components</FooterText>
    </FooterContainer>
  );
};

export default Footer;
