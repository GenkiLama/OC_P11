import React from 'react';

export default function Slideshow(props) {
  return (
    <section>
      <div className="slideshow_container">
        {/* Affiche le bouton précédent seulement si le nombre d'images est supérieur à 1 */}
        {props.length > 1 && (
          <div className="slideshowPrevious" onClick={props.showPrev}>
            <svg
              width="48"
              height="80"
              viewBox="0 0 48 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
                fill="white"
              />
            </svg>
          </div>
        )}

        {/* Affiche l'image actuelle */}
        <img
          className="slideshowImg"
          src={props.image}
          alt={`Image : ${props.title}`}
        />

        {/* Affiche le bouton suivant seulement si le nombre d'images est supérieur à 1 */}
        {props.length > 1 && (
          <div className="slideshowNext" onClick={props.showNext}>
            <svg
              width="48"
              height="80"
              viewBox="0 0 48 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
                fill="white"
              />
            </svg>
          </div>
        )}

        {/* Affiche le compteur d'images seulement si le nombre d'images est supérieur à 1 */}
        {props.length > 1 && (
          <div className="slideshowCount">
            {props.currentImg + 1}/{props.length}
          </div>
        )}
      </div>
    </section>
  );
}
