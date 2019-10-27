import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './App.module.scss';
import './css/Test.css';
import { Hello, TestHook1, UserInfo } from '../node_modules/spfx-library';
import { Client } from '@microsoft/microsoft-graph-client';
import { ImplicitMSALAuthenticationProvider } from '../node_modules/@microsoft/microsoft-graph-client/lib/src/ImplicitMSALAuthenticationProvider';
import { MSALAuthenticationProviderOptions } from '../node_modules/@microsoft/microsoft-graph-client/lib/src/MSALAuthenticationProviderOptions';


import { UserAgentApplication } from "msal";
import { useEffect } from 'react';

declare var MyLibraryStrings: any;
const clientId = '7ac01734-b8a6-4958-bdf6-e9211cb0498d';

const App: React.FC = () => {
  const [count, increseCount] = React.useState(1);
  const [client, setClient] = React.useState<Client>(null);
  useEffect(() => {
    const graphScopes = ["User.Read", "User.Read.All"]; // An array of graph scopes
    // Important Note: This library implements loginPopup and acquireTokenPopup flow, remember this while initializing the msal
    // Initialize the MSAL @see https://github.com/AzureAD/microsoft-authentication-library-for-js#1-instantiate-the-useragentapplication
    const msalApplication = new UserAgentApplication({
      auth: {
        clientId
      }
    });
    const provOptions = new MSALAuthenticationProviderOptions(graphScopes);
    const authProvider = new ImplicitMSALAuthenticationProvider(msalApplication, provOptions);

    const options = {
      authProvider // An instance created from previous step
    };
    const c = Client.initWithMiddleware(options);
    setClient(c);

    // return () => {
    //   cleanup
    // };
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>This a sample React Application built using create-react-app CLI</h3>
        <br />
        count: {count}
        <input value="Test" type="button" onClick={(e) => {
          increseCount(count + 1);
        }} ></input>
        <Hello title={'from SPFx Library'} />
        <TestHook1 />
        {client && <UserInfo client={client} />}
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
