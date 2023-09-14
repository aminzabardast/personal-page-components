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

type socialMediaProps = {
    type: 'linkedin' | 'scholar' | 'instagram' | 'github' | 'twitter'
    url: string
}

interface FooterProps {
    socialMedias: socialMediaProps[]
}

const Footer = ({ socialMedias = [] }: FooterProps) => {
    return (
        <Box>
            <Stack direction={{ xs: 'column', lg: 'row' }} spacing={0}>
                <Stack
                    direction={{ xs: 'column', lg: 'row' }}
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={{ xs: 0, lg: 2 }}
                >
                    {socialMedias.map(({ type, url }: socialMediaProps) => {
                        let icon
                        let title: string
                        switch (type) {
                            case 'twitter':
                                icon = mdiTwitter
                                title = 'Twitter'
                                break
                            case 'linkedin':
                                icon = mdiLinkedin
                                title = 'LinkedIn'
                                break
                            case 'github':
                                icon = mdiGithub
                                title = 'GitHub'
                                break
                            case 'instagram':
                                icon = mdiInstagram
                                title = 'Instagram'
                                break
                            case 'scholar':
                                icon = mdiSchool
                                title = 'Google Scholar'
                                break
                        }
                        return (
                            <Button
                                key={url}
                                sx={{
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    textAlign: 'center',
                                    textTransform: 'none'
                                }}
                                href={url}
                                target="_blank"
                            >
                                <SvgIcon sx={{ margin: '5px' }}>
                                    <path d={icon} />
                                </SvgIcon>
                                {title}
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
                    <Button
                        href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
                        target="_blank"
                    >
                        <img
                            alt="Creative Commons License"
                            src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"
                        />
                    </Button>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Footer
