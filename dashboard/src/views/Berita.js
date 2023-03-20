import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBerita } from "../stores/action/actionCreator";

export default function Berita() {
  const berita = useSelector((state) => state.berita.berita);
  const dispatch = useDispatch();
  const formatedDate = (date) => {
    return new Date(date)
      .toLocaleString("en-ZA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\//g, "-");
  };
  useEffect(() => {
    dispatch(getBerita());
  }, []);
  return (
    <>
      {berita.length == 0 && <h1 className="mt-20 text-center">Memuat...</h1>}

      {berita.length != 0 && (
        <div className="flex justify-center p-3 md:text-base text-sm">
          <table className="border border-slate-400 mt-20">
            <thead>
              <tr>
                <th className="border border-slate-400 p-2">No</th>
                <th className="border border-slate-400 p-2">Author</th>
                <th className="border border-slate-400 p-2">Judul</th>
                <th className="border border-slate-400 p-2">Tanggal Posting</th>
                <th className="border border-slate-400 p-2">Link</th>
              </tr>
            </thead>
            <tbody>
              {berita?.map((isi, index) => {
                return (
                  <tr key={index}>
                    <td className="border border-slate-400 p-1">{index + 1}</td>
                    <td className="border border-slate-400 p-1">
                      {isi.author}
                    </td>
                    <td className="border border-slate-400 p-1">{isi.title}</td>
                    <td className="border border-slate-400 p-1">
                      {formatedDate(isi.publishedAt)}
                    </td>
                    <td className="border border-slate-400 p-2">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <a href={isi.url}>Link</a>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
