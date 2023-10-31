"use client";

import React from "react";
import backgroundImage from "/public/images/background.png";
import Icon from "../../../public/images/icon.png";
import droidIcon from "../../../public/images/droidicon.png";
import Unlock from "../../../public/images/UnlocktheFutureofTokens.png";
import UnlockMobile from "../../../public/images/UnlocktheFutureofTokensMobile.png";
import styled from "styled-components";
import Header from '../components/Header'
import {
  FlexWrapper,
  Text,
  HeroImage,
  DesktopWrapper,
  MobileWrapper,
} from "../commonstyles/styles";

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  top: 5%;
  left: 1%;
  position: absolute;
`;
const HeaderTags = styled.div`
  display: flex;
  // margin: 20px 0px 0px 70px;
  top: 3%;
  left: 15%;
  position: absolute;
`;
const Button = styled.button`
  background-color: #476fff;
  width: 155px;
  height: 42px;
  border-radius: 6px;
  margin-right: 10px;
  position: absolute;
  top: 5%;
  left: 89%;
`;
const UnlockImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

`;
const LauncherButton = styled.button`
  position: absolute;
  top: 37%;
  left: 65%;
  border: 1px solid #476fff;
  border-radius: 5px;
  padding: 12px 36px;
  display: flex;

`;
const LauncherButtonMobile = styled.button`
  position: absolute;
  top: 120%;
  left: 8%;
  border: 1px solid #476fff;
  border-radius: 5px;
  padding: 10px 30px;
  display: flex;
 
`;
const KnowMore = styled.div`
  position: absolute;
  top: 70%;
  left: 5%;
  border-radius: 5px;
  padding: 12px 36px;
  display: flex;
  color: #476fff;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 200px;
`;

const FirstPage = () => {
  return (
  <HeroImage image={backgroundImage}>
      {/* <FlexWrapper justifyContent="space-between">
        <IconWrapper>
          <div className="w-10 mr-2">
            <img src={Icon.src} alt="icon" />
          </div>
          <div className="w-15 mt-2 ">
            <img src={droidIcon.src} alt="droid" />
          </div>
        </IconWrapper>
        <HeaderTags>
          <Text margin="3px 33px 3px 0px">What is droid?</Text>
          <Text margin="3px 33px 3px 0px">Features</Text>
          <Text margin="3px 33px 3px 0px">System</Text>
        </HeaderTags>
        <DesktopWrapper>
        <Button>Get started</Button>
        </DesktopWrapper>
      </FlexWrapper> */}
      <Header />
      <MobileWrapper>
      <FlexWrapper
        width="60rem"
        height="250px"
        alignItems="flex-end"
        position="relative"
      >
        <UnlockImg src={Unlock.src} />
        <LauncherButton>
        <Text>Open launcher</Text>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#476FFF"
          className="w-6 h-6 ml-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </LauncherButton>
      </FlexWrapper>

      </MobileWrapper>
      <DesktopWrapper>
      <FlexWrapper
        width="60rem"
        height="250px"
        alignItems="flex-end"
        position="relative"
      >
        <UnlockImg src={UnlockMobile.src} />
        <LauncherButtonMobile>
        <Text>Open launcher</Text>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#476FFF"
          className="w-6 h-6 ml-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </LauncherButtonMobile>
      </FlexWrapper>

      </DesktopWrapper>
     
     
      <KnowMore>
        <Text color="#476FFF">Know more</Text>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          />
        </svg>
      </KnowMore>
    </HeroImage>
  
  );
};

export default FirstPage;
