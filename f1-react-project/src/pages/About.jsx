import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import "./../css/About.css";

const About = () => {
  return (
    <>
      <Hero tight={true} title="About This Project" />

      <main className="container">
        <section className="about-block">
          <h2>Our Mission</h2>
          <p>
            This site was created as part of a project to explore web design and
            development using Formula 1 as the theme. It showcases design work
            while providing an engaging way to learn about one of the world's
            most exciting sports.
          </p>
          <p>
            The goal is to combine technical skills with creativity. The aim is
            for this to result in a portfolio-style site that emphasizes both
            content and presentation.
          </p>
        </section>

        <section className="about-block">
          <h2>Contact Us</h2>
          <ContactForm />
        </section>

        <section className="about-block">
          <h2>Our Location</h2>
          <div className="embed">
            <iframe
              title="Assembly Blossom North - Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6615.936099132783!2d-81.03426492523275!3d33.99335442083909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bb2802562b89%3A0x1f5707bd271c887!2sAssembly%20Blossom%20North!5e0!3m2!1sen!2sus!4v1760457010384!5m2!1sen!2sus"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;