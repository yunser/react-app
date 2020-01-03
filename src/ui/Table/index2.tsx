import React, { Children } from 'react'
import './index.css'

type StateProps = {
    children: any
}

export class Table extends React.Component {

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
