import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <div data-testid="solar-system">
        <h1>Qualquer coisa</h1>
        <Title headline="Planetas" />
      </div>
    );
  }
}

SolarSystem.propTypes = {
  planets: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default SolarSystem;
