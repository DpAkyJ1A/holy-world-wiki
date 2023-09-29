import React, { useState } from 'react'
import styles from './navigator.module.css'
import { useSearch } from '@/utils/hooks/useSearch';
import { SearchBar, SectionLink, SearchLinks } from '@/components';

const Navigator = ({ sectionData }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const links = useSearch(searchQuery, sectionData);

  return (
    <div id="nav" className={styles.navigator}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchLinks
        links={links}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
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
