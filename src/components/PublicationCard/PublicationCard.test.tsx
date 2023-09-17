import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PublicationCard from './PublicationCard'

describe('Publication Card', () => {
    it('should render', () => {
        render(
            <PublicationCard>
                <div>A Citation.</div>
            </PublicationCard>
        )
    })
    it('should put the 1st child as the body of the citation', async () => {
        const citation: React.JSX.Element = (
            <header>
                Amin Zabardast, <strong>A Citation</strong>, <i>Year 2023</i>.
            </header>
        )
        render(<PublicationCard>{citation}</PublicationCard>)
        // Check if the element is inserted
        expect(
            screen.getByTestId('az-citation-body').querySelector('header')
        ).toBeInTheDocument()
        expect(screen.getByTestId('az-citation-body')).not.toBeEmptyDOMElement()
    })
    it('should put anything after the 1st child into an Accordion', async () => {
        const citation: React.JSX.Element = <header>Citation.</header>
        const bibtex: React.JSX.Element = (
            <header title="Bibtex">
                <pre>@article zabardast2023automated</pre>
            </header>
        )
        const apa: React.JSX.Element = (
            <header title="APA">
                <pre>@article zabardast2023automated</pre>
            </header>
        )
        render(
            <PublicationCard>
                {citation}
                {bibtex}
                {apa}
            </PublicationCard>
        )
        // Check if it is an Accordion
        expect(
            screen
                .getByTestId('az-citation-references')
                .querySelector('.MuiAccordion-root')
        ).toBeInTheDocument()
        // Check if the number of inserted elements are correct
        expect(
            screen
                .getByTestId('az-citation-references')
                .querySelectorAll('header').length
        ).toEqual(2)
        // Check if titles are parsed and inserted correctly.
        expect(screen.getByText('Bibtex')).toBeInTheDocument()
        expect(screen.getByText('APA')).toBeInTheDocument()
    })
})
