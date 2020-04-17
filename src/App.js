import React from 'react';
import './App.css';
import Content from './content/Content'
import { Route } from 'react-router-dom';

import NavBottom from '../components/NavBottom';


import { Container, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPaw, faComment } from '@fortawesome/free-solid-svg-icons';

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