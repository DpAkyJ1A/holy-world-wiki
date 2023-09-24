import React from 'react'
import styles from './home.module.css'
import { Header, Links, Navigator, Article, Footer } from '@/layout';
import { GameModeButton, ScrollToTopButton } from '@/components';

const index = ({ sectionData }) => {
  return (
    <>
      <div className={styles.maxContainer}>
        <Header />
        <Links />
        <main className={styles.main}>
          <div className={styles.column}>
            <div className={styles.whiteWrapper}>
              <GameModeButton gameMode="classicAndSpeedrun" />
              <GameModeButton gameMode="liteAnarchy" />
            </div>
            <Navigator sectionData={sectionData} />
          </div>
          <Article sectionData={sectionData} />
        </main>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default index
