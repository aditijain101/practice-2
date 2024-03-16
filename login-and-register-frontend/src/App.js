import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import AddUser from './components/homepage/addUser';
import Header from './components/Header/header';

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
      <Header user={user} />
        <Switch>
          <Route exact path="/">
            
               <Homepage setLoginUser={setLoginUser} user={user} /> 
            
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/add">
            <AddUser  />
          </Route>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
