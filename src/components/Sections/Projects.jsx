import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/clients1.jpg";
import ProjectImg2 from "../../assets/img/projects/clients2.jpg";
import ProjectImg3 from "../../assets/img/projects/clients3.jpg";
import ProjectImg4 from "../../assets/img/projects/clients4.jpg";
import ProjectImg5 from "../../assets/img/projects/clients5.jpg";
import ProjectImg6 from "../../assets/img/projects/clients6.jpg";
import AddImage2 from "../../assets/img/add/wc2026.jpg";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Clients</h1>
            <p className="font13">
              Explore the joy of soccer tours through the lens of our fantastic clients. Join us and be part of 
              <br />
              the unforgettable moments that make our community so special.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Awesome Client 1"
                text="I need some descriptions for each of these pictures. Please send me a description for each."
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="Awesome Client 2"
                text="I need some descriptions for each of these pictures. Please send me a description for each."
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="Awesome Client 3"
                text="I need some descriptions for each of these pictures. Please send me a description for each."
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                title="Awesome Client 4"
                text="I need some descriptions for each of these pictures. Please send me a description for each."              
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg5}
                title="Awesome Client 5"
                text="I need some descriptions for each of these pictures. Please send me a description for each."              
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                title="Awesome Client 6"
                text="I need some descriptions for each of these pictures. Please send me a description for each."
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              {/* <FullButton title="Load More" action={() => alert("clicked")} /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">The next big event</h4>
              <h2 className="font40 extraBold">FIFA World Cup 2026</h2>
              <p className="font12">
                Get ready for the soccer event of the decade! Secure your spot with us for exclusive access, thrilling experiences, and a front-row view of the
                World Cup 2026 action. Don't miss out on the football fever – reserve your unforgettable journey now with Elite Soccer Tours.
              </p>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                {/* <div style={{ width: "190px" }}>
                  <FullButton title="Get Started" action={() => alert("clicked")} />
                </div> */}
                <li className="semiBold font15 pointer" style={{ listStyle: 'none' }}>
                  <Link activeClass="active" style={{ padding: "10px 15px", textDecoration: 'none' }} to="contact" spy={true} smooth={true} offset={-80}>
                    <div style={{ width: "190px", marginLeft: "15px" }}>
                      <FullButton title="Contact Us" border />
                    </div>
                  </Link>
                </li>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
