export interface AppTheme {
  title: string;
  colors: AppThemeColors;
  fonts: AppThemeFonts;
  animation: AppThemeAnimation;
}

export interface AppThemeColors {
  primary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  disabled: string;
  placeholder: string;
  backdrop: string;
  onSurface: string;
  notification: string;
}

export interface AppThemeAnimation {
  scale: number;
}

export interface AppThemeFonts {
  regular: string;
  medium: string;
  light: string;
  thin: string;
}
