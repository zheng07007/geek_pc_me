import { Component } from 'react'
import style from './index.module.scss'
// import sassTest from './index.module.scss'
import { Layout, Menu, Popconfirm, Card, Button, Image } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  FormOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import chart from '../../assets/chart.png'

const { Header, Content, Sider } = Layout

class Home extends Component {
  state = {
    btnText: '发送验证码',
    btnLoading: false
  }

  btnSub = () => {
    let btnTime = 6
    this.timer = setInterval(() => {
      if (btnTime > 0) {
        btnTime--
        this.setState({ btnText: '剩余' + btnTime + 's', btnLoading: true })
      } else {
        this.setState({ btnText: '发送验证码', btnLoading: false })
        clearInterval(this.timer) // 清除定时器 不然会一直执行
      }
    }, 1000)
  }
  render() {
    return (
      <>
        <Layout className={style.layout}>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className={style.logo} />
            <div className={style.header}>
              <span style={{ marginRight: 15, color: 'white' }}>
                <strong> 138xxxxxxxx</strong>
              </span>
              <Popconfirm
                title={'确定退出'}
                onConfirm={() => {
                  return
                }}
                onCancel={() => {
                  return
                }}
                okText="是"
                cancelText="否"
              >
                <span style={{ cursor: 'pointer', color: 'white' }}>
                  <LogoutOutlined style={{ marginRight: 5 }} />
                  <strong>退出</strong>
                </span>
              </Popconfirm>
            </div>
          </Header>
          <Layout>
            <Sider
              width={200}
              className="site-layout-background"
              style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 60,
                bottom: 0
              }}
            >
              <Menu
                theme="dark"
                mode="inline"
                style={{ height: '100%', borderRight: 0 }}
              >
                <Menu.Item key={'1'} icon={<HomeOutlined />}>
                  数据概览
                </Menu.Item>
                <Menu.Item key={'2'} icon={<DiffOutlined />}>
                  内容管理
                </Menu.Item>
                <Menu.Item key={'3'} icon={<FormOutlined />}>
                  发布文章
                </Menu.Item>
              </Menu>
            </Sider>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                marginTop: 50,
                marginLeft: 190,
                minHeight: 680
              }}
            >
              {/* <Card style={{ height: '100%' }}> */}
                {/* <Button
                  disabled={this.state.btnLoading}
                  loading={this.state.btnLoading}
                  onClick={this.btnSub}
                >
                  {this.state.btnText}
                </Button> */}
                <Image preview={false} src={chart} alt="" />
              {/* </Card> */}
            </Content>
          </Layout>
        </Layout>
      </>
    )
  }
}

export default Home
