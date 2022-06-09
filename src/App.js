import { Button } from 'antd';
import './App.less';
import Header from './Components/Shared/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Button type='primary'>Button</Button>
    </div>
  );
}

export default App;
