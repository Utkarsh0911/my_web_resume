import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import LandingPage from './Pages/LandinPage';

class App extends React.Component {
  

render() {
  return (
    <div className='AppContainer'>

<LandingPage/>
      
    </div>
  )
}
}

export default App;
