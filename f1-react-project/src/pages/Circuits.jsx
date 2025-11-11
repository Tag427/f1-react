import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import CircuitCard from "../components/CircuitCard";
import "./../css/Circuits.css";

const Circuits = () => {
  const [circuits, setCircuits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCircuits = async () => {
      try {
        const response = await fetch("https://f1-server-vd2b.onrender.com/api/circuits");
        
        if (!response.ok) {
          throw new Error("Failed to fetch circuits");
        }
        
        const data = await response.json();
        setCircuits(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCircuits();
  }, []);

  if (loading) {
    return (
      <>
        <Hero tight={true} title="Circuits" subtitle="Loading circuits..." />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Hero tight={true} title="Circuits">
          <h1>Circuits</h1>
          <p className="lede" style={{ color: "#ff2b2b" }}>
            Error: {error}
          </p>
        </Hero>
      </>
    );
  }

  return (
    <>
      <Hero
        tight={true}
        title="Circuits"
        subtitle="Explore the 2025 Formula One circuits — from historic tracks to the newest additions on the calendar."
      />

      <main className="container">
        <section className="circuits-grid" aria-label="Circuit cards">
          {circuits.map((circuit) => (
            <CircuitCard
              key={circuit._id}
              name={circuit.name}
              location={circuit.location}
              imgName={circuit.img_name}
              slug={circuit.slug}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Circuits;