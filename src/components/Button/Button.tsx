import * as React from "react";
import { SButton } from "./styles";

export enum ButtonType {
  DEFAULT = "default",
  OUTLINE = "outline",
}

interface ButtonProps {
  type?: ButtonType;
  color?: string;
  labelColor?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  type = ButtonType.DEFAULT,
  color,
  labelColor,
  children = "Demo BTN",
}) => {
  return (
    <SButton type={type} color={color} labelColor={labelColor}>
      {children}
    </SButton>
  );
};
