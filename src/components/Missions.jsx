import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';

export default class Missions extends Component {
  render() {
    const { missionName } = this.props;
    return (
      <div data-testid="missions">
        <Title headline={ missionName } />
      </div>
    );
  }
}

Missions.propTypes = {
  missionName: PropTypes.string.isRequired,
};
