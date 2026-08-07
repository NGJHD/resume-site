import { certifications, education } from "../data/resume";
import Reveal from "./Reveal";
import styles from "./Education.module.css";
import awardPhoto from "../assets/images/education-award.jpg";
import certCsm from "../assets/images/cert-csm.png";
import certCouchbase from "../assets/images/cert-couchbase.png";
import certCkad from "../assets/images/cert-ckad.png";

const CERT_BADGES: Record<string, string> = {
  "Certified Kubernetes Application Developer (CKAD)": certCkad,
  "Certified Couchbase Capella Associate Administrator": certCouchbase,
  "Certified ScrumMaster": certCsm,
};

export default function Education() {
  return (
    <section id="education" className="pinned-section">
      <div className={`pinned-bg ${styles.bg}`} aria-hidden="true" />

      <div className={`section pinned-content ${styles.contentWrap}`}>
        <div className="section-inner">
          <Reveal className="section-head">
            <span className="eyebrow">04 // Education &amp; Certifications</span>
            <h2 className="section-title">Formal training, kept current.</h2>
          </Reveal>

          <div className={styles.layout}>
            <Reveal delay={80} className={styles.column}>
              <span className={`mono ${styles.columnLabel}`}>CERTIFICATIONS</span>
              <div className={styles.certList}>
                {certifications.map((cert) => (
                  <div key={cert.name} className={`hud-panel hud-panel-sm ${styles.certCard}`}>
                    {CERT_BADGES[cert.name] && (
                      <img
                        src={CERT_BADGES[cert.name]}
                        alt=""
                        className={styles.certBadge}
                      />
                    )}
                    <div className={styles.certText}>
                      <span className={styles.certYear}>{cert.year}</span>
                      <span className={styles.certName}>{cert.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={160} className={styles.column}>
              <span className={`mono ${styles.columnLabel}`}>EDUCATION</span>
              <div className={styles.eduList}>
                {education.map((edu) => (
                  <div key={edu.school} className={`hud-panel ${styles.eduCard}`}>
                    {edu.school === "University of Wollongong" && (
                      <img
                        src={awardPhoto}
                        alt="CSIT Silver Award, presented to Ng Jun Hao Darren"
                        className={styles.awardPhoto}
                      />
                    )}
                    <div className={styles.eduHead}>
                      <h3 className={styles.school}>{edu.school}</h3>
                      <span className={`mono ${styles.duration}`}>{edu.duration}</span>
                    </div>
                    {edu.subtitle && (
                      <span className={styles.subtitle}>{edu.subtitle}</span>
                    )}
                    <p className={styles.program}>{edu.program}</p>
                    {edu.details.length > 0 && (
                      <ul className={styles.details}>
                        {edu.details.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                    )}
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
