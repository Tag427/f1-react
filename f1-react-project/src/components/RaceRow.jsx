import { Link } from "react-router-dom";

const RaceRow = ({ round, date, gp, location, slug }) => {
  return (
    <tr>
      <td>{round}</td>
      <td>{date}</td>
      <td>{gp}</td>
      <td>{location}</td>
      <td>
        {slug ? (
          <Link to={`/circuit/${slug}`}>View</Link>
        ) : (
          <span>View</span>
        )}
      </td>
    </tr>
  );
};

export default RaceRow;