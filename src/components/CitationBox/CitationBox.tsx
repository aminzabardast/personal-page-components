import React, { ReactNode, Children } from 'react'
import { isArray, isNull, isUndefined } from 'lodash'
import { mdiContentCopy } from '@mdi/js'
import SvgIcon from '@mui/material/SvgIcon'
import IconButton from '@mui/material/IconButton'

interface CitationBoxProps {
    children: ReactNode[] | ReactNode
    copyButton?: boolean
}

const textToHtml = (value: string) => {
    return (
        <pre
            dangerouslySetInnerHTML={{ __html: value }}
            style={{ overflowX: 'auto' }}
        ></pre>
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
        <div data-testid="citation-box">
            {copyButton && (
                <IconButton onClick={copyFunction}>
                    <SvgIcon>
                        <path d={mdiContentCopy} />
                    </SvgIcon>
                </IconButton>
            )}
            {textToHtml(citation)}
        </div>
    )
}

export default CitationBox
