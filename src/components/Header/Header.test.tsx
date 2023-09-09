import React from 'react'
import { render } from '@testing-library/react'

import Title from './Header'

// TODO: Correct Tests
describe('Button', () => {
    test('render the Button component', () => {
        render(<Title title="Amin Zabardast" />)
    })
})
