const DriverRow = ({ rank, name, team, points }) => {
    return (
      <tr>
        <td>{rank}</td>
        <td>{name}</td>
        <td>{team}</td>
        <td>{points}</td>
      </tr>
    );
  };
  
  export default DriverRow;