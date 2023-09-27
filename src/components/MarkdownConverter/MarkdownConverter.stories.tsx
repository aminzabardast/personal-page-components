import { StoryObj, Meta } from '@storybook/react'

import MarkdownConverter from './MarkdownConverter'

const meta: Meta<typeof MarkdownConverter> = {
    title: 'Blog/MarkdownConverter',
    component: MarkdownConverter,
}

export default meta

type Story = StoryObj<typeof meta>

export const Example1: Story = {
    args: {
        categories: [
            {
                title: 'Category Text 1',
                url: 'https://google.com/',
            },
            {
                title: 'Category Text 2',
                url: 'https://google.com/',
            },
            {
                title: 'Category Text 3',
                url: 'https://google.com/',
            },
            {
                title: 'Category Text 4',
                url: 'https://google.com/',
            },
        ],
        title: 'This is a Title',
        author: {
            name: 'Amin Zabardast',
            imageUrl:
                'https://raw.githubusercontent.com/aminzabardast/AminZabardast.com/master/src/assets/amin2.jpg',
        },
        date: new Date(),
        fileUrl:
            'https://raw.githubusercontent.com/highlightjs/highlight.js/main/README.md',
        mediumUrl: 'https://medium.com/',
    },
}

export const Example2: Story = {
    args: {
        categories: [
            {
                title: 'Category Text 1',
                url: 'https://google.com/',
            },
            {
                title: 'Category Text 2',
                url: 'https://google.com/',
            },
            {
                title: 'Category Text 3',
                url: 'https://google.com/',
            },
            {
                title: 'Category Text 4',
                url: 'https://google.com/',
            },
        ],
        title: 'This is a Title',
        author: {
            name: 'Amin Zabardast',
            imageUrl:
                'https://raw.githubusercontent.com/aminzabardast/AminZabardast.com/master/src/assets/amin2.jpg',
        },
        date: new Date(),
        fileUrl:
            'https://raw.githubusercontent.com/aminzabardast/AminZabardast.com/gh-pages/blog_posts/2021/04/24/git-gamification.md',
        mediumUrl: 'https://medium.com/',
    },
}
