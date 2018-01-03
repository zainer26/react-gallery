import React, { Component } from 'react';
import axios from 'axios';
import Lightbox from "react-image-lightbox";
import Loader from './Loader';
import PhotoItem from './PhotoItem';

class PhotoGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      loading: true,
      error: null,
      photoIndex: 0,
      isOpen: false
    };
  }

  componentDidMount() {
    axios.get(`http://demo8762083.mockable.io/italypics`)
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

  renderError() {
    return (
      <div>
        Something went wrong: {this.state.error.message}
      </div>
    );
  }

  render() {
    const { loading, error, photoIndex, isOpen, images } = this.state;

    if(error) {
      return this.renderError();
    }

    if(loading) {
      return (<Loader/>);
    }

    return (
      <div>
        <div className="container">
          {this.state.images.map((image, index) =>
              <div className="item" key={image.id} style={{backgroundImage: "url('./images/"+image.filename+"')"}} onClick={() => this.setState({ isOpen: true, photoIndex: index })}>
                <a href="">
                  { image.caption }
                </a>
              </div>
          )}
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={'./images/'+images[photoIndex].filename}
            nextSrc={'./images/'+images[(photoIndex + 1) % images.length].filename}
            prevSrc={'./images/'+images[(photoIndex + images.length - 1) % images.length].filename}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })}
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })}
            imageCaption={images[photoIndex].caption}
          />
        )}
      </div>
    );
  }
}

export default PhotoGallery;
