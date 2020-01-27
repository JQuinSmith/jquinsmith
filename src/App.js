import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Navigation from "./navigation/NavBar"
import ApplicationViews from './ApplicationViews'

function App() {
  return (
    <>
      {/* <HashRouter basename="/"> */}
      <Navigation />
        <ApplicationViews />
      {/* </HashRouter> */}
    </>
  );
}

export default App;
