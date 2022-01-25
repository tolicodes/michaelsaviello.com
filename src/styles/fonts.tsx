import { css } from "styled-components";

import Haettenschweiler from "../assets/fonts/Haettenschweiler-Regular.ttf";

export const CSSFonts = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

  @font-face {
    font-family: "Haettenschweiler";
    src: url(${Haettenschweiler}) format("truetype");
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
`;
