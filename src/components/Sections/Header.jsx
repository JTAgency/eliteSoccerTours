import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
// import HeaderImage from "../../assets/img/header_pic.png";
import HeaderVideo from "../../assets/header.mp4";
// import LogoIcon from "../../assets/svg/logo_transparent.png";
// import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <LogoContainer>  
            <h1 className="extraBold font60">Score Your Elite Soccer Tour With Us</h1>
            {/* <LogoImage src={LogoIcon} alt="Logo" style={{ maxWidth: '10rem', height: 'auto', marginRight: '10px' }} /> */}
          </LogoContainer>
          <HeaderP className="font13 semiBold">
            Explore your passion for soccer with our dream tours. Unforgettable experiences await at iconic stadiums worldwide. Kick off your adventure today!
          </HeaderP>
          <li className="semiBold font15 pointer" style={{ listStyle: 'none' }}>
            <Link activeClass="active" style={{ padding: "10px 15px", textDecoration: 'none' }} to="contact" spy={true} smooth={true} offset={-80}>
              <BtnWrapper>
                <FullButton title="Get Started" /> 
              </BtnWrapper>
            </Link>
          </li>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Video className="radius8" autoPlay muted loop playsInline style={{zIndex: 9}}>
            <source src={HeaderVideo} type="video/mp4" />
              Your browser does not support the video tag.
          </Video>
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        
        {/* <ImageWrapper>
          <Img className="radius8" src={HeaderImage} alt="office" style={{zIndex: 9}} />
          <QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>The soccer tour exceeded my expectations. Unforgettable matches, iconic stadiums, and a personalized touch made it a standout experience.</em>
              </p>
              <p className="font13 orangeColor textRight" style={{marginTop: '10px'}}>Julian</p>
            </div>
          </QuoteWrapper>
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper> */}
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  padding-top: 0px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
    margin-top:80px;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;  // Adjust the layout to a column
  align-items: center;     // Center the content horizontally
  justify-content: center; // Center the content vertically
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 0px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 0px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 0px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 2.0rem;
  font-size: 1.0rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;

const Video = styled.video`
  height: 40rem;
  
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;

// const LogoImage = styled.img`
//   // Add any additional styling for the logo if needed
// `;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px; // Adjust as needed
`;


// const Img = styled.img`
//   @media (max-width: 560px) {
//     width: 80%;
//     height: auto;
//   }
// `;
// const QuoteWrapper = styled.div`
//   position: absolute;
//   left: 0;
//   bottom: 50px;
//   max-width: 330px;
//   padding: 30px;
//   z-index: 99;
//   @media (max-width: 960px) {
//     left: 20px;
//   }
//   @media (max-width: 560px) {
//     bottom: -50px;
//   }
// `;
// const QuotesWrapper = styled.div`
//   position: absolute;
//   left: -20px;
//   top: -10px;
// `;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;


