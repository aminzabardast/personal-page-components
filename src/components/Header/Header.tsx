import React, { JSX } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import SvgIcon from '@mui/material/SvgIcon'
import { mdiMenu } from '@mdi/js'
import ThemeChangerButton from '../ThemeChangerButton/ThemeChangerButton'
import { isUndefined } from 'lodash'
import { useTheme } from '@mui/material/styles'
import { mode } from '../ThemeChangerButton/ThemeChangerButton'

type HeaderLink = {
    title: string
}

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
    const [drawerState, setDrawerState] = React.useState(false)
    const toggleMenu = () => {
        setDrawerState(!drawerState)
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
                <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={2}
                    >
                        {links?.map(({ title }: HeaderLink): JSX.Element => {
                            return (
                                <Button key={title} color="inherit">
                                    {title}
                                </Button>
                            )
                        })}
                        <ThemeChangerButton
                            mode={theme.palette.mode}
                            showTitle={false}
                            onClick={handleThemeChange}
                        />
                    </Stack>
                </Box>
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
                        onClick={toggleMenu}
                        color="inherit"
                        sx={{ display: { lg: 'none' } }}
                    >
                        <SvgIcon>
                            <path d={mdiMenu} />
                        </SvgIcon>
                    </IconButton>
                    <Drawer
                        anchor="bottom"
                        open={drawerState}
                        onClose={toggleMenu}
                    >
                        <Box role="presentation" onClick={toggleMenu}>
                            <List>
                                {links.map((item, index) => (
                                    <ListItem key={index} disablePadding>
                                        <ListItemButton>
                                            <ListItemText
                                                primary={item.title}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Drawer>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header
export { HeaderLink }
