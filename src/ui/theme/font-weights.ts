const f300 = 300
const f400 = 400
const f500 = 500
const f100 = 100
const f700 = 700
const f900 = 900

const thin = f100
const light = f300
const regular = f400
const medium = f500
const bold = f700
const bolder = f900

export const fontWeights = {
  bold, bolder, f100, f300, f400, f500, f700, f900, light, medium, regular, thin,
}

export type FontWeights = typeof fontWeights
export type FontWeightNames = keyof FontWeights
