import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta: Meta<typeof Button> = {
    title: 'Examples/Button',
    parameters: {
        layout: 'centered',
    },
    component: Button,
    tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>
export const Primary: Story = {
    args: {
        label: 'Button',
    },
}

export const Loading: Story = {
    args: {
        label: 'Button',
        isLoading: true,
    },
}

export const CustomLoading: Story = {
    args: {
        label: 'Button',
        isLoading: true,
        loadingText: 'Please Wait ...',
    },
}

export const StartWith5Clicks: Story = {
    args: {
        label: 'Button',
        initialClicks: 5,
    },
}
