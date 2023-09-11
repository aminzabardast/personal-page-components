import React from 'react'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import SvgIcon from '@mui/material/SvgIcon'
import { mdiBrightness4 } from '@mdi/js'
import { mdiBrightness6 } from '@mdi/js'
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
                endIcon={isLight ? <SvgIcon><path d={mdiBrightness4} /></SvgIcon> : <SvgIcon><path d={mdiBrightness6} /></SvgIcon>}
            >
                {isLight ? 'Dark Mode' : 'Light Mode'}
            </Button>
        )
    } else {
        return (
            <IconButton color="inherit" onClick={click}>
                {isLight ? <SvgIcon><path d={mdiBrightness4} /></SvgIcon> : <SvgIcon><path d={mdiBrightness6} /></SvgIcon>}
            </IconButton>
        )
    }
}

export default ThemeChangerButton
