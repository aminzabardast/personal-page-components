import { StoryObj, Meta } from '@storybook/react'
import Card from './BlogPostCard'

const meta: Meta<typeof Card> = {
    title: 'Blog/BlogPostCard',
    component: Card,
}

export default meta

type Story = StoryObj<typeof meta>

export const Example1: Story = {
    name: 'Simple Example',
    args: {
        title: 'The Little Price: Book Review',
        date: new Date(),
        summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis posuere dolor, a sagittis neque. Duis ut magna ultrices, tincidunt mauris ac, elementum risus. Vestibulum tempor nisl dolor, in consectetur nibh convallis quis. Duis mattis eu est ac commodo. Etiam aliquet rhoncus leo, eu volutpat purus mattis at. Ut sed malesuada orci, et elementum odio. Sed convallis, lacus id ultricies imperdiet, ante tellus ultricies dui, ut porttitor lectus sem a nisl. Suspendisse a consectetur sem, a finibus sapien. Sed ultricies odio a eros placerat molestie. Etiam pharetra sapien vitae sem ornare aliquam. Vestibulum vestibulum sed odio eu finibus. Suspendisse viverra quis eros at commodo.',
        tags: ['Book Review', 'Personal Posts'],
        image: 'https://picsum.photos/600/600',
        imageHeight: 400,
    },
}

export const Example2: Story = {
    name: 'Long Title',
    args: {
        title: 'The Little Price: Book Review Review Review Review',
        date: new Date(),
        summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis posuere dolor, a sagittis neque. Duis ut magna ultrices, tincidunt mauris ac, elementum risus. Vestibulum tempor nisl dolor, in consectetur nibh convallis quis. Duis mattis eu est ac commodo. Etiam aliquet rhoncus leo, eu volutpat purus mattis at. Ut sed malesuada orci, et elementum odio. Sed convallis, lacus id ultricies imperdiet, ante tellus ultricies dui, ut porttitor lectus sem a nisl. Suspendisse a consectetur sem, a finibus sapien. Sed ultricies odio a eros placerat molestie. Etiam pharetra sapien vitae sem ornare aliquam. Vestibulum vestibulum sed odio eu finibus. Suspendisse viverra quis eros at commodo.',
        tags: ['Book Review', 'Personal Posts'],
        image: 'https://picsum.photos/600/600',
        imageHeight: 400,
    },
}
