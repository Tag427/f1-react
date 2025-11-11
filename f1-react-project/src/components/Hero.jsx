const Hero = ({ title, subtitle, children, tight = false }) => {
    return (
      <section className={tight ? "hero hero--tight" : "hero"}>
        <div className="container">
          {children ? (
            children
          ) : (
            <>
              <h1>{title}</h1>
              {subtitle && <p className="lede">{subtitle}</p>}
            </>
          )}
        </div>
      </section>
    );
  };
  
  export default Hero;