import type { Meta, StoryObj } from '@storybook/react'
import Header from './Header'

const meta: Meta<typeof Header> = {
    title: 'Header/MainHeader',
    component: Header,
}

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {
    args: {
        title: 'Curiosity',
        subtitle: 'Welcome!',
        avatarSrc: 'https://aminzabardast.com/img/amin2.fa404444.jpg',
        showAvatar: true,
        showThemeChanger: true,
        onThemeChange: (mode) => {
            console.log(mode)
        },
        links: [
            {
                title: 'Home',
            },
            {
                title: 'Blog',
            },
            {
                title: 'Publications',
            },
            {
                title: 'Contact',
            },
        ],
    },
}
