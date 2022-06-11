import { Image } from 'antd';
import loginBg from '../../assests/login-bg.svg';
import '../Styles/Common.css';
import Login from './Login';
const Home = () => {
  return (
    <div className='min-h'>
      <div
        className='login-page'
      >
        <div>
          <div>
            <Login />
          </div>
        </div>
        <div className='mock-block login-bg-img login-side-bg'>
          <div>
            <Image
              src={loginBg}
              preview={false}
              width={600}
              height={600}
              className='login-bg-img'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home