import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@blood-sky/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  theme,
  createTheme,
  css,
  globalCss,
  getCssText,
  keyframes,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
