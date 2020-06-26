import React from 'react';
import './App.css';
import Sidebar from './components/layouts/sidebar.js';
import Topbar from './components/layouts/topbar.js';
import Header from './components/layouts/header.js';
import Content from './components/layouts/content.js';
function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar/>
            
            <div className="container-fluid">
              <Header/>
              <Content />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
