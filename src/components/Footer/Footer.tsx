import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import SvgIcon from '@mui/material/SvgIcon'
import Button from '@mui/material/Button'
import {
    mdiHeart,
    mdiTwitter,
    mdiSchool,
    mdiInstagram,
    mdiGithub,
    mdiLinkedin,
} from '@mdi/js'
import { isUndefined } from 'lodash'

type socialMediaProps = {
    type: 'linkedin' | 'scholar' | 'instagram' | 'github' | 'twitter'
    url: string
}

interface FooterProps {
    socialMedias?: socialMediaProps[]
    copyrightsText?: string
    copyrightsImageSrc?: string
    copyrightLink?: string
}

const icons = {
    twitter: mdiTwitter,
    github: mdiGithub,
    instagram: mdiInstagram,
    scholar: mdiSchool,
    linkedin: mdiLinkedin,
}

const titles = {
    twitter: 'Twitter',
    github: 'GitHub',
    instagram: 'Instagram',
    scholar: 'Google Scholar',
    linkedin: 'LinkedIn',
}

const Footer = ({
    socialMedias = [],
    copyrightsImageSrc,
    copyrightLink,
    copyrightsText,
}: FooterProps) => {
    const hasCopyrightsImage = !isUndefined(copyrightsImageSrc)
    const hasCopyrightsText = !isUndefined(copyrightsText)
    return (
        <Box>
            <Stack direction={{ xs: 'column', lg: 'row' }} spacing={0}>
                <Stack
                    direction={{ xs: 'column', lg: 'row' }}
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={{ xs: 0, lg: 2 }}
                >
                    {socialMedias.map(({ type, url }: socialMediaProps) => {
                        return (
                            <Button
                                key={url}
                                sx={{
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    textAlign: 'center',
                                    textTransform: 'none',
                                }}
                                href={url}
                                target="_blank"
                            >
                                <SvgIcon sx={{ margin: '5px' }}>
                                    <path d={icons[type]} />
                                </SvgIcon>
                                {titles[type]}
                            </Button>
                        )
                    })}
                </Stack>
                <Box sx={{ flexGrow: 1 }} />
                <Stack
                    direction={{ xs: 'column', lg: 'row' }}
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={{ xs: 0, lg: 2 }}
                >
                    <Button
                        disabled
                        sx={{ textTransform: 'none' }}
                        style={{ color: 'red' }}
                        variant="text"
                    >
                        <SvgIcon fontSize="small">
                            <path d={mdiHeart} />
                        </SvgIcon>
                    </Button>
                    {hasCopyrightsImage && (
                        <Button
                            href={copyrightLink ? copyrightLink : ''}
                            disabled={!copyrightLink}
                            target="_blank"
                        >
                            <img src={copyrightsImageSrc} />
                        </Button>
                    )}
                    {hasCopyrightsText && (
                        <Button
                            href={copyrightLink ? copyrightLink : ''}
                            disabled={!copyrightLink}
                            target="_blank"
                        >
                            {copyrightsText}
                        </Button>
                    )}
                </Stack>
            </Stack>
        </Box>
    )
}

export default Footer
