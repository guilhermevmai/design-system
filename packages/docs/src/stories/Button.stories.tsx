import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@blood-sky/react'
import { ArrowCircleRight } from 'phosphor-react'

const meta: Meta<ButtonProps> = {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: 'inline-radio',
    },
    size: {
      options: ['sm', 'md'],
      control: 'inline-radio',
    },
    disabled: {
      type: 'boolean',
    },
  },
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
}

export default meta

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}
export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next step
        <ArrowCircleRight weight="bold" />
      </>
    ),
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}
