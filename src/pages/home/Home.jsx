import About from "../about/About";
import FAQ from "../FAQ/FAQ";
import ServicesList from "../services/ServicesList";
import "./home.css";



const Home = () => {
  return (
    <section className="home-container">
      <header></header>

      <section className="home-text">
        <h3>Bytecraft Savannah</h3>
        <p>
          At core, Bytecraft Savannah is a community-driven tech initiative.
          The name says it all “Byte” reflects our deep roots in Information
          Technology, from software to hardware, networks to systems. It
          represents precision, innovation, and digital fluency. “Craft” speaks
          to skill, artistry, and intentional design. We don’t just teach, we
          shape futures. We offer hands-on training, mentorship, and practical
          tools to equip people especially in underserved areas with skills for
          the digital world. From students to entrepreneurs, we help them become
          capable, confident, and career-ready. We’re not just teaching tech.
          We’re crafting careers, nurturing minds, and developing problem
          solvers. And we’re doing it with local pride and purpose.
        </p>
      </section>

      <section className="mission-container">
        <div>
          <h3>Vision Statement</h3>
          <p>
            To become the leading force in Northern Ghana for technology access,
            education, and innovation empowering individuals and communities to
            shape their future with skill, pride, and purpose.
          </p>
        </div>
        <div>
          <h3>Mission Statement</h3>
          <p>
            To bridge tradition and technology by delivering hands-on,
            culturally rooted tech education while providing reliable digital
            tools and solutions. Through training, mentorship, and access to
            essential tech like laptops and services
          </p>
        </div>
      </section>
  
      <ServicesList />

      <FAQ />

    </section>
  );
};

export default Home;
