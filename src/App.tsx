import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Register from './Register';
import Login from './Login';
import Dog from './Dog';
import Match from './Match';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dog" element={<Dog/>}/>
          <Route path="/match" element={<Match/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
