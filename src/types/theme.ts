export interface TextTheme {
  size: number;
  weight: string | number;
  height?: number;
  opacity?: number;
}

export interface Theme {
  colors: {
    primaryColor: string;
    accentColor: string;
    bgPrimaryColor: string;
    bgAccentColor: string;
    bgPrimaryColor2: string;
    bgPrimaryColor3: string;
  };
  fontSizes: {
    [k in TFontSizes]: string;
  };
}

export interface AppTheme {
  // screenWidth: number;
  default: Theme;
  // resolved: ITheme;
}

export type TFontSizes =
  | "small"
  | "medium"
  | "large"
  | "large2"
  | "header"
  | "tiny"
  | "landingHeader";
