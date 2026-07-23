import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import UsersList from './components/UsersList';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  let users = [{name: "khan"}, {name: "ali"}, {name: "rabbit"}];




  return (
    <>
      <NavBar />
      <h1>Home Page</h1>
    </>
  )
}

export default App