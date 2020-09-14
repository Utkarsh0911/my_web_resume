import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import LandingPage from './Pages/LandinPage';
import styles from './css/app.module.css'
class App extends React.Component {
  

render() {
  return (
    <div className={styles.container}>

<LandingPage/>
      
    </div>
  )
}
}

export default App;
