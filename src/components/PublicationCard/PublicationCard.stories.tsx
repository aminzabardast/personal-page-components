import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import PublicationCard from './PublicationCard'

const meta: Meta<typeof PublicationCard> = {
    title: 'Publications/Card',
    component: PublicationCard,
}

export default meta

type Story = StoryObj<typeof meta>

const bibtex: string =
    '@article{zabardast2023automated,\n' +
    '    title={An automated framework for evaluation of deep learning models for splice site predictions},\n' +
    '    author={Zabardast, Amin and Tamer, Elif G{\\"u}ney and Son, Ye{\\c{s}}im Ayd{\\i}n and Y{\\i}lmaz, Arif},\n' +
    '    journal={Scientific Reports},\n' +
    '    volume={13},\n' +
    '    number={1},\n' +
    '    pages={10221},\n' +
    '    year={2023},\n' +
    '    publisher={Nature Publishing Group UK London}\n' +
    '}'

const apa: string =
    'Zabardast, A., Tamer, E. G., Son, Y. A., & Yılmaz, A. (2023). An automated framework for evaluation of deep learning models for splice site predictions. Scientific Reports, 13(1), 10221.'

export const Example1: Story = {
    name: 'Citation',
    render: () => {
        return (
            <PublicationCard>
                <header>
                    <strong>Zabardast, A.</strong>, Tamer, E.G., Son, Y.A. and
                    Yılmaz, A., 2023.{' '}
                    <strong>
                        An automated framework for evaluation of deep learning
                        models for splice site predictions
                    </strong>
                    . Scientific Reports, 13(1), p.10221.
                </header>
                <header title="Bibtex">{bibtex}</header>
                <header title="APA">{apa}</header>
            </PublicationCard>
        )
    },
}
