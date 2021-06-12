import React, {FC, ReactNode, Suspense} from 'react'

export const withAsyncAtom = (Component: FC, fallback: NonNullable<ReactNode>) => {
  return () => {
    return (
      <Suspense fallback={fallback}>
        <Component/>
      </Suspense>
    )
  }
}
