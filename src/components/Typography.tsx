import styled, { css } from "styled-components";
import * as CSS from "csstype";
import { TFontSizes } from "../types/theme";

interface TTypographyProps {
  color: "grey" | "black" | "darkGrey" | "white";
  weight: "bold" | "normal" | "semiBold";
  size: TFontSizes;
  lineHeight?: number;
  clickable?: boolean;
  textAlign?: CSS.Properties["textAlign"];
  display?: CSS.Properties["display"];
}

export const typographyMixin = (props: TTypographyProps) => css`
  text-align: ${props.textAlign || "left"};
  letter-spacing: 0px;
  display: ${props.display ? `${props.display}` : "inline-block"};
  font-size: ${(p) => p.theme.default.fontSizes[props.size]};
  font-weight: ${props.weight === "bold"
    ? "bold"
    : props.weight === "semiBold"
    ? 700
    : "normal"};
  font-style: normal;
  font-variant: normal;
  line-height: ${props.lineHeight ? `${props.lineHeight}px` : "initial"};
  color: ${props.color === "black"
    ? "#262A2D"
    : props.color === "darkGrey"
    ? "#8C8F90"
    : props.color === "white"
    ? "#ffffff"
    : "#EEEEEE"};
  cursor: ${props.clickable ? "pointer" : "inherit"};
  white-space: pre-wrap;
`;

export const Typography = styled.p<TTypographyProps>`
  ${(props) => typographyMixin(props)}
`;
