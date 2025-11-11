import Hero from "../components/Hero";
import StandingsTable from "../components/StandingsTable";
import ConstructorRow from "../components/ConstructorRow";
import "./../css/Standings.css";

const ConstructorStandings = () => {
  const constructors = [
    { rank: 1, team: "McLaren", engine: "Mercedes", points: 650 },
    { rank: 2, team: "Mercedes", engine: "Mercedes", points: 325 },
    { rank: 3, team: "Ferrari", engine: "Ferrari", points: 298 },
    { rank: 4, team: "Red Bull", engine: "Honda", points: 290 },
    { rank: 5, team: "Williams", engine: "Mercedes", points: 102 },
    { rank: 6, team: "Racing Bulls", engine: "Honda", points: 72 },
    { rank: 7, team: "Aston Martin", engine: "Honda", points: 68 },
    { rank: 8, team: "Kick Sauber", engine: "Ferrari", points: 55 },
    { rank: 9, team: "Haas", engine: "Ferrari", points: 46 },
    { rank: 10, team: "Alpine", engine: "Renault", points: 20 },
  ];

  return (
    <>
      <Hero
        tight={true}
        title="Constructors Standings"
        subtitle="Track the latest points and rankings for the 2025 Formula One Constructors Championship."
      />

      <main className="container">
        <h2 className="subhead">Constructors</h2>
        <StandingsTable headers={["Rank", "Team", "Engine", "Points"]}>
          {constructors.map((constructor) => (
            <ConstructorRow
              key={constructor.rank}
              rank={constructor.rank}
              team={constructor.team}
              engine={constructor.engine}
              points={constructor.points}
            />
          ))}
        </StandingsTable>
      </main>
    </>
  );
};

export default ConstructorStandings;