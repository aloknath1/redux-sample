import React from 'react';
import './App.css';
import { fakeUserData } from './api';
import { useDispatch } from 'react-redux';
import DisplayUsers from './DisplayUsers';
import { addNewUser } from './store/users';

function App() {
  const dispatch = useDispatch();
  const addUser = () => {
    let name = fakeUserData();
    console.log(name);   
    dispatch(addNewUser(name));
  }

  return (
    <div className="App">
      <h2>List of Users</h2>
      <div><a href="#" onClick={() => addUser()}>Add Users</a></div>
      <ul>
        <DisplayUsers />
        </ul>

    </div>
  );
}

export default App;
