import React, { useEffect, useState } from 'react';
import styles from './sectionLink.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { scrollToTop } from '@/utils/helpers/helpers';
import { useSelector } from 'react-redux';

export const ArticleLink = ({ article, baseUrl }) => {
  const articleUrl = `${baseUrl}${article.articleAddress}`;
  const language = useSelector((state) => state.lang);

  return (
    <NavLink
      to={articleUrl}
      className={({ isActive }) => (isActive ? styles.active : '')}
      onClick={scrollToTop}
    >
      <div className={`${styles.article} ${styles.sectionLink}`}>
        <div className={styles.row}>
          {/* <div></div> */}
          <p>{article.articleName[language] || article.articleName}</p>
        </div>
      </div>
    </NavLink>
  );
};


const SubSection = ({ subSection, baseUrl }) => {
  const subSectionUrl = `${baseUrl}${subSection.sectionAddress}`;
  const [isOpen, setIsOpen] = useState(false);
  const [isAnyArticleSelected, setIsAnyArticleSelected] = useState(false);
  const language = useSelector((state) => state.lang);

  const curLocation = useLocation();
  useEffect(() => {
    const condition = curLocation.pathname.includes(subSectionUrl);
    setIsAnyArticleSelected(condition);
    setIsOpen(condition);
  }, [curLocation]);

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.subSection} ${styles.sectionLink} ${
          isOpen ? styles.open : ''
        } ${isAnyArticleSelected ? styles.active : ''}`}
      >
        <div className={styles.row}>
          {/* <div></div> */}
          <p>{subSection.sectionName[language] || subSection.sectionName}</p>
        </div>
        <div className={styles.arrowIcon}></div>
      </div>
      <div className={`${styles.articles} ${isOpen ? styles.open : ''}`}>
        {subSection.articles.map((article, i) => (
          <ArticleLink
            article={article}
            baseUrl={subSectionUrl}
            key={article.articleName.ru || article.articleName}
          />
        ))}
      </div>
    </>
  );
};

const index = ({ mode, address, section }) => {
  const language = useSelector((state) => state.lang);
  
  if (mode === 'home') {
    return (
      <NavLink
        end
        to={address}
        className={({ isActive }) => (isActive ? styles.active : '')}
        onClick={scrollToTop}
      >
        <div className={`${styles.homeSectionLink} ${styles.sectionLink}`}>
          <div className={styles.row}>
            <div></div>
            <p>{section.articleName[language] || section.articleName}</p>
          </div>
        </div>
      </NavLink>
    );
  }

  const setionUrl = `${address}${section.sectionAddress}`;
  const [isOpen, setIsOpen] = useState(false);
  const [isAnySubSectionSelected, setIsAnySubSectionSelected] = useState(false);

  const curLocation = useLocation();
  useEffect(() => {
    const condition = curLocation.pathname.includes(setionUrl);
    setIsAnySubSectionSelected(condition);
    setIsOpen(condition);
  }, [curLocation]);

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.sectionLink} ${isOpen ? styles.open : ''} ${
          isAnySubSectionSelected ? styles.active : ''
        }`}
      >
        <div className={styles.row}>
          {/* <div></div> */}
          <p>{section.sectionName[language] || section.sectionName}</p>
        </div>
        <div className={styles.arrowIcon}></div>
      </div>
      <div className={`${styles.subsections} ${isOpen ? styles.open : ''}`}>
        {section.subsections.map((subsection) => (
          <SubSection
            subSection={subsection}
            baseUrl={setionUrl}
            key={subsection.sectionName.ru || subsection.sectionName}
          />
        ))}
      </div>
    </>
  );
};

export default index
