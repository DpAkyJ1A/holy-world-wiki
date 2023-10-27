import React from 'react'
import { useSelector } from 'react-redux';
import styles from './searchBar.module.css'

const index = ({ searchQuery, setSearchQuery }) => {
  const language = useSelector((state) => state.lang);

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchIcon}></div>
      <input
        type="text"
        placeholder={language === 'uk' ? 'Пошук...' : 'Поиск...'}
        className={styles.input}
        maxLength={20}
        value={searchQuery}
        onChange={(e) =>
          setSearchQuery(
            e.target.value.replace(/[^A-Za-zА-Яа-яЁёІіЇїЄє\s]/g, '')
          )
        }
      ></input>
    </div>
  );
};

export default index
