import React from 'react';
import PropTypes from 'prop-types';
import '../style/PlanetCard.scss';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;

    console.log(typeof planetName);

    return (
      <div key={ planetName } data-testid="planet-card" className="PlanetCard">
        <div data-testid="planet-name" className="PlanetStatus">{planetName}</div>
        <img
          src={ `${planetImage}` }
          alt={ `Planeta ${planetName}` }
          className="PlanetStatus"
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
