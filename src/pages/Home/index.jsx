import "../../css/home.css";
import SectionCollapse from "../../components/collapse";

function Home() {
  const projectInfo = [
    {
      id: "1",
      title: "Booki",
      alt: "Thumbnail du Projet Booki",
      descriptif: "Page d’accueil d’une agence de voyage avec HTML et CSS",
      url: "https://yukes974.github.io/Booki-V2/",
    },
    {
      id: "2",
      title: "Ohmyfood!",
      alt: "Thumbnail du Projet Ohmyfood!",
      descriptif: "Dynamiser une page web avec des animations CSS",
      url: "https://yukes974.github.io/Ohmyfood/",
    },
    {
      id: "3",
      title: "La Panthère",
      alt: "Thumbnail du Projet La Panthère",
      descriptif: "Optimisation d’un site web existant (SEO et Accessibilité)",
      url: "https://yukes974.github.io/La-Panth-re/",
    },
    {
      id: "4",
      title: "KanaP",
      alt: "Thumbnail du Projet KanaP",
      descriptif: "Création d’un site e-commerce en JavaScript",
      url: "https://yukes974.github.io/KANAP/",
    },
    {
      id: "5",
      title: "Piiquante",
      alt: "Thumbnail du Projet Piiquante",
      descriptif:
        "Création d’une API sécurisé pour une application d’avis gastronomique",
      url: "https://yukes974.github.io/Piiquante---backend/",
    },
    {
      id: "6",
      title: "Kasa",
      alt: "Thumbnail du Projet Kasa",
      descriptif: "Application web de location immobilière avec REACT",
      url: "https://yukes974.github.io/kasa/",
    },
  ];

  return (
    <section className="sectionpersonprojects">
      <section>
        <div className="mypicture">
          <img src="" alt="" />
        </div>
        <h1>Patrick CHARLETTE</h1>
        <h2>Web Developper Junior Front-End REACT @lareunion974 </h2>
        <a
          href="https://openclassrooms.com/fr/paths/185-developpeur-web#path-tabs"
          target="_blank"
        >
          <h3>Formation OpenClassrooms</h3>
        </a>
      </section>
      <SectionCollapse projectCard={projectInfo} />
    </section>
  );
}

export default Home;
