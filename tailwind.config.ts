/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: {
          primary: colors.neutral['900'],
          'primary-hover': colors.neutral['950'],
          'primary-invert': colors.white,
          secondary: colors.neutral['600'],
          tertiary: colors.neutral['500'],
          brand: colors.indigo['700'],
          disabled: colors.neutral['400'],
          error: colors.red['600'],
          'error-emphasize': colors.red['800'],
          success: colors.green['700'],
          warning: colors.amber['700'],
          title: colors.neutral['700'],
          placeholder: colors.neutral['500'],
          hint: colors.neutral['500'],
          filled: colors.neutral['900']
        },
        bg: {
          primary: colors.white,
          'primary-hover': colors.neutral['50'],
          'primary-invert': colors.neutral['950'],
          secondary: colors.gray['200'],
          'secondary-hover': colors.gray['300'],
          tertiary: colors.neutral['50'],
          disabled: colors.neutral['100'],
          'disabled-emphasize': colors.gray['100'],
          'brand-primary': colors.indigo['700'],
          'brand-primary-emphasize': colors.indigo['800'],
          error: colors.red['600'],
          'error-emphasize': colors.red['800']
        },
        border: {
          primary: colors.neutral['200']
        },
        warning: colors.yellow['400'],
        success: colors.green['700']
      },
      fontFamily: {
        'Noto-Sans': ['Noto Sans']
      }
    }
  },
  plugins: []
}

export default config
