import 'styled-components';
import { type ThemeColors } from './colors';
import { type ThemeMode } from './mode';
import { type ThemeSpaces } from './spaces';
import { type ThemeShadows } from './shadows';
import { type ThemeBreakpoints } from './breakpoints';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: ThemeMode;
    colors: ThemeColors;
    space: ThemeSpaces;
    shadow: ThemeShadows;
    breakpoints: ThemeBreakpoints;
  }
}
