export default function Rating({ rating }) {
  let renderStar = Array(5);
  for (let i = 0; i < renderStar.length; i++) {
    renderStar[i] =
      i < rating ? (
        <i key={i} className="fa-solid fa-star orange"></i>
      ) : (
        <i key={i} className="fa-solid fa-star grey"></i>
      );
  }

  return <>{renderStar}</>;
}
