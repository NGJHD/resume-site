import { profile } from "../data/resume";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className="eyebrow">06 // Contact</span>
          <h2 className={styles.heading}>Let's build something.</h2>
          <p className={styles.sub}>
            Open to conversations about frontend engineering roles.
          </p>

          <div className={styles.channels}>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className={`hud-panel hud-panel-sm ${styles.channel}`}
            >
              <span className={styles.channelLabel}>Phone</span>
              <span className={styles.channelValue}>{profile.phone}</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className={`hud-panel hud-panel-sm ${styles.channel}`}
            >
              <span className={styles.channelLabel}>Email</span>
              <span className={styles.channelValue}>{profile.email}</span>
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className="mono">© {year} NG JUN HAO DARREN</span>
        </div>
      </div>
    </footer>
  );
}
