import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  position: ${({ position }) => position};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  flex-direction: ${({ flexDirection }) => flexDirection};
  width: ${({ width }) => width || "100%"};
  max-width: ${({ maxWidth }) => maxWidth};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems || "center"};
  border: ${({ border }) => border || "0px solid #fff"};
  margin: ${({ margin }) => (margin ? margin[0] : "0")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop[0] : "0")};
  padding: ${({ padding }) => padding || "0"};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  gap: ${({ gap }) => gap};
  @media (min-width: 524px) {
    margin: ${({ margin }) => (margin ? margin[1] : "0")};
    margin-top: ${({ marginTop }) => (marginTop ? marginTop[1] : "0")};
  }
  @media (min-width: 676px) {
    margin: ${({ margin }) => (margin ? margin[2] : "0")};
    margin-top: ${({ marginTop }) => (marginTop ? marginTop[2] : "0")};
    height: ${({ tabHeight }) => tabHeight};
  }
  @media (min-width: 952px) {
    margin: ${({ margin }) => (margin ? margin[3] : "0")};
    margin-top: ${({ marginTop }) => (marginTop ? marginTop[3] : "0")};
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: ${({ fontSize }) => fontSize};
  line-height: 120%;
  color: ${({ color }) => color || "white"};
  max-width: 750px;
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
  text-align: ${({ textAlign }) => textAlign};
  @media (max-width: 676px) {
    font-size: 16px; /* Adjust font size for smaller screens */
  }
  @media (max-width: 524px) {
    font-size: 14px; /* Adjust font size for even smaller screens */
  }
  @media (max-width: 320px) {
    font-size: 12px; /* Adjust font size for the smallest screens */
  }
  @media (min-width: 952px) {
    text-align: ${({ textAlign }) => textAlign};
  }
}`;

export const HeroImage = styled.div`
  background-image: url(${({image})=>image.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;

`;

export const MobileWrapper = styled(FlexWrapper)`
  @media (max-width: 770px) {
    display: none;
    border: 1px solid blue;
  }
`;
export const DesktopWrapper = styled(FlexWrapper)`
  @media (min-width: 770px) {
    display: none;
    border: 1px solid red;
    
  }
`;


