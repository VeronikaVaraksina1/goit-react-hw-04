import { useState, useEffect } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../SearchBar/SearchBar';
import { fetchData } from '../../image-api';
import toast, { Toaster } from 'react-hot-toast';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    async function getData() {
      try {
        setLoading(true);
        setError(false);

        const data = await fetchData(searchQuery, page);

        setImages(previousImages => [...previousImages, ...data.results]);
      } catch (error) {
        setError(true);
        toast.error("This didn't work.");
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [searchQuery, page]);

  const handleSubmit = query => {
    if (query === '') {
      toast.error('You need to enter text to find pictures');
    }
    setImages([]);
    setSearchQuery(query);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar query={searchQuery} onSearch={handleSubmit} />
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {images.length > 0 && <ImageGallery items={images} query={searchQuery} />}
      {images.length > 0 && <LoadMoreBtn onLoadMore={handleLoadMore} />}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
