import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import UserInfo from './components/Profile';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <UserInfo />
      </div>
    );
  }
}

export default App;
