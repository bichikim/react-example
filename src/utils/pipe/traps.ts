import {createTrap} from './utils'

export const nullTrap = createTrap((result) => {
  return result === null
})

export const undefinedTrap = createTrap((result) => {
  return typeof result === 'undefined'
})

export const nilTrap = createTrap((result) => {
  return undefinedTrap(result) || nullTrap(result)
})

