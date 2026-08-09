import { skills } from "../data/resume";
import Reveal from "./Reveal";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className="pinned-section">
      <div className={`pinned-bg ${styles.bg}`} aria-hidden="true" />

      <div className={`section pinned-content ${styles.contentWrap}`}>
        <div className="section-inner">
          <div className={styles.layout}>
            <Reveal className={styles.text}>
              <span className="eyebrow">01 // About</span>
              <h2 className={`section-title ${styles.heading}`}>
                Building things that need to work.
              </h2>
              {/* <p className={styles.body}>{profile.summary}</p> */}
              <p className={styles.body}>
                That's the day job - mission critical stuff that don't get to fail. The night job is building things that don't need to work like generative art, and a slowly escalating feud with ComfyUI. Details on both below.
              </p>
            </Reveal>

            <Reveal delay={120} className={`hud-panel ${styles.matrix}`}>
              <div className={styles.matrixHead}>
                <span className="mono">SKILL_SET</span>
                <span className="status-dot ongoing" aria-hidden="true" />
              </div>
              <div className={styles.groups}>
                {skills.map((group) => (
                  <div key={group.category} className={styles.group}>
                    <span className={styles.groupLabel}>{group.category}</span>
                    <div className={styles.chips}>
                      {group.items.map((item) => (
                        <span key={item} className="tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
