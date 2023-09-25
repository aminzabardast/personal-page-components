import React from 'react'
import { render } from '@testing-library/react'
import MarkdownConverter from './MarkdownConverter'

describe('Converter', () => {
    it('should render.', () => {
        render(<MarkdownConverter />)
    })
})
