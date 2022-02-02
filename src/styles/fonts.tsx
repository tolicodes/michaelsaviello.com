import { css } from "styled-components";

import Haettenschweiler from "../assets/fonts/Haettenschweiler-Regular.ttf";

export const CSSFonts = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

  :root {
    --font-families-haetten: "Haettenschweiler";
    --font-families-roboto: "Roboto", sans-serif;

    --line-heights-0: 2.25rem;
    --line-heights-1: 1.5rem;
    --line-heights-2: 1.25rem;
    --line-heights-3: 1rem;
    --line-heights-4: 0.875rem;
    --line-heights-5: 0.75rem;
    --line-heights-6: 1.125rem;

    --font-weights-0: 700;
    --font-weights-1: 600;
    --font-weights-2: 500;
    --font-weights-3: 400;

    --font-size-0: 0.5rem;
    --font-size-1: 0.5625rem;
    --font-size-2: 0.6875rem;
    --font-size-3: 0.75rem;
    --font-size-4: 0.875rem;
    --font-size-5: 1rem;
    --font-size-6: 1.125rem;
    --font-size-7: 1.5rem;
    --font-size-8: 1.625rem;
    --font-size-9: 2rem;

    --letter-spacing-0: -1%;
    --letter-spacing-1: 0%;
    --letter-spacing-2: 6%;
    --letter-spacing-3: 8%;
    --letter-spacing-4: 5%;

    --paragraph-spacing-0: 0;
    --text-case-none: none;
    --text-case-uppercase: uppercase;
    --text-decoration-none: none;
  }

  @font-face {
    font-family: var(--font-families-haetten);
    src: url(${Haettenschweiler}) format("truetype");
    font-weight: var(--font-weights-3);
  }

  body {
    font-size: 18px;
    font-family: var(--font-families-roboto);
  }
`;

export const CSSRobotoParagraphg01 = css`
  font-family: var(--font-families-roboto);
  font-weight: var(--font-weights-3);
  font-size: var(--font-size-5);
  text-decoration: var(--text-decoration-none);
`;

export const CSSHaettenParagraphg01 = css`
  font-family: var(--font-families-haetten);
  font-weight: var(--font-weights-3);
  font-size: var(--font-size-7);
  text-decoration: var(--text-decoration-none);
  text-transform: var(--text-case-uppercase);
`;

export const CSSCalendarEventLabel01 = css`
  ${CSSRobotoParagraphg01};
`;

export const CSSButtonLabel01 = css`
  font-family: var(--font-families-haetten);
  font-weight: var(--font-weights-3);
  font-size: var(--font-size-7);
  text-decoration: var(--text-decoration-none);
  text-transform: var(--text-case-uppercase);
`;
