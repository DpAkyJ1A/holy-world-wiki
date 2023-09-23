import React, { useState, useEffect } from 'react';
import styles from './article.module.css'
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const Article = ({ sectionData }) => {
  const [article, setArticle] = useState(null);
  const curLocation = useLocation();

  useEffect(() => {
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

      // let unlisten = history.listen((location) => {
      //   console.log(location.hash); // <-- переданный в Link hash.
      // });
    }
  }, [curLocation]);

  if (!article) {
    return <article className={styles.article}></article>;
  }

  return (
    <article className={styles.article}>
      <h2 id="articleName" className={styles.articleName}>
        {article.articleName}
      </h2>
      {article.articleContent && <hr></hr>}
      <div className={styles.articleContent}>
        {article.articleContent
          ? article.articleContent.map((el, i) =>
              el.element === 'img' ? (
                <img
                  src={el.src}
                  alt={el.alt}
                  style={el.style}
                  className={styles.img}
                  key={`article element ${i}`}
                />
              ) : el.element === 'p' ? (
                <p
                  className={styles.p}
                  dangerouslySetInnerHTML={{ __html: el.value }}
                  style={el.style}
                  key={`article element ${i}`}
                ></p>
              ) : el.element === 'h3' ? (
                <>
                  <hr></hr>
                  <h3 className={styles.h3} key={`article element ${i}`}>
                    {el.value}
                  </h3>
                </>
              ) : el.element === 'h4' ? (
                el.additionImg ? (
                  <div className={styles.row} key={`article element ${i}`}>
                    <h4
                      className={styles.h4}
                      dangerouslySetInnerHTML={{ __html: el.value }}
                    ></h4>
                    <img
                      src={el.additionImg.src}
                      alt={el.additionImg.alt}
                      style={el.additionImg.style}
                      className={styles.additionalImg}
                    ></img>
                  </div>
                ) : (
                  <h4
                    className={styles.h4}
                    dangerouslySetInnerHTML={{ __html: el.value }}
                    key={`article element ${i}`}
                  ></h4>
                )
              ) : el.element === 'ol' ? (
                <ol className={styles.ol} key={`article element ${i}`}>
                  {el.li.map((str) => (
                    <li key={str}>{str}</li>
                  ))}
                </ol>
              ) : el.element === 'ul' ? (
                <ul
                  className={`${styles.ul} ${
                    el.className === 'dashList' ? styles.dashList : ''
                  }`}
                  key={`article element ${i}`}
                >
                  {el.li.map((str) => (
                    <li
                      key={str}
                      dangerouslySetInnerHTML={{ __html: str }}
                    ></li>
                  ))}
                </ul>
              ) : el.element === 'link' ? (
                <Link
                  to={el.to}
                  hash="#articleName"
                  className={styles.link}
                  key={`article element ${i}`}
                >
                  {el.value}
                </Link>
              ) : el.element === 'hr' ? (
                <hr></hr>
              ) : (
                <></>
              )
            )
          : article.articleData.map((el) => (
              <section className={styles.section} key={el.subHeader}>
                <hr></hr>
                <h3 className={styles.sectionName}>{el.subHeader}</h3>
                <p className={styles.sectionText}>{el.text}</p>
              </section>
            ))}
      </div>
    </article>
  );
}

export default Article
