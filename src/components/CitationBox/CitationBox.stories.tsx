import { Meta, StoryObj } from '@storybook/react'
import CitationBox from './CitationBox'

const meta: Meta<typeof CitationBox> = {
    title: 'CitationBox',
    component: CitationBox,
}

export default meta

type Story = StoryObj<typeof meta>

export const SingleLineWithCopy: Story = {
    args: {
        children: 'A',
        copyButton: true,
    },
}

export const MultiLineWithCopy: Story = {
    args: {
        children: ['A', 'B', 'C'],
        copyButton: true,
    },
}
