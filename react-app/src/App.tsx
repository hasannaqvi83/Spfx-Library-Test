import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { Hello } from 'spfx-library';
import './css/Test.css';

const App: React.FC = () => {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello name={'from SPFx Library'} />
        <div className='Test'>
          <span className="testScss">Test SCSS from within React App</span>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
