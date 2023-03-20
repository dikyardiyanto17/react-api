import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPahlawan } from "../stores/action/actionCreator";

export default function Pahlawan() {
  const pahlawan = useSelector((state) => state.pahlawan.pahlawan);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPahlawan());
  }, []);
  return (
    <>
      {pahlawan.length == 0 && <h1 className="mt-20 text-center">Memuat...</h1>}
      {pahlawan.length != 0 && (
        <div className="flex justify-center p-3 md:text-base text-sm">
          <table className="border border-slate-400 mt-20">
            <thead>
              <tr>
                <th className="border border-slate-400 p-2">No</th>
                <th className="border border-slate-400 p-2">Nama</th>
                <th className="border border-slate-400 p-2">Deskripsi</th>
                <th className="border border-slate-400 p-2">Tanggal Lahir</th>
                <th className="border border-slate-400 p-2">Wafat</th>
                <th className="border border-slate-400 p-2">Tahun Kenaikan</th>
              </tr>
            </thead>
            <tbody>
              {pahlawan?.map((pejuang, index) => {
                return (
                  <tr key={index}>
                    <td className="border border-slate-400 p-1">{index + 1}</td>
                    <td className="border border-slate-400 p-1">
                      {pejuang.name}
                    </td>
                    <td className="border border-slate-400 p-1">
                      {pejuang.description}
                    </td>
                    <td className="border border-slate-400 p-1">
                      {pejuang.birth_year}
                    </td>
                    <td className="border border-slate-400 p-1">
                      {pejuang.death_year}
                    </td>
                    <td className="border border-slate-400 p-1">
                      {pejuang.ascension_year}
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
