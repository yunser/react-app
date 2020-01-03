import React from 'react'
import './index.scss'
import classNames from 'classnames'
import { Paper } from '../paper/Paper'

interface HeaderProps {
    children: any
    className?: string
}

function Header(props: HeaderProps) {
    const { children, className } = props
    return (
        <thead className={classNames('ui-thead', className)}>
            {children}
        </thead>
    )
}

export class Card extends React.Component {

    static Header = Header

    render() {
        const { children, className } = this.props
        
        return (
            <Paper className={classNames('ui-card', className)}>
                {children}
            </Paper>
        )
    }
}
