import Hero from "../components/Hero";
import StandingsTable from "../components/StandingsTable";
import ConstructorRow from "../components/ConstructorRow";
import "./../css/Standings.css";

const ConstructorStandings = () => {
  const constructors = [
    { rank: 1, team: "McLaren", engine: "Mercedes", points: 756 },
    { rank: 2, team: "Mercedes", engine: "Mercedes", points: 398 },
    { rank: 3, team: "Red Bull", engine: "Honda", points: 366 },
    { rank: 4, team: "Ferrari", engine: "Ferrari", points: 362 },
    { rank: 5, team: "Williams", engine: "Mercedes", points: 111 },
    { rank: 6, team: "Racing Bulls", engine: "Honda", points: 82 },
    { rank: 7, team: "Aston Martin", engine: "Honda", points: 72 },
    { rank: 8, team: "Haas", engine: "Ferrari", points: 70 },
    { rank: 9, team: "Kick Sauber", engine: "Ferrari", points: 62 },
    { rank: 10, team: "Alpine", engine: "Renault", points: 22 },
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