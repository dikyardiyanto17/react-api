import Navbar from "../components/Navbar";
import HomeCards from "../components/HomeCards";

export default function Home() {
  const namaArtikel = [
    {
      name: "Pahlawan",
      description: "Kumpulan Informasi Tentang Pahlawan Indonesia",
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmmc.kalteng.go.id%2Ffiles%2Fberita%2F12112018075021_0.jpg&f=1&nofb=1&ipt=218c1cec8e28d06d6c53e7cd231555337d791060f05fac1484655f3d90c285fd&ipo=images'
    },
    {
      name: "Berita",
      description: "Kumpulan berita terbaru",
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-HsUH4g47RSc%2FWA4WqpMssPI%2FAAAAAAAAFzw%2FP7rufgxXTcAcNNX5FH6qyryms0eQacLOgCLcB%2Fs1600%2Fg.png&f=1&nofb=1&ipt=06d03babb04833fa614bfadda31acb67e75de4be1ef49025834a361e0c0df1ff&ipo=images'
    },
  ];
  return (
    <>
      <Navbar />
      <div className="App">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {namaArtikel.map((artikel, index) => {
          return <HomeCards key={index} artikel={artikel} />;
        })}
      </div>
    </>
  );
}
