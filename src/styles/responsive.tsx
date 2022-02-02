import { css } from "styled-components";

export const BREAKPOINTS = {
  DESKTOP_WIDE: 1920,
  DESKTOP: 1440,
  TABLET: 1280,
  MOBILE: 768,
};

export const MIN_MOBILE = (...args: any[]) => css`
  @media (min-width: ${BREAKPOINTS.MOBILE / 16}em) {
    ${css(() => args)};
  }
`;

export const MIN_TABLET = (...args: any[]) => css`
  @media (min-width: ${BREAKPOINTS.TABLET / 16}em) {
    ${css(() => args)};
  }
`;
export const MIN_DESKTOP = (...args: any[]) => css`
  @media (min-width: ${BREAKPOINTS.DESKTOP / 16}em) {
    ${css(() => args)};
  }
`;
export const MIN_DESKTOP_WIDE = (...args: any[]) => css`
  @media (min-width: ${BREAKPOINTS.DESKTOP_WIDE / 16}em) {
    ${css(() => args)};
  }
`;
