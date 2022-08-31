import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import Navigation from './components/Shared/Navigation/Navigation';
import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';
import { Rooms } from './pages/Rooms/Rooms';
import {Room} from './pages/Room/Room';
import { useState } from 'react';
import useLoading from './hooks/useLoading';
import { useSelector } from 'react-redux';
const AUTH=false;
const USER={activated:false};

function App() {
  const {Loading}=useLoading();

  return Loading ? ( 'Loading...'):
    (<div className="App">
      <BrowserRouter>
        <Navigation/>
        <Switch>
          <GuestRoute path="/" exact>
            <Home/>
          </GuestRoute>
          <GuestRoute path="/authenticate" exact>
            <Login/>
          </GuestRoute>
          <SemiProtectedRoute path="/register" exact>
            <Register/>
          </SemiProtectedRoute>
          <ProtectedRoute path="/rooms" exact>
            <Rooms/>
          </ProtectedRoute>
          <ProtectedRoute path="/room/:id">
            <Room/>
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

function GuestRoute({children,...rest}) {
  let User=useSelector((state)=> state.iR.user);
  let isAuth=useSelector((state)=> state.iR.Auth);
  console.log(User);
  return <Route
    {...rest}
    render={({location})=>{
      return (
        !isAuth ? 
        (
          children
        ): (isAuth && !User.activated)?(
          <Redirect to={{
            pathname:'/register',
            state:{from:location}
          }}/>
          ) : (
          <Redirect to={{
            pathname:'/rooms',
            state:{from:location}
          }}/>
          )
      )
    }}
  ></Route>;
}

function SemiProtectedRoute({children,...rest}) {
  let User=useSelector((state)=> state.iR.user);
  let isAuth=useSelector((state)=> state.iR.Auth);
  return <Route
    {...rest}
    render={({location})=>{
      return (
        !isAuth ? 
        (
          <Redirect to={{
            pathname:'/',
            state:{from:location}
          }}/>
        ): (isAuth && !User.activated)?(
          children
        ) : (
          <Redirect to={{
            pathname:'/rooms',
            state:{from:location}
          }}/>
          )
      )
    }}
  ></Route>;
}

function ProtectedRoute({children,...rest}) {
  let User=useSelector((state)=> state.iR.user);
  let isAuth=useSelector((state)=> state.iR.Auth);
  return <Route
    {...rest}
    render={({location})=>{
      return (
        !isAuth ? 
        (
          <Redirect to={{
            pathname:'/',
            state:{from:location}
          }}/>
        ): (isAuth && !User.activated)?(
          <Redirect to={{
          pathname:'/register',
          state:{from:location}
        }}/>
          ) : (
            children
          )
      )
    }}
  ></Route>;
}



export default App;
