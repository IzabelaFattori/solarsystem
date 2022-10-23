import React from 'react';
import PropTypes from 'prop-types';
import '../style/Title.scss';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className="planetas">{headline}</h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.node.isRequired,
};

export default Title;
