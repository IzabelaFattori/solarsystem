import React from 'react';
import PropTypes from 'prop-types';
import planets from '../data/planets';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">
          {' '}
          { planetName }
          {' '}
        </p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        <ul className="planetas">
          {planets.map((planet) => (
            <li key={ planet.name }>
              { planet.name }
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
