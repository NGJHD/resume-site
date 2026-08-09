import { profile } from "../data/resume";
import styles from "./Hero.module.css";

const FACTS = [
  { label: "Age", value: "39" },
  // { label: "Experience", value: "13+ Years" },
  // { label: "Domain", value: "Defence & Enterprise" },
  { label: "Based In", value: "Singapore" },
];

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.sweep} aria-hidden="true" />

      <div className={styles.inner}>
        <span className={`eyebrow ${styles.eyebrow}`}>Occupation: Software Engineer, mostly</span>

        <h1 className={styles.name}>
          Ng Jun Hao <span className={styles.nameAccent}>Darren</span>
        </h1>

        <p className={styles.tagline}>{profile.summary}</p>

        <div className={styles.facts}>
          {FACTS.map((f) => (
            <div key={f.label} className={styles.fact}>
              <span className={styles.factLabel}>{f.label}</span>
              <span className={styles.factValue}>{f.value}</span>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          {/* <a href="#journey" className={styles.primaryBtn}>
            View Career Journey
          </a> */}
          {/* <a href="#contact" className={styles.secondaryBtn}>
            Contact
          </a> */}
        </div>
      </div>

      <div className={styles.scrollCue} aria-hidden="true">
        <span className="mono">SCROLL</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
