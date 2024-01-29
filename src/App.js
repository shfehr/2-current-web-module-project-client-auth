import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Components/Login';
import FriendsList from './Components/FriendsList';
import AddFriend from './Components/AddFriend';
import Logout from './Components/LogOut';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h2>Friends DataBase</h2>
          <Link className="link" to="login">Login</Link>
          <Link className="link" to="friends">Friends</Link>
          <Link className="link" to="friends/add">Add Friends</Link>
          <Link className="link" to="/logout">Logout</Link>

        </header>
        <Routes>
          <Route exact path="/" element={<Login />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/friends" element={<FriendsList />}/>
          <Route exact path="/friends/add" element={<AddFriend />}/>
          <Route exact path="/logout" element={<Logout />}/>
        </Routes>
        {/* <h2>Client Auths Project</h2> */}
      </div>
    </Router>
  );
}

export default App;
