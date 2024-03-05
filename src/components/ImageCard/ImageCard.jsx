export default function ImageCard({ smallImg, query }) {
  return (
    <div>
      <img src={smallImg} alt={query} />
    </div>
  );
}
