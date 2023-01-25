export function MoviesGallery({ movies, deleteMovie, showPoster }) {
  return (
    <ul>
      {movies.map(({ id, title, vote_count: votes, backdrop_path: img }) => {
        return (
          <li key={id}>
            <h2>{title}</h2>
            <p>Votes: {votes}</p>
            <button
              type="button"
              onClick={() => {
                deleteMovie(id);
              }}
            >
              Delete
            </button>
            <button
              type="button"
              onClick={() => {
                showPoster({ src: { img }, alt: { title } });
              }}
            >
              Open poster
            </button>
          </li>
        );
      })}
    </ul>
  );
}
