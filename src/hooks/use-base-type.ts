import {isValidElement, ReactNode} from 'react'

const diveType = (type) => {

  if (type.type && Boolean(type.$$typeof)) {
    return diveType(type.type)
  }

  return type
}

export const useBaseType = (child: ReactNode): undefined | symbol => {

  if (!isValidElement(child)) {
    return
  }

  return diveType(child.type)
}
