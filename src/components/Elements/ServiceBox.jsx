import React from "react";
import styled from "styled-components";
// Assets
import ticketImage from "../../assets/svg/Services/ticket.jpg"; 
import stadiumImage from "../../assets/svg/Services/stadium.jpg";
import accommodationImage from "../../assets/svg/Services/accommodation.jpg";
import busImage from "../../assets/svg/Services/bus.jpg";
import RollerIcon from "../../assets/svg/Services/RollerIcon";

export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <img src={ticketImage} alt="Ticket" style={{width: '80px'}}/>;
      break;
    case "monitor":
      getIcon = <img src={stadiumImage} alt="Ticket" style={{width: '80px'}}/>;
      break;
    case "browser":
      getIcon = <img src={accommodationImage} alt="Ticket" style={{width: '80px'}}/>;
      break;
    case "printer":
      getIcon = <img src={busImage} alt="Ticket" style={{width: '80px'}}/>;
      break;
    default:
      getIcon = <RollerIcon />;
      break;
  }


  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;