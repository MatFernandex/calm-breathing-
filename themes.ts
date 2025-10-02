import { Theme, ThemeKey } from './types';

// Using RGB values so they can be used with Tailwind's opacity modifiers e.g., bg-primary/50
export const THEMES: Record<ThemeKey, Theme> = {
  DEFAULT_PURPLE: {
    name: 'Default Purple',
    colors: {
      '--color-primary': '139 92 246', // purple-500
      '--color-primary-light': '167 139 250', // purple-400
      '--color-primary-dark': '124 58 237', // purple-600
      '--color-secondary': '86 17 151', 
      '--color-text': '226 232 240', // slate-200
      '--color-text-muted': '148 163 184', // slate-400
      '--color-bg': '15 23 42', // slate-950
      '--color-bg-offset': '30 41 59', // slate-800
      '--color-bg-transparent': '15 23 42 / 0.8',
      '--color-border': '71 85 105', // slate-700
      '--color-danger': '220 38 38', // red-600
      '--color-success': '74 222 128', // green-400
    },
  },
  FOREST_GREEN: {
    name: 'Forest Green',
    colors: {
      '--color-primary': '52 211 153', // emerald-400
      '--color-primary-light': '110 231 183', // emerald-300
      '--color-primary-dark': '5 150 105', // emerald-600
      '--color-secondary': '6 78 59', // emerald-900
      '--color-text': '229 231 235',
      '--color-text-muted': '156 163 175',
      '--color-bg': '17 24 39',
      '--color-bg-offset': '31 41 55',
      '--color-bg-transparent': '17 24 39 / 0.8',
      '--color-border': '55 65 81',
      '--color-danger': '239 68 68',
      '--color-success': '52 211 153',
    },
  },
  OCEAN_BLUE: {
    name: 'Ocean Blue',
    colors: {
      '--color-primary': '59 130 246', // blue-500
      '--color-primary-light': '96 165 250', // blue-400
      '--color-primary-dark': '37 99 235', // blue-600
      '--color-secondary': '30 58 138', // blue-900
      '--color-text': '229 231 235',
      '--color-text-muted': '156 163 175',
      '--color-bg': '16 23 42',
      '--color-bg-offset': '30 41 59',
      '--color-bg-transparent': '16 23 42 / 0.8',
      '--color-border': '51 65 85',
      '--color-danger': '239 68 68',
      '--color-success': '22 163 74',
    },
  },
};
