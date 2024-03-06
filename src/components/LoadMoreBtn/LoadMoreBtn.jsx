import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onLoadMore }) {
  return (
    <button className={css.button} type="button" onClick={onLoadMore}>
      <svg className={css.icon}>
        <path
          id="circlePath"
          d="M 37,37 m -37,0 a 37,37 0 1,0 74,0 a 37,37 0 1,0 -74,0"
          fill="none"
          stroke="none"
        />
        <text fill="#000">
          <textPath href="#circlePath">Load • more •</textPath>
        </text>
      </svg>
    </button>
  );
}
