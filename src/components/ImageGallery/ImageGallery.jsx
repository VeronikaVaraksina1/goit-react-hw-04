import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ items, query }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <ImageCard smallImg={item.urls.small} query={query} />
        </li>
      ))}
    </ul>
  );
}
