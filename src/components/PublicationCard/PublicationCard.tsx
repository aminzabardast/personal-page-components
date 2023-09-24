import React, { ReactNode, useState } from 'react'
import Stack from '@mui/material/Stack'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Accordion from '@mui/material/Accordion'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import { get, isArray, filter, map } from 'lodash'
import CitationBox from '../CitationBox'

type ChildrenProp = ReactNode[]
type ChildProp = ReactNode

interface PublicationCardProp {
    children: ChildrenProp | ChildProp
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
                                            <CitationBox copyButton>
                                                {get(
                                                    item,
                                                    'props.children',
                                                    ''
                                                )}
                                            </CitationBox>
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
