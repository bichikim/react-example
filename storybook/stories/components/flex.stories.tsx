import {Flex} from '@/ui/flex'
import React from 'react'

export default {
  title: 'components/flex',
}

export const Default = (args) => (
  <Flex bg={'WhiteSmoke'} color={'white'} gap={10} inheritItems={{omit: ['gap']}} inheritProps={{p: 10}}>
    <Flex bg='Tomato' color='white' range={args.range}>{args.range}</Flex>
    <Flex bg={'Silver'}>auto</Flex>
  </Flex>
)

Default.args = {
  range: 'space',
}

Default.argTypes = {
  range: {
    control: {
      options: ['space', 'auto'],
      type: 'radio',
    },
    defaultValue: 'auto',
    description: 'taking space range',
    type: 'enum',
  },
}

export const Range = (args) => {
  const {range} = args
  const elseRange = (12 - range) / 2
  return (
    <Flex bg='WhiteSmoke' column gap={10} width='100%'>
      <Flex division={12} inheritItems={{pick: []}} inheritProps={{p: 10}}>
        <Flex bg='Silver' range={elseRange}>{elseRange}</Flex>
        <Flex bg='Tomato' color={'white'} range={range}>{range}</Flex>
        <Flex bg='Silver' range={elseRange}>{elseRange}</Flex>
      </Flex>
      <Flex division={12} gap={10} inheritItems={{pick: []}} inheritProps={{p: 10}}>
        <Flex bg='Silver' range={elseRange}>{elseRange}</Flex>
        <Flex bg='Tomato' color={'white'} range={range}>{range}</Flex>
        <Flex bg='Silver' range={elseRange}>{elseRange}</Flex>
      </Flex>
      <Flex division={12} inheritItems={{pick: []}} inheritProps={{bg: 'Silver', p: 10, range: 1}}>
        <Flex>1</Flex>
        <Flex>1</Flex>
        <Flex>1</Flex>
        <Flex>1</Flex>
        <Flex>1</Flex>
        <Flex>1</Flex>
        <Flex>1</Flex>
        <Flex>1</Flex>
        <Flex>1</Flex>
        <Flex>1</Flex>
        <Flex>1</Flex>
        <Flex>1</Flex>
      </Flex>
    </Flex>
  )
}

Range.args = {
  range: 8,
}

Range.argTypes = {
  range: {
    control: {
      max: 8,
      min: 1,
      type: 'range',
    },
    defaultValue: 8,
    description: 'taking space range',
    type: 'number',
  },
}

export const Wrap = (args) => {
  const {wrap} = args
  return (
    <Flex bg='WhiteSmoke' gap={10} inheritItems={[]} inheritProps={{basis: '30%', bg: 'Silver', p: 10}} wrap={wrap}>
      <Flex bg='Tomato' color='white' range='space'>30% space</Flex>
      <Flex>30% auto</Flex>
      <Flex>30% auto</Flex>
      <Flex>30% auto</Flex>
      <Flex>30% auto</Flex>
    </Flex>
  )
}

Wrap.argTypes = {
  wrap: {
    control: {
      type: 'boolean',
    },
    defaultValue: true,
    description: 'wrap space',
    table: {
      defaultValue: {summary: true},
    },
    type: 'boolean',
  },
}

export const Layout = (args) => {
  const {height, width} = args
  return (
    <Flex column gap={10} inheritItems={['gap']}>
      <Flex bg='WhiteSmoke' height={height} inheritItems={[]} inheritProps={{basis: '30%', bg: 'Silver', p: 10}} wrap>
        <Flex bg='Tomato' color='white' range='space'>30% space</Flex>
        <Flex>30% auto</Flex>
        <Flex>30% auto</Flex>
        <Flex>30% auto</Flex>
        <Flex>30% auto</Flex>
      </Flex>
      <Flex bg='WhiteSmoke' column height={100} inheritItems={[]} inheritProps={{basis: '30%', bg: 'Silver', p: 10}} width={width} wrap>
        <Flex bg='Tomato' color='white' range='space'>30% space</Flex>
        <Flex >30% auto</Flex>
        <Flex >30% auto</Flex>
        <Flex >30% auto</Flex>
        <Flex >30% auto</Flex>
      </Flex>
    </Flex>
  )
}

Layout.argTypes = {
  height: {
    control: {
      max: 400,
      min: 100,
      type: 'range',
    },
    defaultValue: 200,
    description: 'wrap space',
    table: {
      defaultValue: {summary: 'undefined'},
      type: {summary: 'number | auto | % | px'},
    },
  },
  size: {
    description: 'set width & height',
    table: {
      defaultValue: {summary: 'undefined'},
      type: {summary: 'number | auto | % | px'},
    },
  },
  width: {
    control: {
      max: 600,
      min: 300,
      type: 'range',
    },
    defaultValue: 300,
    description: 'wrap space',
    table: {
      defaultValue: {summary: 'undefined'},
      type: {summary: 'number | auto | % | px'},
    },
  },
}

export const SwapElement = () => {
  return (
    <Flex>
      <Flex as={'header'} bg='Tomato' color='white' p={10} range='space'>space</Flex>
      <Flex as={'aside'} bg='Silver' p={10}>auto</Flex>
    </Flex>
  )
}

export const Show = (args) => {
  const {show} = args
  return (
    <Flex bg={'WhiteSmoke'} color={'white'} gap={10} inheritItems={['color', 'p']} p={10}>
      <Flex bg={'Tomato'} range={'space'} show={show}>space</Flex>
      <Flex bg={'Silver'}>auto</Flex>
    </Flex>
  )
}

Show.argTypes = {
  show: {
    control: {
      type: 'boolean',
    },
    defaultValue: true,
    description: 'show (display) elements or not',
    table: {
      defaultValue: {summary: true},
    },
    type: 'boolean',
  },
}

export const Reverse = (args) => {
  const {reverse} = args
  return (
    <Flex bg={'WhiteSmoke'} color={'white'} gap={10} inheritItems={['color', 'p']} p={10} reverse={reverse}>
      <Flex bg={'Tomato'} range={'space'}>space</Flex>
      <Flex bg={'Silver'}>auto</Flex>
    </Flex>
  )
}

Reverse.argTypes = {
  reverse: {
    control: {
      type: 'boolean',
    },
    defaultValue: true,
    description: 'reverse flex order',
    table: {
      defaultValue: {summary: true},
    },
    type: 'boolean',
  },
}

export const Responsive = () => {
  return (
    <Flex bg={'WhiteSmoke'} color={'white'} column gap={10} inheritItems p={10}>
      <Flex inherit={{pass: true, pick: ['bg', 'gap', 'color']}} inheritItems>
        <Flex bg={['Silver', 'Tomato']} range={'space'}>space</Flex>
        <Flex bg={'Tomato'} show={[true, false, false]}>mobile show</Flex>
      </Flex>
      <Flex column={[true, false]} inherit={{pass: true, pick: ['bg', 'gap', 'color']}} inheritItems range={'space'}>
        <Flex bg={'Silver'}>row 1</Flex>
        <Flex bg={'Silver'}>row 2</Flex>
        <Flex bg={'Silver'}>row 3</Flex>
        <Flex bg={'Silver'}>row 4</Flex>
      </Flex>
    </Flex>
  )
}

export const Offset = () => {
  return (
    <Flex column>
      <Flex division={12}>
        <Flex bg='Tomato' p={10} range={'space'}>3 & offset 3</Flex>
        <Flex bg='Silver' offset={1} p={10} range={1}>1 & offset 1</Flex>
      </Flex>
      <Flex division={12}>
        <Flex bg='Tomato' offset={3} p={10} range={3}>3 & offset 3</Flex>
        <Flex bg='Silver' offset={3} p={10} range={3}>3 & offset 3</Flex>
      </Flex>
      <Flex division={12} inheritItems inheritProps={{bg: 'Silver', p: 10, range: 1}}>
        <Flex>1</Flex>
        <Flex>1</Flex>
        <Flex>1</Flex>
        <Flex>1</Flex>
        <Flex>1</Flex>
        <Flex>1</Flex>
        <Flex>1</Flex>
        <Flex>1</Flex>
        <Flex>1</Flex>
        <Flex>1</Flex>
        <Flex>1</Flex>
        <Flex>1</Flex>
      </Flex>
    </Flex>

  )
}

export const WithInherit = () => {
  return (
    <Flex bg={'Silver'} color={'white'} inheritItems p={10}>
      parent
      <Flex bg={'Tomato'}>Foo</Flex>
      <Flex>Bar</Flex>
    </Flex>
  )
}

