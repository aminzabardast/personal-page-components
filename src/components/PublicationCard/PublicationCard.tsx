import React, { ReactNode, useState } from 'react'
import {
    Card,
    CardContent,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Stack,
} from '@mui/material'
import { get, isArray, filter, map } from 'lodash'

type ChildrenProp = ReactNode[]
type ChildProp = ReactNode

interface PublicationCardProp {
    children: ChildrenProp | ChildProp
}

const textToHtml = (value: string) => {
    // TODO: make this a different component with copy button and better scroll.
    // Check if build is minimal
    return (
        <pre
            dangerouslySetInnerHTML={{ __html: value }}
            style={{ overflowX: 'scroll' }}
        ></pre>
    )
}

const PublicationCard = ({ children }: PublicationCardProp) => {
    const [expanded, setExpanded] = useState(0)
    const handleChange = (panel: number) => {
        return (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : 0)
        }
    }

    const citationBody: ChildrenProp | ChildProp = isArray(children)
        ? get(children, '0')
        : children
    const citationReferences: ChildrenProp = isArray(children)
        ? filter(children, (_, index) => index > 0)
        : []
    return (
        <Card elevation={0} variant="outlined">
            <CardContent>
                <Stack spacing={2} direction={'column'}>
                    <div data-testid="az-citation-body">{citationBody}</div>
                    <div data-testid="az-citation-references">
                        {map(
                            citationReferences,
                            (item: ChildProp, idx: number) => {
                                idx += 1
                                return (
                                    <Accordion
                                        key={idx}
                                        expanded={expanded === idx}
                                        onChange={handleChange(idx)}
                                    >
                                        <AccordionSummary>
                                            <Typography variant="body1">
                                                {get(item, 'props.title')}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            {textToHtml(
                                                get(
                                                    item,
                                                    'props.children',
                                                    ''
                                                )
                                            )}
                                        </AccordionDetails>
                                    </Accordion>
                                )
                            }
                        )}
                    </div>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default PublicationCard
