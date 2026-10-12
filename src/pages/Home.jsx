import { Link } from "react-router-dom";
import About from "../components/About";
import Skills from "../components/Skills";

function Home({ studentName, studentBio, studentDetails, skillList }) {
  return (
    <div className="page-container home-page">
      <About
        name={studentName}
        bio={studentBio}
        details={studentDetails}
      />
      <Skills skillList={skillList} />

      <section className="portfolio-section featured-cta-section">
        <div className="section-container">
          <div className="cta-card">
            <h3>Explore My Project Work</h3>
            <p>
              Discover applications, system prototypes, and web frameworks implementations built during academic coursework.
            </p>
            <Link to="/projects" className="cta-button">
              View All Projects &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
