import HomeCard from "../components/HomeCard";
import Hero from "../components/Hero";
import Slideshow from "../components/Slideshow";
import "./../css/Home.css";

const Home = () => {
  const homeCards = [
    {
      id: 1,
      title: "2025 Season",
      link: "/season",
      imgSrc: `${process.env.PUBLIC_URL}/images/calendar.avif`,
      imgAlt: "2025 calendar placeholder",
      description: "Full race calendar with dates, locations, and session times.",
    },
    {
      id: 2,
      title: "Driver Standings",
      link: "/drivers",
      imgSrc: `${process.env.PUBLIC_URL}/images/standings.jpg`,
      imgAlt: "Driver standings placeholder",
      description:
        "Live-style leaderboard mockup of the top drivers competing for the WDC.",
    },
    {
      id: 3,
      title: "Constructors Standings",
      link: "/constructors",
      imgSrc: `${process.env.PUBLIC_URL}/images/constructors.webp`,
      imgAlt: "Constructors image placeholder",
      description:
        "Live-style leaderboard mockup of the top constructors competing for the championship.",
    },
    {
      id: 4,
      title: "Latest Circuits",
      link: "/circuits",
      imgSrc: `${process.env.PUBLIC_URL}/images/miami.avif`,
      imgAlt: "Circuit map placeholder",
      description:
        "Explore the newest and most iconic circuits on the 2025 calendar.",
    },
    {
      id: 5,
      title: "History",
      link: "/history",
      imgSrc: `${process.env.PUBLIC_URL}/images/senna.avif`,
      imgAlt: "Historic F1 car placeholder",
      description:
        "From the earliest grands prix to modern hybrid era milestones.",
    },
    {
      id: 6,
      title: "About Us",
      link: "/about",
      imgSrc: `${process.env.PUBLIC_URL}/images/about.avif`,
      imgAlt: "Grid start photo placeholder",
      description:
        "Learn about the team behind this fan site and our project goals.",
    },
  ];

  return (
    <>
      <Hero>
        <Slideshow />
        <h1>F1 2025 — THE PINNACLE OF MOTORSPORT</h1>
        <p className="lede">
          Follow the world's fastest sport through the twists and turns of the
          2025 Formula 1 World Championship. Stay updated with race schedules,
          standings, circuit insights, and deep dives into the teams shaping
          the future of the grid.
        </p>
        <p>
          From Monaco's streets to Suzuka's sweeping corners, Formula 1
          delivers speed, precision, and strategy like no other. Whether
          you're new to the track or a hardened fan, explore our up-to-date
          coverage, season highlights, and detailed circuit guides — all in
          one place.
        </p>
      </Hero>

      <main className="container">
        <section className="features">
          <div className="card-grid">
            {homeCards.map((card) => (
              <HomeCard
                key={card.id}
                title={card.title}
                link={card.link}
                imgSrc={card.imgSrc}
                imgAlt={card.imgAlt}
                description={card.description}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;