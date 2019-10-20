import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { Hello } from 'spfx-library';
import './css/Test.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Hello name={'Hasan1'} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='Test'>
          <span className="testScss">Test SCSS</span>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
