import React,  { useEffect, useState } from 'react';
import {getUsers, fetchAllStations, fetchDetailStation} from './utils/api'
import './App.css';

const  App = () => {
  const [users, setUsers]  = useState([]);
  useEffect(() => {
    // fetchAllStations.then(data => {
    //   setUsers(data)
    // })
    fetchDetailStation("BGD").then(data => {
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
