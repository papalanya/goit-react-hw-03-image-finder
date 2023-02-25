import PropTypes from 'prop-types';

import { ImageGalleryList } from './imageGallery.styled';

export const ImageGallery = ({ images, onOpenModal }) => {
  <ImageGalleryList>
    {images.map(({ id, webformatURL, largeImageURL, tags }) => (
      <ImageGalleryItem
        key={id}
        url={webformatURL}
        largeImageURL={largeImageURL}
        tags={tags}
        openModal={onOpenModal}
      />
    ))}
  </ImageGalleryList>;
};

ImageGallery.PropTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
