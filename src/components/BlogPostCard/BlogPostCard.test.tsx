import React from 'react'
import { render } from '@testing-library/react'

import Card from './BlogPostCard'

// TODO: Correct Tests
describe('Card', () => {
    test('Card Renders', () => {
        render(<Card title={'This is a card'} date={new Date()} summary={'This is a summary!'} />)
    })
})
