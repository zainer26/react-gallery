import React, { Component } from 'react';
// import './styles/App.css';
import axios from 'axios';
import Loader from './Loader';
import PhotoGallery from './PhotoGallery';
import Header from './Header';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      images: [],
      photoURL: 'italy.json',
    };
  }

  componentDidMount() {
    this.getPics('italy.json');
  }

  handleMenuClick = (photo_url) => {
      this.getPics(photo_url);
  }

  getPics = (photo_url) => {
    
    axios.get(photo_url)
      .then(res => {
        const images = res.data.map(images => images);
        this.setState({
          images,
          loading: false,
          error: null
        });
        //this.setState({loadedFlag: true});
      }).catch(err => {
        // Something went wrong. Save the error in state and re-render.
        this.setState({
          loading: false,
          error: err
        });
      });
  }
  
  renderError = () => {
    return (
      <div>
        Something went wrong: {this.state.error.message}
      </div>
    );
  }

  render() {
    const { loading, images, error } = this.state;

    if(error) {
      return this.renderError();
    }

    if(loading) {
      return (<Loader/>);
    }



    return (
      <div className="App">
        <Header onSelectPhotos={this.getPics} />
        <input value={this.state.photoURL} onChange={(event) => this.setState({photoURL: event.target.value})} />
        <button onClick={ () => this.getPics('hollister.json') }> Get </button>
        {loading ? <Loader/> : <PhotoGallery images={images}/>}
      </div>
    );
  }
}

export default App;
