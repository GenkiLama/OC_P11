import bannerImage from "../assets/images/banner-img.png";
import data from "../data/logements.json";
import React from "react";
import LogementCard from "../components/LogementCard";
import Banner from "../components/Banner";
export default function Home() {
  const [logements, setLogements] = React.useState([]);

  React.useEffect(() => {
    setLogements(data.logements);
    document.title = "Kasa - Accueil";
  }, []);

  const logementsElements = logements.map((logement) => {
    return (
      <LogementCard
        key={logement.id}
        id={logement.id}
        title={logement.title}
        cover={logement.cover}
        images={logement.pictures}
      />
    );
  });
  return (
    <>
      <Banner image={bannerImage}>Chez vous, partout et ailleurs</Banner>
      <section className="logement-list">{logementsElements}</section>
    </>
  );
}
