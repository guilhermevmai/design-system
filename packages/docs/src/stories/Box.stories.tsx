import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Heading, Text } from '@blood-sky/react'

const meta: Meta<BoxProps> = {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Heading as="h1">Meu título</Heading>{' '}
        <Text as="span">Testando o elemento Box</Text>
      </>
    ),
  },
}

export default meta

export const Primary: StoryObj<BoxProps> = {}
