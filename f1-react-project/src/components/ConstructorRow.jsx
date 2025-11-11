const ConstructorRow = ({ rank, team, engine, points }) => {
    return (
      <tr>
        <td>{rank}</td>
        <td>{team}</td>
        <td>{engine}</td>
        <td>{points}</td>
      </tr>
    );
  };
  
  export default ConstructorRow;