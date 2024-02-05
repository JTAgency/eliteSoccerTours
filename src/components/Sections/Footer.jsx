import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoIcon from "../../assets/svg/footer_logo.png";

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <img src={LogoIcon} alt="Logo" style={{ width: "90px", height: "70px", marginRight: "0px" }} />
              <h1 className="font15 extraBold whiteColor" style={{ marginLeft: "15px" }}>
                Elite Soccer Tours
              </h1>
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} - <a href="https://www.elitesoccertours.com" className="purpleColor font13">Elite Soccer Tours</a> All Right Reserved. Developed by <a href="https://www.jartechagency.com" className="purpleColor font13">JarTech</a>
            </StyleP>

            <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
              Back to top
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;