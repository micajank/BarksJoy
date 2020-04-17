import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import NavBottom from '../components/NavBottom';
import Content from './components/Content'


function App() {
  return (
    <div className="App">
      <main>
        <Content />
      </main>
      <div className="nav-bar">
        <NavBottom />
      </div>
    </div>
  )}

export default App;