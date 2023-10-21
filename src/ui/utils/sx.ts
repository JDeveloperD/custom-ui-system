import css, {
  type CssFunctionReturnType,
  type SystemCssProperties,
  type SystemStyleObject,
} from '@styled-system/css';
import {
  type ColorProps,
  type BorderColorProps,
  type ShadowProps,
} from 'styled-system';
import { type ThemeColorPaths } from '../theme/colors';
import { type ThemeShadowPaths } from '@ui/theme';

export type BetterCssProperties = {
  [K in keyof SystemCssProperties]: K extends keyof ColorProps
    ? ThemeColorPaths | SystemCssProperties[K]
    : K extends keyof BorderColorProps
    ? ThemeColorPaths | SystemCssProperties[K]
    : K extends keyof ShadowProps
    ? ThemeShadowPaths | SystemCssProperties[K]
    : SystemCssProperties[K];
};

// Support CSS custom properties in the `sx` prop
export type CSSCustomProperties = Record<`--${string}`, string | number>;

type CSSSelectorObject = Record<
  string,
  SystemStyleObject | CSSCustomProperties
>;

export type BetterSystemStyleObject =
  | BetterCssProperties
  | SystemStyleObject
  | CSSCustomProperties
  | CSSSelectorObject;

export interface SxProp {
  sx?: BetterSystemStyleObject;
}

const sx = (props: SxProp): CssFunctionReturnType => css(props.sx);

export function shouldForwardProp(
  props: string[] | undefined = [],
): (prop: string) => boolean {
  const blackList = ['sx', 'as'].concat(props);

  return (prop: string) => !blackList.includes(prop);
}

export default sx;
