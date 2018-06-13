import React, {Component} from 'react';

import './ImageCarousel.css';

class ImageCarousel extends Component {

    render() {
        return (
            <div className="carousel-outer">
                <img
                    className="carousel-image"
                    src={require('../../assets/carousel/stock-image-4.jpeg')}
                />

                <div className="carousel-desc">

                    <span className="image-description">
                        Shop the latest
                    </span>
                </div>
            </div>
        )
    }
}

export default ImageCarousel;
