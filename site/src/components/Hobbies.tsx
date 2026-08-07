import { hobbies } from "../data/resume";
import SteppedSection from "./SteppedSection";
import styles from "./Hobbies.module.css";
import photographyGrid from "../assets/images/hobby-photography.jpg";
import pcBuild1 from "../assets/images/hobby-pc-build-1.jpg";

const PHOTOGRAPHY_IMG = { src: photographyGrid, width: 1894, height: 945 };
const PC_IMAGE = { src: pcBuild1, width: 1894, height: 791 };

export default function Hobbies() {
  const [photography, computers] = hobbies;

  const steps = [
    <div key={photography.name} className={`hud-panel ${styles.stepCard}`}>
      <div className={styles.stepFigure}>
        <img
          src={PHOTOGRAPHY_IMG.src}
          alt="Photography samples"
          width={PHOTOGRAPHY_IMG.width}
          height={PHOTOGRAPHY_IMG.height}
          className={styles.wideImage}
          style={{
            maxHeight: Math.round(PHOTOGRAPHY_IMG.height * 1.6),
            maxWidth: Math.round(PHOTOGRAPHY_IMG.width * 1.4),
          }}
        />
      </div>
      <div className={styles.stepText}>
        <div className={styles.stepHead}>
          <h3 className={styles.name}>{photography.name}</h3>
          <span className="mono">{photography.period}</span>
        </div>
        <p className={styles.description}>{photography.description}</p>
      </div>
    </div>,

    <div key={computers.name} className={`hud-panel ${styles.stepCard}`}>
      <div className={styles.stepFigure}>
        <img
          src={PC_IMAGE.src}
          alt="PC build"
          width={PC_IMAGE.width}
          height={PC_IMAGE.height}
          className={styles.wideImage}
          style={{
            maxHeight: Math.round(PC_IMAGE.height * 1.8),
            maxWidth: Math.round(PC_IMAGE.width * 1.8),
          }}
        />
      </div>
      <div className={styles.stepText}>
        <div className={styles.stepHead}>
          <h3 className={styles.name}>{computers.name}</h3>
          <span className="mono">{computers.period}</span>
        </div>
        <p className={styles.description}>{computers.description}</p>
      </div>
    </div>,
  ];

  const header = (
    <div className="section-head">
      <span className="eyebrow">05 // Hobbies</span>
      <h2 className="section-title">Off the clock.</h2>
    </div>
  );

  return <SteppedSection id="hobbies" steps={steps} bgClassName={styles.bg} header={header} />;
}
