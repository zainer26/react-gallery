import React from 'react';
import PropTypes from 'prop-types';

function PhotoItem (props) {
    const { image, stateFunction, index } = props;
    return(
      <div className="item" key={image.id} style={{backgroundImage: "url('./images/"+image.filename+"')"}} onClick={() => stateFunction({ isOpen: true, photoIndex: index })}>
        <a href="">
          { image.caption }
        </a>
      </div>
    )
}

PhotoItem.propTypes = {
	image: PropTypes.string,
	stateFunction: PropTypes.func,
	index: PropTypes.number,
};

export default PhotoItem;
