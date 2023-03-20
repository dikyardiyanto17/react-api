export default function FilmCards({ movie }) {
  const posterUrl = (poster) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${poster}`;
  };
  const description = movie.overview;
  return (
    <>
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg text-center flex justify-center flex-wrap mt-20"
        style={{ width: "300px" }}
      >
        <img
          src={posterUrl(movie?.poster_path)}
          alt="Gambar"
          style={{ height: "200px" }}
        />
        <div className="px-6 py-4" style={{ height: "430px" }}>
          <div className="font-bold text-xl mb-2">{movie?.title}</div>
          <div className="text-xl mb-2">{movie?.release_date}</div>
          <p className="text-gray-700 text-base text-justify">
            {description.slice(0, 350)}
            {description.length >= 350 && (
              <a href={`https://www.themoviedb.org/movie/${movie.id}`}>
                ...readmore
              </a>
            )}
          </p>
        </div>
        <div className=" flex justify-center items-end mb-10 mt-0">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            <a href={`https://www.themoviedb.org/movie/${movie.id}`}>Read</a>
          </button>
        </div>
      </div>
    </>
  );
}
