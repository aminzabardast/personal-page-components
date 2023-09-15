import { Meta, StoryObj } from '@storybook/react'

import Footer from './Footer'

const meta: Meta<typeof Footer> = {
    title: 'Footer',
    component: Footer,
}
export default meta

type Story = StoryObj<typeof meta>

export const Story1: Story = {
    name: 'Social Media',
    args: {
        socialMedias: [
            {
                type: 'linkedin',
                url: 'https://www.linkedin.com/in/aminzabardast/',
            },
            {
                type: 'scholar',
                url: 'https://scholar.google.com/citations?user=98dFy6sAAAAJ',
            },
            {
                type: 'github',
                url: 'https://github.com/aminzabardast',
            },
        ],
    },
}

export const Story2: Story = {
    name: 'Copyrights Image / Hyperlink',
    args: {
        copyrightsImageSrc:
            'https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png',
        copyrightLink: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    },
}

export const Story3: Story = {
    name: 'Copyrights Image / No Hyperlink',
    args: {
        copyrightsImageSrc:
            'https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png',
    },
}

export const Story4: Story = {
    name: 'Copyrights Text / Hyperlink',
    args: {
        copyrightsText: 'All Rights Reserved',
        copyrightLink: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    },
}

export const Story5: Story = {
    name: 'Copyrights Text / No Hyperlink',
    args: {
        copyrightsText: 'All Rights Reserved',
    },
}

export const Story6: Story = {
    name: 'Full Footer',
    args: {
        socialMedias: [
            {
                type: 'linkedin',
                url: 'https://www.linkedin.com/in/aminzabardast/',
            },
            {
                type: 'scholar',
                url: 'https://scholar.google.com/citations?user=98dFy6sAAAAJ',
            },
            {
                type: 'github',
                url: 'https://github.com/aminzabardast',
            },
        ],
        copyrightsText: 'All Rights Reserved',
        copyrightLink: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
        copyrightsImageSrc:
            'https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png',
    },
}
