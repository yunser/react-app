import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Divider, Table, AppBar, Checkbox } from '../../ui'
import Page from '../../components/Page'

export default class About extends React.Component {
    render() {
        return (
            <Page title="关于">
                这是关于页面2
                <Link to="/">首页</Link>
                <AppBar />
            </Page>
        )
    }
}
