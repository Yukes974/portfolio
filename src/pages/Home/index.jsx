import "../../css/home.css";
import SectionCollapse from "../../components/collapse";
import ProjectJson from "../../project.json";

function Home() {
  return (
    <section className="sectionpersonprojects">
      <section>
        <div className="mypicture">
          <img src="" alt="" />
        </div>
        <h1>Patrick CHARLETTE</h1>
        <h2>Web Developper Junior</h2>
      </section>
      <SectionCollapse projectCard={ProjectJson} />
    </section>
  );
}

export default Home;
