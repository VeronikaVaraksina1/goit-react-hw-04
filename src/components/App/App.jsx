import css from './App.module.css';

import { useState, useEffect } from 'react';

import { fetchData } from '../../image-api';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../SearchBar/SearchBar';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';

import toast, { Toaster } from 'react-hot-toast';
import { MagnifyingGlass } from 'react-loader-spinner';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    async function getData() {
      try {
        setLoading(true);
        setError(false);

        const data = await fetchData(searchQuery, page);

        if (data.total_pages === 0) {
          toast.error('No results!');
        }

        setImages(previousImages => [...previousImages, ...data.results]);
      } catch (error) {
        setError(true);
        toast.error('Error! Please reload the page.');
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [searchQuery, page]);

  const endOfResults = Math.ceil(images.total_pages / 10); // per_page: 10
  const numberOfCards = images.length > 0;

  const handleSubmit = query => {
    if (query === '') {
      toast.error('You need to enter text to find pictures');
    }
    setImages([]);
    setSearchQuery(query);
  };

  const handleLoadMore = () => {
    if (page >= endOfResults) {
      toast.error('Sorry, but you have reached the end of search results.');
    }
    setPage(page + 1);
  };

  function openModal(value) {
    setModalContent(value);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className={css.container}>
      <SearchBar query={searchQuery} onSearch={handleSubmit} />

      {error && (
        <ErrorMessage>
          🚩 Something went wrong! Please reload the page.
        </ErrorMessage>
      )}

      {numberOfCards && (
        <ImageGallery images={images} onOpenModal={openModal} />
      )}
      {numberOfCards && !loading && <LoadMoreBtn onLoadMore={handleLoadMore} />}

      {loading && (
        <div className={css.loader}>
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperClass="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="#000"
          />
        </div>
      )}
      <ImageModal
        value={modalContent}
        modalIsOpen={modalIsOpen}
        onCloseModal={closeModal}
      />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
