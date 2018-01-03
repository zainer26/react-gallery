import React, { Component } from 'react';
// import './styles/App.css';
import axios from 'axios';
import Loader from './Loader';
import PhotoGallery from './PhotoGallery';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    this.setState({
      loading: false,
      error: null
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="App">
        {loading ? <Loader/> : <PhotoGallery/>}
      </div>
    );
  }
}

export default App;
