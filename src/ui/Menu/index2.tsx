import React from 'react'
import './index.css'

interface ItemProps {
    children: any
    
}

const Item = (props: ItemProps) => {
    const { children } = props
    return (
        <div className="ui-menu-item">
            {children}
        </div>
    )
}

export interface Props {
    text: string,
    text2?: number,
    // text2: string
  }

type StateProps = {
    children: any,
}

export class Menu extends React.Component {

    static Item = Item

    state: StateProps = {
        children: null
    }


    render() {
        // let _this = this
        // const setState = data: any => {
        //     this.setState(data)
        // }

        const { children } = this.props
        // const { name } = this.state

        return (
            <div className="ui-menu">
                {children}
            </div>
        )
    }
}

