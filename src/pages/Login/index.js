import { Component } from 'react'
import logo from 'assets/logo.png'
import { Card, Form, Input, Button, Checkbox, message } from 'antd' // 按需引入 antd 组件
import './index.scss'
import { login } from 'api/user'
import { setToken } from 'utils/local'

class Login extends Component {
  // state = {}

  // 登陆login
  handleLogin = async value => {
    // console.log(value)
    try {
      const res = await login(value)
      // console.log(res)
      message.success('登陆成功！')
      this.props.history.push('/home') // 跳转页面
      setToken(res.data.token) // 储存token
    } catch (error) {
      message.error('登陆失败')
    }
  }

  render() {
    return (
      <div className="login">
        <Card className="login-container">
          <img className="login-logo" src={logo} alt="" />
          <Form
            size={'large'}
            name="basic"
            labelCol={{ span: 8 }}
            // 表单默认值
            initialValues={{
              mobile: '13888888888',
              code: '246810',
              remember: true
            }}
            // 表单提交
            onFinish={this.handleLogin}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
            validateTrigger={['onChange', 'onBlur']}
          >
            <Form.Item
              label=""
              name="mobile"
              rules={[
                { required: true, message: '请输入手机号' },
                { pattern: /^1[3-9]\d{9}$/, message: '格式不正确' }
              ]}
            >
              <Input placeholder={'请输入手机号'} />
            </Form.Item>

            <Form.Item
              label=""
              name="code"
              rules={[
                { required: true, message: '请输入验证码' },
                { pattern: /^\d{6}$/, message: '格式不正确' }
              ]}
            >
              <Input placeholder={'请输入验证码'} />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              rules={[
                {
                  validator(_, value) {
                    return value
                      ? Promise.resolve()
                      : Promise.reject(new Error('请阅读协议！'))
                  }
                }
              ]}
            >
              <Checkbox>我已阅读并同意「用户协议」和「隐私条款」</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                登陆
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Login
