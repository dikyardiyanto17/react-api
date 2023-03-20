import { Link } from "react-router-dom";

export default function HomeCards({ artikel }) {
  return (
    <>
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg m-10 text-center flex justify-center flex-wrap mt-20"
        style={{ width: "300px" }}
      >
        <img
          src={artikel.image}
          alt="Gambar"
          style={{ objectFit: "cover", height: "200px" }}
        />
        <div className="px-6 py-4 mb-0">
          <Link to={artikel.linkto}>
            <div className="font-bold text-xl mb-2">{artikel?.name}</div>
          </Link>
          <p className="text-gray-700 text-base">{artikel?.description}</p>
        </div>
      </div>
    </>
  );
}
