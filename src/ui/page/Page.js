import React from 'react'

export class Page extends React.Component {

    render() {
        const { children } = this.props
        
        return (
            <div className="ui-page">
                {children}
            </div>
        )
    }
}
