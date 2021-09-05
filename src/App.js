import React from 'react';
import { useEffect, useState } from 'react';
import {getUsers} from './utils/api'
import './App.css';

const  App = () => {
  const [users, setUsers]  = useState([]);
  useEffect(() => {
    getUsers().then(data => {
      setUsers(data)
    })
  }, [])
  return (
    <main>
      {JSON.stringify(users)}
    </main>
  );
}

export default App;
