import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Navigation from "./navigation/NavBar"
import ApplicationViews from './ApplicationViews'

function App() {
  return (
    <>

      <Navigation />
      <ApplicationViews />

    </>
  );
}

export default App;
