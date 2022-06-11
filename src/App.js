import 'react-toastify/dist/ReactToastify.css';
  import { ToastContainer, toast } from 'react-toastify';

import '../src/Components/Styles/Common.css';
import './App.less';
import Home from './Components/Pages/Home';
import Header from './Components/Shared/Header';
function App() {
  return (
    <div className='App app-height'>
      <Header />
      <Home />
      <ToastContainer theme='colored'/>
    </div>
  );
}

export default App;
