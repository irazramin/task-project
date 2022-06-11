import '../src/Components/Styles/Common.css';
import './App.less';
import Home from './Components/Pages/Home';
import Header from './Components/Shared/Header';
function App() {
  return (
    <div className='App app-height'>
      <Header />
      <Home />
    </div>
  );
}

export default App;
