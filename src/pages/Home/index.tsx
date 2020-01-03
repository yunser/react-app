import React from 'react'
import Button from '../../components/Button2/index'
import { addNum } from '../../test2'
import WiredButton from '../../components/WiredButton'
import { Menu, Divider, Table, AppBar, Checkbox } from '../../ui'
import { Link } from 'react-router-dom'

export default class About extends React.Component {
    render() {
        function handlerClick() {
            console.log('click', addNum(1, 1))
            // let pt = new Point()
            // pt.x = 2
            // pt.y = 2
        }
    
        interface HeaderProps {
            value: any
        }
    
        function Header(props: HeaderProps) {
            const { value } = props
            return (
                <div>header: {value}</div>
            )
        }


        return (
            <div title="关于">
                <button type="button" onClick={handlerClick}>这是按钮</button>
                <Button text="1" text2={123}></Button>
                <Header value={4} />
                <Menu>
                    <Menu.Item>菜单项1</Menu.Item>
                    <Menu.Item>菜单项2</Menu.Item>
                    <Menu.Item>菜单项3</Menu.Item>
                </Menu>
                skeleton
                <WiredButton>Button</WiredButton>
                <Divider />
                <Table>
                    <tr>
                        <th>这是标题</th>
                        <th>这是标题2</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                    </tr>
                </Table>
                <Link to="/about">关于页面</Link>
            </div>
        )
    }
}
