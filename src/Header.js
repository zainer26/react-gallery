import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  propTypes = {
    value: PropTypes.string,
    onSelectPhotos: PropTypes.function
  }

  getDefaultProps = () => {
      return {
          value: ''
      };
  }

  clickHandler = (value) => {
      if (typeof this.props.onSelectPhotos === 'function') {
          this.props.onSelectPhotos(value);
          //console.log(e.target.props);
      }
  }

  burgerToggle = () => {
    let linksEl = document.querySelector('.narrowLinks');
    if (linksEl.style.display === 'block') {
      linksEl.style.display = 'none';
    } else {
      linksEl.style.display = 'block';
    }
  }

  render() {
    return (
      <nav>
        <div className="navWide">
          <div className="wideDiv">
            <a href="#" onClick={ () => this.clickHandler('italy.json') }>Italy</a>
            <a href="#" onClick={ () => this.clickHandler('hollister.json') }>Hollister</a>
          </div>
        </div>
        <div className="navNarrow">
          <i className="fa fa-2x" onClick={this.burgerToggle}>
            <div className="fa-bars"></div>
            <div className="fa-bars"></div>
            <div className="fa-bars"></div>
          </i>
          <div className="narrowLinks">
            <a href="#" value="italy.json" onClick={() => this.clickHandler('italy.json') }>Italy</a>
            <a href="#" value="hollister.json" onClick={ () => this.clickHandler('hollister.json')}>Hollister</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
