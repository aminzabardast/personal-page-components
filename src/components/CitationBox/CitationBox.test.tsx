import { render, screen } from '@testing-library/react'
import CitationBox from './CitationBox'
import React from 'react'
import '@testing-library/jest-dom'

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
describe('<CitationBox copyButton>...</CitationBox>', () => {
    it('should have copy button.', () => {
        render(<CitationBox copyButton>Cite!</CitationBox>)
        expect(screen.getByRole('button')).toBeInTheDocument()
    })
    it('should copy the citation to clipboard when copy button is pressed.', () => {
        throw Error('Not Implemented.')
    })
    it('should change the button text to `Copied!` and then back to `Copy`.', () => {
        throw Error('Not Implemented.')
    })
    it('should copy the citations with line breaks.', () => {
        throw Error('Not Implemented.')
    })
})
describe('<CitationBox copyButton="false">...</CitationBox>', () => {
    it('should not show the copy button if it is disabled.', () => {
        throw Error('Not Implemented.')
    })
})
