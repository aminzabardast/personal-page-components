import React from 'react'
import { render } from '@testing-library/react'

import Button from './ThemeChangerButton'

// TODO: Correct Tests
describe('Button', () => {
    test('render the Button component', () => {
        render(<Button mode={'dark'} />)
    })
})
