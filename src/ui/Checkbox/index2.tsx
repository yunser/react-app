import React, { Children } from 'react'
import './index.css'

type StateProps = {
    children: any
    label?: string
}

export class Checkbox extends React.Component {

    state: StateProps = {
        children: null,
        label: '',
    }

    render() {
        const { children } = this.props
        
        return (
            <table className="ui-checkbox">
                {children}
            </table>
        )
    }
}
