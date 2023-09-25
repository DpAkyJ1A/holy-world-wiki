import React from 'react'
import styles from './navigator.module.css'
import { SearchBar, SectionLink } from '@/components';

const Navigator = ({ sectionData }) => {
  return (
    <div id="nav" className={styles.navigator}>
      <SearchBar />
      <nav className={`${styles.articlesSectionLinks}`}>
        <SectionLink
          mode="home"
          address={sectionData.baseAddress}
          section={sectionData.homePage}
        />
        {sectionData.sections.map((section) => (
          <SectionLink
            section={section}
            address={sectionData.baseAddress}
            key={section.sectionName}
          />
        ))}
      </nav>
    </div>
  );
};

export default Navigator;
