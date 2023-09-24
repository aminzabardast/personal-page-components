import React, { ReactNode, Children } from 'react'
import { isArray, isNull, isUndefined } from 'lodash'
import { mdiContentCopy } from '@mdi/js'
import SvgIcon from '@mui/material/SvgIcon'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

interface CitationBoxProps {
    children: ReactNode[] | ReactNode
    copyButton?: boolean
}

const textToHtml = (value: string) => {
    return (
        <Box
            component="pre"
            sx={{
                overflow: 'auto',
                padding: '10px',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
            }}
            dangerouslySetInnerHTML={{ __html: value }}
        ></Box>
    )
}

const CitationBox = ({ children, copyButton = false }: CitationBoxProps) => {
    let citation: string = ''
    if (!isNull(children) && !isUndefined(children)) {
        if (isArray(children)) {
            Children.forEach(children, (child) => {
                if (child) {
                    citation += `${child}\n`
                }
            })
        } else {
            citation = children as string
        }
    }
    const copyTextToClipboard = (value: string) => {
        return navigator.clipboard.writeText(value)
    }

    const copyFunction = () => {
        copyTextToClipboard(citation)
            .then(() => {})
            .catch(() => {})
    }
    return (
        <div data-testid="citation-box" style={{ position: 'relative' }}>
            {copyButton && (
                <Button
                    size="small"
                    onClick={copyFunction}
                    variant="contained"
                    endIcon={
                        <SvgIcon fontSize="inherit">
                            <path d={mdiContentCopy} />
                        </SvgIcon>
                    }
                    style={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                    }}
                >
                    Copy
                </Button>
            )}
            {textToHtml(citation)}
        </div>
    )
}

export default CitationBox
