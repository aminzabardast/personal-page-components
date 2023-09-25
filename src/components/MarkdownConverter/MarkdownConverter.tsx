import React, { useState } from 'react'
import { Converter } from 'showdown'
import showdownHighlight from 'showdown-highlight'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import 'highlight.js/styles/github-dark.css'
import './MarkdownConverter.css'

interface MarkdownConverterProps {
    fileUrl: string
}

const MarkdownConverter = ({ fileUrl }: MarkdownConverterProps) => {
    const converter = new Converter({
        extensions: [
            showdownHighlight({
                pre: true,
                auto_detection: true,
            }),
        ],
    })
    const [isLoading, setIsLoading] = useState(true)
    const [markdownText, setMarkdownText] = useState('')
    fetch(fileUrl).then((response) => {
        response.text().then((text) => {
            setMarkdownText(text)
            setIsLoading(false)
        })
    })
    return (
        <div>
            {isLoading && (
                <Box display="flex" justifyContent="center" alignItems="center">
                    <CircularProgress />
                </Box>
            )}
            {!isLoading && (
                <Container
                    className="az-md-converter"
                    component="div"
                    dangerouslySetInnerHTML={{
                        __html: converter.makeHtml(markdownText),
                    }}
                ></Container>
            )}
        </div>
    )
}

export default MarkdownConverter
