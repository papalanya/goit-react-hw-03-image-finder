import PropTypes from 'prop-types';
import axios from "axios";

export default function fetchImages (searchQuery, page) {
    const response = axios.get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=31299288-10c92835a232b11626e7788a3&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response;
}

fetchImages.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
};