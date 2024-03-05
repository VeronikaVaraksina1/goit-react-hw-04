import { useState } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../SearchBar/SearchBar';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <SearchBar />
      <ImageGallery />
      <LoadMoreBtn />
    </>
  );
}
