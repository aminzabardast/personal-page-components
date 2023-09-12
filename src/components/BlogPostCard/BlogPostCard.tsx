import React from 'react'
import format from 'date-fns/format'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { isUndefined } from 'lodash'

interface BlogPostCardProps {
    title: string
    tags?: string[]
    date: Date
    image?: string
    summary: string
    imageHeight?: number
}

const BlogPostCard = ({
    title,
    date,
    summary,
    tags,
    image,
    imageHeight = 400,
}: BlogPostCardProps) => {
    return (
        <Card variant={'outlined'} style={{ border: 'none' }}>
            {!isUndefined(image) && <CardMedia
                sx={{ height: imageHeight }}
                image={image}
                title="green iguana"
            />}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" noWrap>
                    {title}
                </Typography>
                <div>
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={1}
                    >
                        {tags?.map((tag: string) => {
                            return (
                                <Typography variant="caption" component="span">
                                    {tag}
                                </Typography>
                            )
                        })}
                        <Typography variant="caption" component="span">
                            {format(date, 'PP')}
                        </Typography>
                    </Stack>
                </div>
                <Typography variant="body1" color="text.secondary" paragraph>
                    {summary}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Continue Reading</Button>
            </CardActions>
        </Card>
    )
}

export default BlogPostCard
