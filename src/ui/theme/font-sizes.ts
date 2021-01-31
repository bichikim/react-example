/**
 * 0.75
 */
const size1 = 0.75
const size2 = 0.875
const size3 = 1
const size4 = 1.25
const size5 = 1.5
const size6 = 2.125
const size7 = 3
/**
 * 3.75rem
 */
const size8 = 3.75
/**
 * 6rem
 */
const size9 = 6

export const fontSizes = {
  size1, size2, size3, size4, size5, size6, size7, size8, size9,
}

export type FontSizes = typeof fontSizes

export type FontSizeNames = keyof FontSizes
