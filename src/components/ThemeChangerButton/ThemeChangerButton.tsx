import React from 'react'
import { Button, IconButton } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode.js'
import DarkModeIcon from '@mui/icons-material/DarkMode.js'
import { isUndefined } from 'lodash'

type mode = 'light' | 'dark'

interface ThemeChangerButtonProps {
    mode: mode
    showTitle?: boolean
    onClick?: (mode: mode) => void
}

const ThemeChangerButton = ({
    mode,
    onClick,
    showTitle = true,
}: ThemeChangerButtonProps) => {
    const isLight = mode === 'light'
    const click = () => {
        if (!isUndefined(onClick)) {
            onClick(isLight ? 'dark' : 'light')
        }
    }
    if (showTitle) {
        return (
            <Button
                onClick={click}
                color="inherit"
                endIcon={isLight ? <DarkModeIcon /> : <LightModeIcon />}
            >
                {isLight ? 'Dark Mode' : 'Light Mode'}
            </Button>
        )
    } else {
        return (
            <IconButton color="inherit" onClick={click}>
                {isLight ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
        )
    }
}

export default ThemeChangerButton
