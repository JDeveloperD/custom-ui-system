import { type DefaultTheme } from 'styled-components';
import colors from './colors';
import breakpoints from './breakpoints';
import spaces from './spaces';
import shadows from './shadows';

const theme: DefaultTheme = {
  mode: 'light',
  colors,
  space: spaces,
  shadow: shadows,
  breakpoints,
};

export default theme;
