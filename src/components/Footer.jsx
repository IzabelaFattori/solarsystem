import React, { Component } from 'react';
import '../style/Footer.scss';

export default class Footer extends Component {
  render() {
    const getDate = new Date().getFullYear();
    return (
      <footer className="Footer">
        <p>
          Made
          {' '}
          by:
          {' '}
          <a href="https://www.linkedin.com/in/izabela-fattori-316946247/" target="_blank" rel="noreferrer">Izabela Fattori</a>
          {' '}
          <span>♥</span>
          {' '}
          {`${getDate}`}
        </p>
      </footer>
    );
  }
}
