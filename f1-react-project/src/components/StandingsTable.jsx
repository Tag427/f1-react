const StandingsTable = ({ headers, children }) => {
    return (
      <div className="table-wrap narrow">
        <table className="standings">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} scope="col">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    );
  };
  
  export default StandingsTable;