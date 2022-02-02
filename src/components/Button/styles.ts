import styled, { css } from "styled-components";
import { CSSButtonLabel01 } from "../../styles/fonts";
import {
  MIN_MOBILE,
  MIN_TABLET,
  MIN_DESKTOP,
  MIN_DESKTOP_WIDE,
} from "../../styles/responsive";

import { ButtonType } from "./Button";

interface IButton {
  color?: string;
  labelColor?: string;
  type?: string;
}

const CSSHover = css``;

const CSSActive = css``;

export const Default = css<IButton>`
  padding: 8px 25px;

  background-color: ${({ color, type }) =>
    type === ButtonType.OUTLINE
      ? "transparent"
      : color
      ? color
      : "var(--ui-button-01)"};

  border: ${({ color, type }) =>
    type === ButtonType.OUTLINE && color ? `1px solid ${color}` : "none"};

  outline: none;

  ${CSSButtonLabel01};
  color: ${(props) =>
    props.labelColor ? props.labelColor : "var(--ui-button-text-01)"};

  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    ${CSSHover}
  }

  &:active {
    ${CSSActive}
  }
`;
const Mobile = css``;

const Tablet = css``;

const Desktop = css``;

const DesktopWide = css``;

export const SButton = styled.button`
  ${Default}
  ${MIN_MOBILE`${Mobile}`};
  ${MIN_TABLET`${Tablet}`};
  ${MIN_DESKTOP`${Desktop}`};
  ${MIN_DESKTOP_WIDE`${DesktopWide}`};
`;
