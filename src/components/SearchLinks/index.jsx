import React from 'react'
import { useSelector } from 'react-redux';
import styles from './searchLinks.module.css';
import { Link } from 'react-router-dom';

const index = ({ links, searchQuery, setSearchQuery }) => {
  const language = useSelector((state) => state.lang);

  return (
    <div className={styles.searchLinks} onClick={() => setSearchQuery('')}>
      {searchQuery.length > 2 && links.length === 0 ? (
        <p>
          {language === 'uk' ? 'Збігів не знайдено' : 'Совпадений не найдено'}
        </p>
      ) : (
        links.map((el) => (
          <Link to={el.address} key={el.name}>
            <h3>{el.name}</h3>
            <p>
              {el.matches}{' '}
              {el.matches === 1
                ? language === 'uk' ? 'збіг' : 'совпадение'
                : el.matches === 2 || el.matches === 3 || el.matches === 4
                ? language === 'uk' ? 'збіги' : 'совпадения'
                : language === 'uk' ? 'збігів' : 'совпадений'}
            </p>
          </Link>
        ))
      )}
    </div>
  );
};

export default index
