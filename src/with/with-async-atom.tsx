import React, {FC, ReactNode, Suspense} from 'react'

export const withAsyncAtom = (Component: FC, fallback: NonNullable<ReactNode>) => {
  return (props) => {
    return (
      <Suspense fallback={fallback}>
        <Component {...props}/>
      </Suspense>
    )
  }
}
