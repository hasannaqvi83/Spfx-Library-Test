import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { Hello } from 'spfx-library';
import styles from './App.module.scss';

import './css/Test.css';

const App: React.FC = () => {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>This a sample React Application built using create-react-app CLI</h3>
        <Hello title={'from SPFx Library'} />
        <br />
        <div className={styles.AppSCSS} >
          <div className={styles.Hello} >
            Hello from SCSS defined locally in App
          </div>
        </div>
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
