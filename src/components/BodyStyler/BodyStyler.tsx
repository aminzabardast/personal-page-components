import React, { Children, ReactNode } from 'react'
import './BodyStyler.css'

interface BodyProps {
    children: ReactNode[] | ReactNode
}

const BodyStyler = ({ children }: BodyProps) => {
    const result: ReactNode[] = []
    Children.forEach(children, (child) => {
        result.push(child)
    })
    return <div className={'az-body'}>{result}</div>
}

export default BodyStyler
