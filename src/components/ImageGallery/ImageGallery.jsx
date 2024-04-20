import React, { Component } from 'react';
import PropTypes from 'peop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

class ImageGallery extends Component {
    static propTypes = {
        images: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
            })
        ).isRequired,
    }

    render() {
        const { images } = this.props;
        return (
            <ul>
                {images.map(image => (
                    <ImageGalleryItem key={image.id} image={image} />
                ))}
            </ul>
        );
    }
}

export default ImageGallery;