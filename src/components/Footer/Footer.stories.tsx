import { Meta, StoryObj } from '@storybook/react'

import Footer from './Footer'

const meta: Meta<typeof Footer> = {
    title: 'Footer',
    component: Footer,
}
export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
    args: {
        socialMedias: [
            {
                type: 'linkedin',
                url: 'google.com',
            },
            {
                type: 'scholar',
                url: 'google.com',
            },
            {
                type: 'github',
                url: 'https://github.com/aminzabardast',
            },
        ],
    },
}
