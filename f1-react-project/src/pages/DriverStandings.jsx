import Hero from "../components/Hero";
import StandingsTable from "../components/StandingsTable";
import DriverRow from "../components/DriverRow";
import "./../css/Standings.css";

const DriverStandings = () => {
  const drivers = [
    { rank: 1, name: "O. Piastri", team: "McLaren", points: 336 },
    { rank: 2, name: "L. Norris", team: "McLaren", points: 314 },
    { rank: 3, name: "M. Verstappen", team: "Red Bull", points: 273 },
    { rank: 4, name: "G. Russell", team: "Mercedes", points: 237 },
    { rank: 5, name: "C. Leclerc", team: "Ferrari", points: 173 },
    { rank: 6, name: "L. Hamilton", team: "Ferrari", points: 125 },
    { rank: 7, name: "K. Antonelli", team: "Mercedes", points: 88 },
    { rank: 8, name: "A. Albon", team: "Mercedes", points: 70 },
    { rank: 9, name: "I. Hadjar", team: "Racing Bulls", points: 39 },
    { rank: 10, name: "N. Hülkenberg", team: "Kick Sauber", points: 37 },
    { rank: 11, name: "F. Alonso", team: "Aston Martin", points: 36 },
    { rank: 12, name: "C. Sainz", team: "Williams", points: 32 },
    { rank: 13, name: "L. Stroll", team: "Aston Martin", points: 32 },
    { rank: 14, name: "L. Lawson", team: "Racing Bulls", points: 30 },
    { rank: 15, name: "E. Ocon", team: "Haas", points: 28 },
    { rank: 16, name: "P. Gasly", team: "Alpine", points: 20 },
    { rank: 17, name: "Y. Tsunoda", team: "Red Bull", points: 20 },
    { rank: 18, name: "G. Bortoletto", team: "Kick Sauber", points: 18 },
    { rank: 19, name: "O. Bearman", team: "Haas", points: 18 },
    { rank: 20, name: "F. Colapinto", team: "Alpine", points: 0 },
  ];

  return (
    <>
      <Hero
        tight={true}
        title="Drivers Standings"
        subtitle="Track the latest points and rankings for the 2025 Formula One World Championship."
      />

      <main className="container">
        <h2 className="subhead">Drivers</h2>
        <StandingsTable headers={["Rank", "Name", "Team", "Points"]}>
          {drivers.map((driver) => (
            <DriverRow
              key={driver.rank}
              rank={driver.rank}
              name={driver.name}
              team={driver.team}
              points={driver.points}
            />
          ))}
        </StandingsTable>
      </main>
    </>
  );
};

export default DriverStandings;