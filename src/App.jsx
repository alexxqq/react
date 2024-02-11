import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Task from './components/Task';
import Signup from './components/Signup';
import Nav from './components/Nav';
import Login from './components/Login';
import Tasks from './components/Tasks';
function App() {



  return (
<div className='App'>
  <Router>
    <Routes>
      <Route path="/" element={<>
      <Nav/>
      <Tasks/>
      </>}
      />
      <Route path="/login" element={<>
        <Nav/>
        <Login/>
      </>}
      />
      <Route path="/signup" element={<>
        <Nav/>
        <Signup/>
      </>}
      />


    </Routes> 
  </Router>
</div>
  )
}


export default App;
