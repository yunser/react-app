import React, { Children } from 'react'
import './index.css'
import classNames from 'classnames'

interface HeaderProps {
    className?: string
    children: any
}

function Header(props: HeaderProps) {
    const { children, className } = props
    return (
        <thead className={classNames('ui-thead', className)}>
            {children}
        </thead>
    )
}

interface BodyProps {
    className?: string
    children: any
}

function Body(props: BodyProps) {
    const { children, className } = props
    return (
        <tbody className={classNames('ui-tbody', className)}>
            {children}
        </tbody>
    )
}

interface RowProps {
    className?: string
    children: any
}

function Row(props: RowProps) {
    const { children, className } = props
    return (
        <tr className={classNames('ui-tr', className)}>
            {children}
        </tr>
    )
}

interface CellProps {
    className?: string
    children: any
}

function Cell(props: CellProps) {
    const { children, className } = props
    return (
        <td className={classNames('ui-tr', className)}>
            {children}
        </td>
    )
}

interface StateProps {
    children: any
}

export class Table extends React.Component {

    static Header = Header
    static Body = Body
    static Row = Row
    static Cell = Cell

    state: StateProps = {
        children: null
    }

    render() {
        const { children } = this.props
        
        return (
            <table className="ui-table">
                {children}
            </table>
        )
    }
}
