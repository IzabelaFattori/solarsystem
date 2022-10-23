import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import Footer from './components/Footer';
import './style/App.scss';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem headline="Planetas" />
        <Missions headline="Missões" />
        <Footer />
      </>
    );
  }
}

export default App;
