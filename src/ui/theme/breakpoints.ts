const breakpoints = ['40em', '52em', '64em', '80em'];

export const mediaQuery = {
  sm: `@media(min-width: ${breakpoints[0]})`,
  md: `@media(min-width: ${breakpoints[1]})`,
  lg: `@media(min-width: ${breakpoints[2]})`,
  xl: `@media(min-width: ${breakpoints[3]})`,
};

export type ThemeBreakpoints = typeof breakpoints;

export default breakpoints;
