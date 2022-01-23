import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import UserInfo from './components/UserInfo';


class App extends Component {
  render(){
    return (
      <div className='App'>
        <Header/>
        <UserInfo/>
</div>
  );
  }
}

export default App;
