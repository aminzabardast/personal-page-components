import React from 'react'
import { render } from '@testing-library/react'

import Body from './BodyStyler'

describe('Body Paragraph Styler', () => {
    test('Component Renders', () => {
        render(
            <Body>
                <p>This is something</p>
            </Body>
        )
    })
})
