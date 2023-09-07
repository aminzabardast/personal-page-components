import React, { useState } from 'react'
import { Button as MuiButton } from '@mui/material'

interface ButtonProps {
    label: string
    isLoading?: boolean
    onClick?: () => void
    loadingText?: string
    initialClicks?: number
    variant?: 'outlined' | 'text' | 'contained'
}

const Button = ({
    label,
    isLoading = false,
    onClick,
    loadingText = 'Loading ...',
    initialClicks = 0,
    variant = 'contained',
}: ButtonProps) => {
    const [clicks, setClick] = useState(initialClicks)
    const addOne = () => {
        setClick(clicks + 1)
        if (onClick) {
            onClick()
        }
    }
    return (
        <MuiButton onClick={addOne} disabled={isLoading} variant={variant}>
            {isLoading ? loadingText : label} / {clicks} Clicks
        </MuiButton>
    )
}

export default Button
