import { StoryObj, Meta } from '@storybook/react'

import MarkdownConverter from './MarkdownConverter'

const meta: Meta<typeof MarkdownConverter> = {
    title: 'MarkdownConverter',
    component: MarkdownConverter,
}

export default meta

type Story = StoryObj<typeof meta>

export const Example1: Story = {
    args: {
        fileUrl:
            'https://raw.githubusercontent.com/highlightjs/highlight.js/main/README.md',
    },
}

export const Example2: Story = {
    args: {
        fileUrl:
            'https://raw.githubusercontent.com/aminzabardast/AminZabardast.com/gh-pages/blog_posts/2021/04/24/git-gamification.md',
    },
}
