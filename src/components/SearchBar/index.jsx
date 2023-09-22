import React from 'react'
import styles from './searchBar.module.css'

const index = () => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchIcon}></div>
      <input
        type="text"
        placeholder="Поиск..."
        className={styles.input}
        maxLength={20}
      ></input>
    </div>
  );
}

export default index
