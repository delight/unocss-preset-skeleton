import type { SkeletonTheme } from '../types';

const seafoam: SkeletonTheme = {
  name: 'seafoam',
  properties: {
    '--theme-font-family-base':
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    '--theme-font-family-heading': '"Playfair Display", serif',
    '--theme-font-color-base': 'var(--color-surface-900)',
    '--theme-font-color-dark': 'var(--color-secondary-100)',
    '--theme-rounded-base': '16px',
    '--theme-rounded-container': '16px',
    '--theme-border-base': '3px',
    '--on-primary': '0 0 0',
    '--on-secondary': '255 255 255',
    '--on-tertiary': '255 255 255',
    '--on-success': '0 0 0',
    '--on-warning': '0 0 0',
    '--on-error': '255 255 255',
    '--on-surface': '0 0 0',
    '--color-primary-50': '237 248 247',
    '--color-primary-100': '231 246 245',
    '--color-primary-200': '225 243 242',
    '--color-primary-300': '207 236 234',
    '--color-primary-400': '170 222 219',
    '--color-primary-500': '134 208 203',
    '--color-primary-600': '121 187 183',
    '--color-primary-700': '101 156 152',
    '--color-primary-800': '80 125 122',
    '--color-primary-900': '66 102 99',
    '--color-secondary-50': '222 224 230',
    '--color-secondary-100': '211 214 221',
    '--color-secondary-200': '200 204 213',
    '--color-secondary-300': '166 173 187',
    '--color-secondary-400': '100 112 136',
    '--color-secondary-500': '33 51 85',
    '--color-secondary-600': '30 46 77',
    '--color-secondary-700': '25 38 64',
    '--color-secondary-800': '20 31 51',
    '--color-secondary-900': '16 25 42',
    '--color-tertiary-50': '255 226 217',
    '--color-tertiary-100': '255 216 204',
    '--color-tertiary-200': '255 207 191',
    '--color-tertiary-300': '255 177 153',
    '--color-tertiary-400': '255 119 77',
    '--color-tertiary-500': '255 61 0',
    '--color-tertiary-600': '230 55 0',
    '--color-tertiary-700': '191 46 0',
    '--color-tertiary-800': '153 37 0',
    '--color-tertiary-900': '125 30 0',
    '--color-success-50': '218 251 241',
    '--color-success-100': '205 250 236',
    '--color-success-200': '193 249 232',
    '--color-success-300': '155 245 218',
    '--color-success-400': '81 237 190',
    '--color-success-500': '6 229 162',
    '--color-success-600': '5 206 146',
    '--color-success-700': '5 172 122',
    '--color-success-800': '4 137 97',
    '--color-success-900': '3 112 79',
    '--color-warning-50': '252 251 230',
    '--color-warning-100': '251 250 221',
    '--color-warning-200': '250 249 213',
    '--color-warning-300': '247 245 188',
    '--color-warning-400': '240 237 137',
    '--color-warning-500': '234 229 87',
    '--color-warning-600': '211 206 78',
    '--color-warning-700': '176 172 65',
    '--color-warning-800': '140 137 52',
    '--color-warning-900': '115 112 43',
    '--color-error-50': '248 227 227',
    '--color-error-100': '246 218 218',
    '--color-error-200': '244 209 209',
    '--color-error-300': '237 181 181',
    '--color-error-400': '224 126 126',
    '--color-error-500': '210 70 70',
    '--color-error-600': '189 63 63',
    '--color-error-700': '158 53 53',
    '--color-error-800': '126 42 42',
    '--color-error-900': '103 34 34',
    '--color-surface-50': '222 248 249',
    '--color-surface-100': '211 246 246',
    '--color-surface-200': '201 244 244',
    '--color-surface-300': '168 237 238',
    '--color-surface-400': '102 223 225',
    '--color-surface-500': '37 209 212',
    '--color-surface-600': '33 188 191',
    '--color-surface-700': '28 157 159',
    '--color-surface-800': '22 125 127',
    '--color-surface-900': '18 102 104',
  },
  enhancements: {
    '[data-theme="seafoam"] h1,[data-theme="seafoam"] h2,[data-theme="seafoam"] h3,[data-theme="seafoam"] h4,[data-theme="seafoam"] h5,[data-theme="seafoam"] h6':
      { 'font-weight': 'bold', 'font-style': 'italic', 'letter-spacing': '1px' },
    '[data-theme="seafoam"]': {
      background:
        'linear-gradient(0deg, rgba(203, 221, 254, 0.75) 0%, rgba(163, 209, 206, 0.75) 100%)',
      'background-attachment': 'fixed',
      'background-position': 'center',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
    },
    '.dark [data-theme="seafoam"]': {
      background: 'linear-gradient(0deg, rgba(33, 50, 83, 1) 0%, rgba(8, 132, 124, 1) 100%)',
      'background-attachment': 'fixed',
      'background-position': 'center',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
    },
  },
};

export default seafoam;
