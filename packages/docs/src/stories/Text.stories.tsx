import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@blood-sky/react'

const meta: Meta<TextProps> = {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga iure dolorum molestiae modi debitis quis ab eaque commodi. Commodi eaque repellendus atque voluptates nam iste earum nesciunt sit, temporibus reiciendis!',
  },
}

export default meta

export const Primary: StoryObj<TextProps> = {}

export const Customtag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
