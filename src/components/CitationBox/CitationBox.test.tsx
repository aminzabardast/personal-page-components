import { fireEvent, render, screen } from '@testing-library/react'
import CitationBox from './CitationBox'
import React from 'react'
import '@testing-library/jest-dom'

const writeText = jest.fn().mockImplementation(() => Promise.resolve())

Object.assign(navigator, {
    clipboard: {
        writeText,
    },
})

describe('<CitationBox>...</CitationBox>', () => {
    it('should render.', () => {
        render(<CitationBox>Cite!</CitationBox>)
        expect(screen.getByTestId('citation-box')).toBeInTheDocument()
    })
    it('should show the citation.', () => {
        render(<CitationBox>Cite!</CitationBox>)
        expect(screen.getByText('Cite!')).toBeInTheDocument()
    })
})
describe('<CitationBox> Copy to Clipboard Functionality', () => {
    it('should have copy button.', () => {
        render(<CitationBox copyButton>Cite!</CitationBox>)
        expect(screen.getByRole('button')).toBeInTheDocument()
    })
    it('should copy the citation to clipboard when copy button is pressed.', () => {
        render(<CitationBox copyButton>Cite!</CitationBox>)
        const copyButton = screen.getByRole('button')
        fireEvent.click(copyButton)
        expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Cite!')
    })
    it('should copy the citations with line breaks.', () => {
        render(<CitationBox copyButton>Cite1! Cite2!</CitationBox>)
        const copyButton = screen.getByRole('button')
        fireEvent.click(copyButton)
        expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
            'Cite1! Cite2!'
        )
    })
})
describe('<CitationBox copyButton="false">...</CitationBox>', () => {
    it('should not show the copy button if it is disabled.', () => {
        render(<CitationBox copyButton={false}>Cite!</CitationBox>)
        expect(screen.queryByRole('button')).toBeNull()
    })
})
