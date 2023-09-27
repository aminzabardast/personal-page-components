import { createTheme, responsiveFontSizes } from '@mui/material'

let lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
})
lightTheme = responsiveFontSizes(lightTheme)

export default lightTheme
