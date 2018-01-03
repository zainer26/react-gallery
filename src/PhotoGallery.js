import React, { Component } from 'react';
import axios from 'axios';
import Lightbox from "react-image-lightbox";
import Loader from './Loader';
import PhotoItem from './PhotoItem';

class PhotoGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  updateLightboxState = (object) => {
    //{ isOpen: true, photoIndex: index }
    this.setState(object);
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    const { images } = this.props;


    return (
      <div>
        <div className="container">
          {images.map((image, index) =>
              <PhotoItem stateFunction={this.updateLightboxState} image={image} index={index} />
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
