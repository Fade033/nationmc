import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import {useState} from 'react';

export default function Home(): ReactNode {
  const [copied, setCopied] = useState(false);
  return (
    <Layout title="NationMC" description="NationMC">
      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <img src="/img/NationMC.png" alt="NationMC" className={styles.logo} />
            <h1 className={styles.title}>NationMC<br /></h1>
            <p className={styles.description}>
              Explore the biggest and most realistic Minecraft City
              at the heart of a 1:500 scale Earth map
            </p>
            <button
              className={styles.button}
              onClick={() => {
                navigator.clipboard.writeText('play.NationMC.org');
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
            >
              {copied ? 'Copied!' : 'IP: play.NationMC.org'}
            </button>
            <Link className={styles.discord} href="https://discord.com/invite/f6h98zac5a/">
              Discord
            </Link>
          </div>

          <a href="#map-section" className={styles.scrollArrow} aria-label="Scroll to map">
            ↓
          </a>
        </section>

        <section id="map-section" className={styles.secondSection}>
          {/* Section 1: Image Left, Text Right */}
          <div className={styles.secondSectionInner}>
            <div className={styles.mapImageWrapper}>
              <img src="/img/Nation2.png" alt="Expand your Minecraft empire" className={styles.mapImage} />
            </div>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>Expand your Minecraft empire</h2>
              <p className={styles.sectionDescription}>Create a town, form a nation and conquer earth. Using towny, invite residents to your town and manage their permissions. Sell plots and get in to the real estate market. Invite other towns to your nation and watch it grow.</p>
            </div>
          </div>

          {/* Section 2: Text Left, Image Right */}
          <div className={`${styles.secondSectionInner} ${styles.reversed}`}>
            <div className={styles.mapImageWrapper}>
              <img src="/img/Quarters.jpg" alt="Rent out Real Estate" className={styles.mapImage} />
            </div>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>Rent out Real Estate</h2>
              <p className={styles.sectionDescription}>Invest in real estate and rent it out to other players. Buy plots, create multiple quarters and generate passive income.</p>
            </div>
          </div>

          {/* Section 3: Image Left, Text Right */}
          <div className={styles.secondSectionInner}>
            <div className={styles.mapImageWrapper}>
              <img src="/img/Automation.jpg" alt="Automate" className={styles.mapImage} />
            </div>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>Automate</h2>
              <p className={styles.sectionDescription}>Build factories, automate and make money while accelerating the growth of your empire.</p>
            </div>
          </div>

          {/* Section 4: Text Left, Image Right */}
          <div className={`${styles.secondSectionInner} ${styles.reversed}`}>
            <div className={styles.mapImageWrapper}>
              <img src="/img/Map.png" alt="Explore the World" className={styles.mapImage} />
            </div>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>Explore the World</h2>
              <p className={styles.sectionDescription}>Explore a 1:500 scale map of the earth and discover new places to build and adventure.</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}