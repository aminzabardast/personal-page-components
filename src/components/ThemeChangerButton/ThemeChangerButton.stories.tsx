import { StoryObj, Meta } from '@storybook/react'
import ThemeChangerButton from './ThemeChangerButton'

const meta: Meta<typeof ThemeChangerButton> = {
    title: 'Header/ThemeChangerButton',
    component: ThemeChangerButton,
}

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
    args: {},
}
