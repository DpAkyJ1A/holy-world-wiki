import React from 'react';
import styles from './article.module.css';
import { Link } from 'react-router-dom';
import { scrollToTop } from '@/utils/helpers/helpers';

const getJsx = (el, i, language) => {
  switch (el.element) {
    case 'img':
      return (
        <img
          src={el.src}
          alt={el.alt[language] || el.alt}
          style={el.style}
          className={styles.img}
          key={`article element ${i}`}
        />
      );
    case 'p':
      return (
        <p
          className={styles.p}
          dangerouslySetInnerHTML={{
            __html: el.value[language] || el.value,
          }}
          style={el.style}
          key={`article element ${i}`}
        ></p>
      );
    case 'h3':
      return (
        <React.Fragment key={`article element ${i}`}>
          <hr />
          <h3 className={styles.h3}>
            {el.value[language] || el.value}
          </h3>
        </React.Fragment>
      );
    case 'h4':
      if (el.additionImg) {
        return (
          <div className={styles.row} key={`article element ${i}`}>
            <h4
              className={styles.h4}
              dangerouslySetInnerHTML={{
                __html: el.value[language] || el.value,
              }}
            ></h4>
            <img
              src={el.additionImg.src}
              alt={el.additionImg.alt[language] || el.additionImg.alt}
              style={el.additionImg.style}
              className={styles.additionalImg}
            ></img>
          </div>
        );
      } else {
        return (
          <h4
            className={styles.h4}
            dangerouslySetInnerHTML={{
              __html: el.value[language] || el.value,
            }}
            key={`article element ${i}`}
          ></h4>
        );
      }
    case 'ol':
      if (Array.isArray(el.li)) {
        return (
          <ol className={styles.ol} key={`article element ${i}`}>
            {el.li.map((str, j) => (
              <li
                key={`article element ${i} ${j}`}
                dangerouslySetInnerHTML={{ __html: str }}
              ></li>
            ))}
          </ol>
        );
      } else {
        return (
          <ol className={styles.ol} key={`article element ${i}`}>
            {el.li[language].map((str, j) => (
              <li
                key={`article element ${i} ${j}`}
                dangerouslySetInnerHTML={{ __html: str }}
              ></li>
            ))}
          </ol>
        );
      }
    case 'ul':
      if (Array.isArray(el.li)) {
        return (
          <ul
            className={`${styles.ul} ${
              el.className === 'dashList' ? styles.dashList : ''
            }`}
            key={`article element ${i}`}
          >
            {el.li.map((str, j) => (
              <li
                key={`article element ${i} ${j}`}
                dangerouslySetInnerHTML={{ __html: str }}
              ></li>
            ))}
          </ul>
        );
      } else {
        return (
          <ul
            className={`${styles.ul} ${
              el.className === 'dashList' ? styles.dashList : ''
            }`}
            key={`article element ${i}`}
          >
            {el.li[language].map((str, j) => (
              <li
                key={`article element ${i} ${j}`}
                dangerouslySetInnerHTML={{ __html: str }}
              ></li>
            ))}
          </ul>
        );
      }
    case 'link':
      return (
        <Link
          to={el.to}
          className={styles.link}
          onClick={scrollToTop}
          key={`article element ${i}`}
        >
          {el.value[language] || el.value}
        </Link>
      );
    case 'hr':
      return <hr key={`article element ${i}`}></hr>;
    default:
      return <></>;
  }
};

export default getJsx;
