import React from 'react'
import { render } from '@testing-library/react'

import Footer from './Footer'

describe('Footer', () => {
    test('Footer Renders', () => {
        render(<Footer title={'This is a footer'} />)
    })
})
