import { FetchingBerita, FetchingFilm, FetchingPahlawan } from "./actionType";
const baseUrl = "http://localhost:3001/";

export const fetchPahlawan = (payload) => {
  return { type: FetchingPahlawan, payload };
};

export const fetchBerita = (payload) => {
  return { type: FetchingBerita, payload };
};

export const fetchFilm = (payload) => {
    return { type: FetchingFilm, payload };
  };

export const getPahlawan = () => {
  return (dispatch) => {
    const PAHLAWAN_API = process.env.REACT_APP_PAHLAWAN_API;

    fetch(PAHLAWAN_API, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => dispatch(fetchPahlawan(data)))
      .catch((error) => console.log(error));
  };
};

export const getBerita = () => {
  return (dispatch) => {
    fetch(baseUrl + `berita`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => dispatch(fetchBerita(data)))
      .catch((error) => console.log(error));
  };
};

export const getFilm = (halaman) => {
    return (dispatch) => {
        const FILM_API = process.env.REACT_APP_FILM_API
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${FILM_API}&language=en-US&page=${halaman}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => dispatch(fetchFilm(data.results)))
        .catch((error) => console.log(error));
    };
  };