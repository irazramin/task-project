import { Button, Checkbox, Form, Input } from 'antd';
import { toast } from 'react-toastify';
import '../Styles/Common.css';
const Login = () => {
      const onFinish = (values) => {
        // console.log('Success:', values);
        const email = values?.email;
        const password = values?.password;
        const data = {
            email,
            password
        }
        fetch(`https://reqres.in/api/login`,{
            method:"POST",
            headers:{
                'content-type' : "application/json"
            },
            body:JSON.stringify(data),
        })
        .then(res => res.json())
        .then(data => {
            if(data.error){
              toast.error(data.error)
            }else{
              toast.success(data.token)
            }
        })
      };

      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div className='login-form' direction='vertical'>
      <div className='login-text'>
        <h2>Welcome Back</h2>
        <span>Sub-title text goes here</span>
      </div>
      <Form
        name='basic'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
        style={{ width: '100%', margin: '0 auto' }}
      >
        <Form.Item
          name='email'
          //   rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder='Email Address *' />
        </Form.Item>

        <Form.Item
          name='password'
          //   rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder='Password *' />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' block>
            Login
          </Button>
        </Form.Item>
        
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Form.Item name='remember' valuePropName='checked'>
            <Checkbox style={{ fontWeight: '600', color: '#023047' }}>
              Remember me
            </Checkbox>
          </Form.Item>
          <p type='primary' style={{ fontWeight: '600', color: '#023047' }}>
            Forget password?
          </p>
        </div>
      </Form>
    </div>
  );
}

export default Login