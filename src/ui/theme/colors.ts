import { type KeyPaths } from '@ui/types/KeyPaths';

export const mainColors = {
  primary: '#019DF4',
  secondary: '#0B2739',
};

export const hightLightColors = {
  'blue-10': '#E6F5FD',
  'blue-20': '#B3E1FB',
  'blue-30': '#80CEF9',
  'blue-40': '#4DBAF7',
  'blue-55': '#008EDD',
  green: '#5CB615',
  'green-10': '#EFF8E8',
  'green-30': '#ADDA8A',
  'green-40': '#8DCC5B',
  'green-60': '#499110',
  'green-70': '#3C7521',
  purple: '#A13EA1',
  'purple-light': '#DEBCE4',
  'purple-dark': '#642A72',
  magenta: '#E63780',
  'magenta-light': '#FBC7DE',
  'magenta-dark': '#922859',
  orange: '#EC624B',
  'orange-light': '#F8CCCC',
  'orange-dark': '#983230',
  yellow: '#F28D15',
  'yellow-light': '#F8D2B3',
  'yellow-dark': '#9F591F',
};

export const grayColors = {
  'gray-1': '#F6F6F6',
  'gray-2': '#EEEEEE',
  'gray-3': '#DDDDDD',
  'gray-4': '#999999',
  'gray-5': '#86888C',
  'gray-6': '#313235',
  'gray-blue-1': '#E8EBED',
  'gray-blue-2': '#CED4D7',
  'gray-blue-3': '#85939C',
  'gray-blue-4': '#6D7D88',
  'gray-blue-5': '#3C5261',
  'gray-blue-dark-1': '#081F2E',
  'gray-blue-dark-2': '#061824',
};

export const buttonStatusColors = {
  'button-blue-movistar-inactive': hightLightColors['blue-30'],
  'button-blue-movistar-normal': mainColors.primary,
  'button-blue-movistar-selected': hightLightColors['blue-55'],
  'button-blue-dark-movistar-inactive': '#A3ADB4',
  'button-blue-dark-movistar-normal': mainColors.secondary,
  'button-blue-dark-movistar-selected': '#062E48',
  'button-green-inactive': hightLightColors['green-30'],
  'button-green-normal': hightLightColors.green,
  'button-green-selected': hightLightColors['green-60'],
  'button-red-error': '#FF374A',
};

export const textColors = {
  'text-gray-4': grayColors['gray-4'],
  'text-gray-5': grayColors['gray-5'],
  'text-gray-6': grayColors['gray-6'],
  'text-blue-movistar-inactive': hightLightColors['blue-30'],
  'text-blue-movistar-normal': mainColors.primary,
  'text-blue-movistar-dark': hightLightColors['blue-55'],
  'text-red-error': '#FF374A',
};

export const lowBackgroundColors = {
  'promo-low': '#F6ECF6',
  'error-low': '#FFEBED',
  'warning-low': '#FEF4E8',
};

export const gradientColors = {
  'brand-low':
    'linear-gradient(180deg, #FFFFFF 10.94%, #F5F5F5 51.56%, #FFFFFF 90.1%)',
};

const colors = {
  ...mainColors,
  ...hightLightColors,
  ...grayColors,
  ...buttonStatusColors,
  ...textColors,
  ...lowBackgroundColors,
  ...gradientColors,
};

export type ThemeColors = typeof colors;

export type ThemeColorPaths = KeyPaths<ThemeColors>;

export default colors;
