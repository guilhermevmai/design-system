import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@blood-sky/react'

const meta: Meta<HeadingProps> = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'Custom title',
  },
}

export default meta

export const Primary: StoryObj<HeadingProps> = {}

export const Customtag: StoryObj<HeadingProps> = {
  args: {
    children: 'h1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterá-lo com a propriedade `as`',
      },
    },
  },
}
