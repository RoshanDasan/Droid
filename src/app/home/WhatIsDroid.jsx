"use client";

import React from "react";
import Background from "../../../public/images/DroidWhiteBG.png";
import BackgroundMobile from "../../../public/images/DroidWhiteBGMobile.png";
import WhatIsDroidImage from "../../../public/images/WhatisDroid.png";
import styled from "styled-components";
import {
  // HeroImage,
  Text,
  MobileWrapper,
  DesktopWrapper,
} from "../commonstyles/styles";

export const HeroImage = styled.div`
  background-image: url(${({ image }) => image.src});
  background-repeat: no-repeat;
  background-size: cover;
  width: ${({ width }) => width || "97%"};
  height: ${({ height }) => height || "100vh"};
  position: absolute;
  top: 94%;
`;

const Wrapper = styled.div`
  display: flex;
  margin-left: 30px;
  margin-top: 50px;
  align-items: center;
`;
const WhatIsDroidImageWrapper = styled.img`
  height: ${({height})=> height || "100px"};
  width: auto;
  margin: 20px 40px 20px 30px;
`;

function WhatIsDroid() {
  return (
    <>
      <MobileWrapper>
        <HeroImage image={Background} height="40vh">
          <Wrapper>
            <WhatIsDroidImageWrapper src={WhatIsDroidImage.src} alt="img" />
            <Text color="#c7c6c3" margin="20px">
              Droid is an innovative and user-friendly platform that simplifies
              creating digital tokens for both individuals and organizations. By
              integrating straightforward processes with advanced technology,
              Droid removes the complexities of blockchain and smart contract
              development. With just a few clicks, users can connect their
              wallet, choose settings, and launch their own tokens, no coding
            </Text>
          </Wrapper>
        </HeroImage>
      </MobileWrapper>
      <DesktopWrapper>
        <HeroImage image={BackgroundMobile} height="40vh">
          <WhatIsDroidImageWrapper src={WhatIsDroidImage.src} alt="img" />
          <Text color="#c7c6c3" margin="20px">
            Droid is an innovative and user-friendly platform that simplifies
            creating digital tokens for both individuals and organizations. By
            integrating straightforward processes with advanced technology,
            Droid removes the complexities of blockchain and smart contract
            development. With just a few clicks, users can connect their wallet,
            choose settings, and launch their own tokens, no coding
          </Text>
        </HeroImage>
      </DesktopWrapper>
    </>
  );
}

export default WhatIsDroid;
