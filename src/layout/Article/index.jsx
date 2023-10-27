import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './article.module.css'
import { useLocation } from 'react-router';
import { LanguageSwitcher, ThemeChanger } from '@/components';
import getJsx from './getJsx';

const Article = ({ sectionData }) => {
  const [article, setArticle] = useState(null);
  const [copied, setCopied] = useState(false);
  const language = useSelector((state) => state.lang);
  const curLocation = useLocation();

  useEffect(() => {
    setCopied(false);

    if (curLocation.pathname === sectionData.baseAddress) {
      setArticle(sectionData.homePage);
    } else {
      const condition = (element) =>
        curLocation.pathname.includes(element.sectionAddress);
      const section = sectionData.sections.find(condition);
      const subSection = section.subsections.find(condition);

      const article = subSection.articles.find((art) =>
        curLocation.pathname.includes(art.articleAddress)
      );

      if (article) {
        setArticle(article);
      }
    }
  }, [curLocation]);

  if (!article) {
    return <article className={styles.article}></article>;
  }

  return (
    <article id="article" className={styles.article}>
      <div className={styles.articleHeader}>
        <h2 id="article-name" className={styles.articleName}>
          {article.articleName[language] || article.articleName}
        </h2>
        <div className={styles.controls}>
          <LanguageSwitcher />
          <ThemeChanger />
        </div>
      </div>

      {article.articleContent &&
        article.articleContent[0]?.element !== 'h3' && <hr></hr>}

      <div className={styles.articleContent}>
        {article.articleContent
          ? article.articleContent.map((el, i) => getJsx(el, i, language))
          : article.articleData.map((el) => (
              <section className={styles.section} key={el.subHeader}>
                <hr></hr>
                <h3 className={styles.sectionName}>{el.subHeader}</h3>
                <p className={styles.sectionText}>{el.text}</p>
              </section>
            ))}

        <hr></hr>

        <button
          className={styles.btn}
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
          }}
        >
          <span className={copied ? styles.copied : undefined}></span>
          {language === 'uk' ? 'Ссилка' : 'Ссылка'}
        </button>
      </div>
    </article>
  );
}

export default Article
