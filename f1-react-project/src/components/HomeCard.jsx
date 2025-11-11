import { Link } from "react-router-dom";

const HomeCard = ({ title, link, imgSrc, imgAlt, description }) => {
  return (
    <article className="card">
      <Link to={link} className="card-link-area">
        <figure className="thumb">
          <img src={imgSrc} alt={imgAlt} width="400" height="240" />
        </figure>
        <h3>{title}</h3>
      </Link>
      <p>{description}</p>
    </article>
  );
};

export default HomeCard;