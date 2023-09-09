import React, { JSX } from 'react'
import {
    Avatar,
    Typography,
    Stack,
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Menu,
    MenuItem,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu.js'
import ThemeChangerButton from '../ThemeChangerButton/ThemeChangerButton'
import { isUndefined } from 'lodash'
import { useTheme } from '@mui/material/styles/index.js'

type HeaderLink = {
    title: string
}

// TODO: Import this from `ThemeChangerButton` component
type mode = 'light' | 'dark'

interface HeaderProps {
    title: string
    subtitle?: string
    showAvatar?: boolean
    avatarSrc?: string
    links?: HeaderLink[]
    showThemeChanger?: boolean
    onThemeChange?: (mode: mode) => void
}

const Header = ({
    title,
    subtitle,
    showAvatar = false,
    avatarSrc,
    links = [],
    showThemeChanger = false,
    onThemeChange,
}: HeaderProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const theme = useTheme()

    const handleThemeChange = (mode: mode) => {
        if (!isUndefined(onThemeChange)) {
            onThemeChange(mode)
        }
    }

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                top: { xs: 'auto', md: 'auto', lg: 0 },
                bottom: { xs: 0, md: 0, lg: 'auto' },
            }}
        >
            <Toolbar>
                <Stack direction="row" spacing={2}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {showAvatar && <Avatar src={avatarSrc} />}
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Stack direction="column">
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ textDecoration: 'underline' }}
                            >
                                {title}
                            </Typography>
                            <Typography variant="subtitle2" component="div">
                                {subtitle}
                            </Typography>
                        </Stack>
                    </Box>
                </Stack>
                <Box sx={{ flexGrow: 1 }} />
                {showThemeChanger && (
                    <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                        <ThemeChangerButton
                            mode={theme.palette.mode}
                            showTitle={true}
                            onClick={handleThemeChange}
                        />
                    </Box>
                )}
                {showThemeChanger && (
                    <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
                        <ThemeChangerButton
                            mode={theme.palette.mode}
                            showTitle={false}
                            onClick={handleThemeChange}
                        />
                    </Box>
                )}
                <div>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                        sx={{ display: { lg: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {links.map(({ title }: HeaderLink): JSX.Element => {
                            return (
                                <MenuItem
                                    key={title}
                                    color="inherit"
                                    onClick={handleClose}
                                >
                                    {title}
                                </MenuItem>
                            )
                        })}
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header
