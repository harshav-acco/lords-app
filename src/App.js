import { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
// import FirstPage from './pages/main';
import Signup from './pages/Auth';
import Login from './pages/Auth/Login';
import Main from "./pages/main";

import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

// const client = new WebSocket("ws://34.93.64.47:3000");

class App extends Component {

  // componentDidMount() {
  //   client.onopen = () => {
  //     console.log('connection is open');
  //   }
  // }

  render() {
    return (
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route exact path='/main' element={<PrivateRoute/>}>
              <Route exact path='/main' element={<Main />}/>
            </Route>
            <Route exact path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    )
  }
}

export default App;
