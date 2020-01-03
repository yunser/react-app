import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Divider, Card, Table, AppBar, Checkbox } from 'ui'
import Page from 'components/Page'
import WiredButton from 'components/WiredButton'

export default class About extends React.Component {
    render() {
        return (
            <Page title="数镜">
                这是关于页面2
                <Link to="/">首页</Link>
                {/* <AppBar /> */}
                <Divider />

                212

                <Card>
                    这是布局卡片
                </Card>

                <Button>122</Button>
                <WiredButton>122</WiredButton>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.Cell>头部</Table.Cell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                12
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                    {/* <Table.Header></Table.Header> */}
                </Table>
            </Page>
        )
    }
}
