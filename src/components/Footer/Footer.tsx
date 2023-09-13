import React from 'react'
import Container from '@mui/material/Container'

interface FooterProps {
    title: string
}
const Footer = ({ title }: FooterProps) => {
    return <Container>{title}</Container>
}

export default Footer
