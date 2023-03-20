import HomeCards from "../components/HomeCards";

export default function Home() {
  const namaArtikel = [
    {
      name: "Pahlawan",
      description: "Kumpulan Informasi Tentang Pahlawan Indonesia",
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmmc.kalteng.go.id%2Ffiles%2Fberita%2F12112018075021_0.jpg&f=1&nofb=1&ipt=218c1cec8e28d06d6c53e7cd231555337d791060f05fac1484655f3d90c285fd&ipo=images',
      linkto: '/pahlawan'
    },
    {
      name: "Berita Terbaru",
      description: "Kumpulan berita terbaru",
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-HsUH4g47RSc%2FWA4WqpMssPI%2FAAAAAAAAFzw%2FP7rufgxXTcAcNNX5FH6qyryms0eQacLOgCLcB%2Fs1600%2Fg.png&f=1&nofb=1&ipt=06d03babb04833fa614bfadda31acb67e75de4be1ef49025834a361e0c0df1ff&ipo=images',
      linkto: '/berita'
    },
    {
      name: "Film Populer",
      description: "Kumpulan film terpopuler",
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.template.net%2Fwp-content%2Fuploads%2F2017%2F02%2F22192223%2FMovie-Icons.jpg&f=1&nofb=1&ipt=f982e100c51ccd35fffd38e41508dc0d99824230d0acea6b03d075c9ede31c5d&ipo=images',
      linkto: '/film'
    }
  ];
  return (
    <>
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
