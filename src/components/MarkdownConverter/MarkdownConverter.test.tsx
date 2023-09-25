import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import MarkdownConverter from './MarkdownConverter'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'

global.fetch = jest.fn(() =>
    Promise.resolve({
        text: () => Promise.resolve('# Header1'),
    })
) as jest.Mock

const examplePost = (
    <MarkdownConverter
        title="This is a Title"
        category={{
            title: 'Category',
            url: 'https://aminzabardast.com',
        }}
        date={new Date('2000-01-01T00:00:00')}
        author={{
            name: 'Amin Zabardast',
            imageUrl: 'https://aminzabardast.com/image.png',
        }}
        fileUrl="https://blog.aminzabardast.com/someMarkDownFile.md"
    />
)

describe('<MarkdownConverter />', () => {
    it('should render.', async () => {
        render(examplePost)
        await waitFor(() => {
            expect(screen.getByTestId('az-blog-object')).toBeInTheDocument()
        })
    })
    it('should show the title.', async () => {
        render(examplePost)
        await waitFor(() => {
            expect(screen.getByText('This is a Title')).toBeInTheDocument()
        })
    })
    it('should show the category title.', async () => {
        render(examplePost)
        await waitFor(() => {
            expect(screen.getByText('Category')).toBeInTheDocument()
        })
    })
    it('should show the category as a link.', async () => {
        render(examplePost)
        await waitFor(() => {
            expect(screen.getByText('Category')).toHaveAttribute(
                'href',
                'https://aminzabardast.com'
            )
        })
    })
    it('should show the date.', async () => {
        render(examplePost)
        await waitFor(() => {
            expect(screen.getByText('January 1st, 2000')).toBeInTheDocument()
        })
    })
    it('should show the authors name.', async () => {
        render(examplePost)
        await waitFor(() => {
            expect(screen.getByText('Amin Zabardast')).toBeInTheDocument()
        })
    })
    it('should have the authors image.', async () => {
        render(examplePost)
        await waitFor(() => {
            expect(screen.getByRole('img')).toHaveAttribute(
                'src',
                'https://aminzabardast.com/image.png'
            )
        })
    })
    it('should get the markdown file and render its content.', async () => {
        render(examplePost)
        await waitFor(() => {
            expect(screen.getByText('Header1')).toBeInTheDocument()
        })
    })
})
describe('<MarkdownConverter /> SnapShot Test', () => {
    it('should keep producing consistent result.', async () => {
        const tree = renderer.create(examplePost).toJSON()
        await waitFor(() => {
            expect(tree).toMatchSnapshot()
        })
    })
})
