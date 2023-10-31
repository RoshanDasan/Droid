"use client";

import React from "react";
import Background from "../../../public/images/DroidWhiteBG.png";
import WhatIsDroidImage from "../../../public/images/WhatisDroid.png";
import styled from "styled-components";

const HeroImage = styled.div`
  background-image: url(${({ image }) => image.src});
  width: 100%;
  height: 40vh;
  //   background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 200px;
`;

function WhatIsDroid() {
  return (
      <HeroImage image={Background} />
  );
}

export default WhatIsDroid;
