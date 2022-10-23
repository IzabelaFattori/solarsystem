import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import '../style/SolarSystem.scss';

class SolarSystem extends React.Component {
  render() {
    const cards = planets.map(({ name, image }) => (
      <PlanetCard
        key={ name }
        planetName={ name }
        planetImage={ image }
      />));

    return (
      <div data-testid="solar-system" className="SolarSystem">
        <Title headline="Planetas" className="tituloPlaneta" />
        <div className="Planeta">{cards}</div>
      </div>

    );
  }
}

export default SolarSystem;
