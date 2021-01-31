const size1 = 0.16667
const size2 = 0.03333
const size3 = 0.03125
const size4 = 0.01786
const size5 = 0.01562
const size6 = 0.0125
const size7 = 0.00937
const size8 = 0.00833
const size9 = 0.00735
const size10 = 0.00714

const normal = 'normal'

export const letterSpacings = {
  normal, size1, size10, size2, size3, size4, size5, size6, size7, size8, size9,
}

export type LetterSpacings = typeof letterSpacings
export type LetterSpacingNames = keyof LetterSpacings

