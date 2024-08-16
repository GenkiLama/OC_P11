import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import data from "../data/logements.json";
import Error404 from "../pages/Error404";
import Slideshow from "../components/Slideshow";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import { useEffect } from "react";

export default function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentLogement, setCurrentLogement] = React.useState("");
  React.useEffect(() => {
    const selectedLogement = data.logements.find(
      (logement) => logement.id === id
    );
    selectedLogement ? setCurrentLogement(selectedLogement) : navigate("/404");
  }, [id, navigate]);

  !currentLogement && <Error404 />;

  const [currentImg, setCurrentImg] = React.useState(0);

  useEffect(() => {
    document.title = `Kasa - ${currentLogement.title}`;
  });

  const tags =
    currentLogement &&
    currentLogement.tags.map((tag, index) => {
      return (
        <p key={index} className="tag">
          {tag}
        </p>
      );
    });

  return (
    <>
      <Slideshow
        currentImg={currentImg}
        title={currentLogement.title}
        length={currentLogement && currentLogement.pictures.length}
        image={currentLogement && currentLogement.pictures[currentImg]}
        showPrev={() =>
          setCurrentImg((prev) =>
            prev === 0 ? currentLogement.pictures.length - 1 : prev - 1
          )
        }
        showNext={() =>
          setCurrentImg((prev) =>
            prev === currentLogement.pictures.length - 1 ? 0 : prev + 1
          )
        }
      />
      <section className="currentLogementDetails_container">
        <div className="currentLogementDetails">
          <div>
            <h2 className="currentLogementDetails_title">
              {currentLogement.title}
            </h2>
            <p className="currentLogementDetails_location">
              {currentLogement.location}
            </p>
          </div>
          <div className="currentLogementDetails_host--details">
            <div className="currentLogementDetails_tags">{tags}</div>
          </div>
        </div>
        <div className="currentLogementDetails2">
          <div className="currentLogementDetails_rating">
            <Rating rating={currentLogement && currentLogement.rating} />
          </div>

          <div className="currentLogementDetails_host__container">
            <div className="currentLogementDetails_host">
              {currentLogement && currentLogement.host.name}
            </div>
            <img
              className="currentLogementDetails_host--picture"
              src={currentLogement && currentLogement.host.picture}
            />
          </div>
        </div>
      </section>
      <section className="currentLogementDescription">
        <Collapse message={currentLogement && currentLogement.description}>
          Description
        </Collapse>
        <Collapse equipments={currentLogement && currentLogement.equipments}>
          Equipements
        </Collapse>
      </section>
    </>
  );
}
