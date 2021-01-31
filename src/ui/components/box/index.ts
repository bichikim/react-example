import {Systems} from '@/ui/types'
import {ComponentType} from 'react'
import {createShouldForwardProp, props as defaultProps} from '@styled-system/should-forward-prop'
import {getSystems, SystemsMapper, SystemsProps, systemsTrueMapper, UITheme} from '@/ui'
import styled, {StyledTags} from '@emotion/styled'
import {motion} from 'framer-motion'
import {withFastMemo} from '@/hooks'

export type Props = Record<string, any>

export interface BoxProps extends SystemsProps {
}

export type BoxSystemNames = 'framer'

export type BoxSystemsMapper = SystemsMapper & Record<BoxSystemNames, boolean>

export const boxDefaultMapper: BoxSystemsMapper = {
  ...systemsTrueMapper,
  framer: false,
}

export const boxTrueMapper: BoxSystemsMapper = {
  ...systemsTrueMapper,
  framer: true,
}

const defaultBoxStyles: Systems<Props> = [
  {},
]

export interface CreateBoxOptions<P extends Props> {
  as?: StyledTags<UITheme> | ComponentType<any>
  className?: string
  shouldForwardProp?: string[]
  styles?: Systems<P>
  systems?: Partial<BoxSystemsMapper>
}

export const createBox = <P extends Props>(props: CreateBoxOptions<P>) => {
  const {
    styles = [],
    systems = {...boxDefaultMapper},
    shouldForwardProp = [],
    as = 'div',
  } = props

  const styles_ = [...defaultBoxStyles, ...styles]

  styles_.push(...getSystems(systems))

  const Emotion = styled(as as any, {
    shouldForwardProp: createShouldForwardProp([...defaultProps, ...shouldForwardProp]),
  })(...styles_ as any)

  if (systems.framer) {
    return motion.custom(Emotion)
  }

  return Emotion
}

export const Box = withFastMemo(createBox({
  systems: {
    ...boxTrueMapper,
  },
}))
