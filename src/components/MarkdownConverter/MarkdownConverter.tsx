import React, { useState } from 'react'
import { Converter } from 'showdown'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import { format } from 'date-fns'
import './MarkdownConverter.css'
import { mdiCommentOutline } from '@mdi/js'
import Button from '@mui/material/Button'
import SvgIcon from '@mui/material/SvgIcon'

type Category = {
    title: string
    url: string
}

type Author = {
    name: string
    imageUrl?: string
}

interface MarkdownConverterProps {
    categories?: Category[]
    title: string
    date?: Date
    author?: Author
    fileUrl: string
    mediumUrl?: string
}

const MarkdownConverter = ({
    categories,
    title,
    date,
    author,
    fileUrl,
    mediumUrl,
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
            {categories && (
                <Container sx={{ paddingTop: '40px' }}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        {categories.map((category) => {
                            return (
                                <Chip
                                    data-testid="az-categories"
                                    key={category.title}
                                    label={category.title}
                                    component="a"
                                    href={category.url}
                                    clickable
                                />
                            )
                        })}
                    </Stack>
                </Container>
            )}
            {mediumUrl && (
                <Container sx={{ paddingTop: '40px' }}>
                    <Button
                        component="a"
                        href={mediumUrl}
                        data-testid="az-medium-link"
                        target="_blank"
                        style={{
                            textTransform: 'none',
                        }}
                        startIcon={
                            <SvgIcon>
                                <path d={mdiCommentOutline}></path>
                            </SvgIcon>
                        }
                    >
                        Leave a comment on Medium
                    </Button>
                </Container>
            )}
        </div>
    )
}

export default MarkdownConverter
