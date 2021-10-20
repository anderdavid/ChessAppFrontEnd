import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import LoginTest from './components/TestComponents/LoginTest';

/* const hello = () => {
  alert('hello world');
}; */
function App() {
  return (
    <Provider store={store}>
      <div>
        {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          onClick={hello}
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello world ChessApp
        </a>
      </header> */}
        <LoginTest />
      </div>
    </Provider>
  );
}

export default App;
