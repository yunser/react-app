import React from 'react'
import './App.css'
import Button from './components/Button2/index'
import { addNum } from './test2'
import WiredButton from './components/WiredButton'
import { App as UIApp } from './ui'
// import { Link } from 'react-router-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Angle from './pages/Angle'

class Point {

    x: number
    y: number

    _asd: number

    constructor() {
        this.x = 0
        this.y = 0
        this._asd = 123
    }

    say() {
        this._asd = 7
    }
}

const App: React.FC = () => {

    // function add(a: number, b: number) {
    //   return a + b
    // }
    // const { asd } = pro

    

    // type CallbackParam
    // function doTask(fn: (name: string, age: number) => number) {
    //   fn && fn('123', 23)
    // }

    // doTask((name, age) => {
    //   console.log('taskContent' + name + age)
    //   return 1
    // })

    // function objCal(obj: Object) {
    //     console.log('objCal', obj.x + obj.y)
    // }
    // objCal({
    //     x: 1,
    //     y: 2,
    // })

    return (
        <UIApp className="App">
            <header className="App-header">
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/angle" component={Angle} />
                    </div>
                </BrowserRouter>
            </header>
        </UIApp>
    )
}

export default App
