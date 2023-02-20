import { Component } from "react";
// import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import fetchImages from "./PixabayAPI/Pixabay";

import { Searchbar } from "./Searchbar/Searchbar";

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    error: null,
    isLoading: false,
    showModal: false,
    largeImageURL: '',
    tags: '',
  };

  render() {
    // const { images, isLoading, largeImageURL, tags, showModal, totalHits } =
    //   this.state;
    
    return (
      <>
        <Searchbar onSubmit={this.onFormSubmit} />
      </>
    );
  }
}