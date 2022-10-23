import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import '../style/Missions.scss';

class Missions extends Component {
  render() {
    const missionCards = missions.map(({ name, year, country, destination }) => (
      <MissionCard
        key={ name }
        name={ name }
        year={ year }
        country={ country }
        destination={ destination }
      />));

    return (
      <div data-testid="missions" className="missionPai">
        <Title headline="Missões" className="tituloMissao" />
        <div className="missions">{ missionCards }</div>
      </div>
    );
  }
}

export default Missions;
