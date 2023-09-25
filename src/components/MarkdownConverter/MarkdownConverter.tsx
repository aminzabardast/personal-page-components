import React, { useState } from 'react'
import { Converter } from 'showdown'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar'
import { format } from 'date-fns'
import './MarkdownConverter.css'

type Category = {
    title: string
    url: string
}

type Author = {
    name: string
    imageUrl?: string
}

interface MarkdownConverterProps {
    category?: Category
    title: string
    date?: Date
    author?: Author
    fileUrl: string
}

const MarkdownConverter = ({
    category,
    title,
    date,
    author,
    fileUrl,
}: MarkdownConverterProps) => {
    const [isLoading, setIsLoading] = useState(true)

    const [markdownText, setMarkdownText] = useState('')
    fetch(fileUrl).then((response) => {
        response.text().then((text) => {
            setMarkdownText(text)
            setIsLoading(false)
        })
    })

    const converter = new Converter({
        extensions: [],
    })

    return (
        <div data-testid="az-blog-object">
            {category && (
                <Container component="div">
                    <Link href={category.url}>{category.title}</Link>
                </Container>
            )}
            {title && (
                <Container component="div">
                    <Typography variant="h1">{title}</Typography>
                </Container>
            )}
            {(date || author) && (
                <Container>
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={2}
                    >
                        {author && (
                            <Stack direction="row" spacing={2}>
                                {author?.imageUrl && (
                                    <Avatar
                                        src={author.imageUrl}
                                        sx={{ width: 32, height: 32 }}
                                    />
                                )}
                                {author?.name && (
                                    <Typography variant="h5" component="span">
                                        {author.name}
                                    </Typography>
                                )}
                            </Stack>
                        )}
                        {date && (
                            <Typography variant="h5" component="span">
                                {format(date, 'PPP')}
                            </Typography>
                        )}
                    </Stack>
                </Container>
            )}
            <Container sx={{ paddingTop: '40px' }}>
                <Divider />
            </Container>
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
