import React from 'react'
import './index.css'

export default class WiredButton extends React.Component {

    state = {
    }

    componentDidMount() {
        console.log('render test', this.handleRef.current.getBoundingClientRect())
    }

    render() {
        let _this = this
        const setState = data => {
            this.setState(data)
        }

        const { waveStyle, hasClass } = this.state


        this.handleRef = React.createRef()
        this.waveRef = React.createRef()

        function handlerClick(e) {
        }



        return (
            <div title="测试">
                <div className="ui-wired-button" ref={this.handleRef} onClick={handlerClick} style={{
                    display: 'inline-block',
                    // width: 125,
                    // height: 40,
                    // backgroundColor: '#27C4B4',
                    // color: 'white',
                }}>
                    Button12
                    <div className="ui-content">
                    </div>
                    <svg className="ui-bg" width={300} height={300}>
                        <rect width="100%" height="100%" style={{ fill: 'none', strokeWidth: 1, stroke: 'rgb(0,0,0)' }} />
                    </svg>
                    {/* <div className="ui-bg"></div> */}
                </div>
            </div>
        )
    }
}

