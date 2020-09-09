import {produce} from 'immer'
import {useState} from 'react'

const createNoReturn = (recipe) => (draft) => {
  recipe(draft)
}

interface UseImmerOptions {
  noReturn?: boolean
}


type Recipe<P> = (draft: P) => any
type Produce<P> = (recipe: Recipe<P>) => void

export const useImmer = <P = undefined>(initState: P, options: UseImmerOptions = {}): [P, Produce<P>] => {
  const [state, setState] = useState(initState)
  const {noReturn = true} = options

  const setProduce = (recipe: Recipe<P>) => {
    const _recipe = noReturn ? createNoReturn(recipe) : recipe

    setState(produce(_recipe) as any)
  }

  return [state, setProduce]
}
