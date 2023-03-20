import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilmCards from "../components/FilmCards";
import { getFilm } from "../stores/action/actionCreator";
import ReactPaginate from "react-paginate";
import "../css/react-paginate.css";
export default function Film() {
  const film = useSelector((state) => state.film.film);
  const dispatch = useDispatch();
  let halaman = 1;
  const handlePageClick = (event) => {
    dispatch(getFilm(event.selected + 1));
    console.log(`User requested page number ${event.selected}`);
  };
  useEffect(() => {
    dispatch(getFilm(halaman));
  }, []);
  return (
    <>
    {film.length == 0 &&  <h1 className="mt-20 text-center">Memuat...</h1>}
      {film.length != 0 && (
        <div>
          <div className="flex flex-wrap justify-center">
            {film.map((movie, index) => {
              return <FilmCards key={index} movie={movie} />;
            })}
          </div>
          <br />
          <div>
            <ReactPaginate
              className="react-paginate"
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageCount={20}
              previousLabel="<"
            />
          </div>
        </div>
      )}
    </>
  );
}
