const size1 = 1.25
const size2 = 2
const size3 = 1.375
const size4 = 1.5
const size5 = 1.75
const size6 = 2
const size7 = 2.5
const size8 = 3.125
const size9 = 3.75
const size10 = 6

export const lineHeights = {
  size1, size10, size2, size3, size4, size5, size6, size7, size8, size9,
}

export type LineHeights = typeof lineHeights
export type LineHeightNames = keyof LineHeights
