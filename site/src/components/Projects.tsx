import type { ComponentType } from "react";
import { personalProjects } from "../data/resume";
import SteppedSection from "./SteppedSection";
import styles from "./Projects.module.css";
import musicPlayerImg from "../assets/images/project-music-player.jpg";
import movieCatalogueImg from "../assets/images/project-movie-catalogue.jpg";
import cryptoImg from "../assets/images/project-crypto.jpg";
import thesisImg from "../assets/images/project-thesis.jpg";

const PROJECT_VISUALS: Record<
  string,
  { image?: { src: string; width: number; height: number }; icon?: ComponentType }
> = {
  "Movie Catalogue Software": { image: { src: movieCatalogueImg, width: 1920, height: 1152 } },
  "Music Folder Player": { image: { src: musicPlayerImg, width: 895, height: 595 } },
  "Cryptocurrency Trading Bot": { image: { src: cryptoImg, width: 1704, height: 923 }  },
  "Stock Thesis Monitor Bot": { image: { src: thesisImg, width: 1704, height: 923 }  },
};

export default function Projects() {
  const steps = personalProjects.map((project) => {
    const visual = PROJECT_VISUALS[project.name];
    const Icon = visual?.icon;
    return (
      <div key={project.name} className={`hud-panel ${styles.stepCard}`}>
        <div className={styles.visual}>
          {visual?.image && (
            <img
              src={visual.image.src}
              alt=""
              width={visual.image.width}
              height={visual.image.height}
              className={styles.visualImage}
              style={{
                maxHeight: Math.round(visual.image.height * 1.4),
                maxWidth: Math.round(visual.image.width * 1.6),
              }}
            />
          )}
          {Icon && (
            <div className={styles.iconWrap}>
              <Icon />
            </div>
          )}
        </div>
        <div className={styles.body}>
          {/* <span className={`mono ${styles.index}`}>{String(i + 1).padStart(2, "0")}</span> */}
          <h3 className={styles.name}>{project.name}</h3>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  });

  const header = (
    <div className="section-head">
      <span className="eyebrow">03 // Personal Projects</span>
      <h2 className="section-title">Built outside working hours.</h2>
    </div>
  );

  return (
    <SteppedSection id="projects" steps={steps} bgClassName={styles.bg} header={header} />
  );
}
