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

const client = new WebSocket("ws://34.93.64.47:3000");

class App extends Component {

  componentDidMount() {
    client.onopen = () => {
      console.log('connection is open');
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
