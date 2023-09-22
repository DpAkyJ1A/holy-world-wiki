import React from 'react'
import styles from './button.module.css'
import { NavLink } from 'react-router-dom';

const index = ({gameMode}) => {
  if (gameMode === 'classicAndSpeedrun') {
    return (
      <NavLink
        to={'/classic-and-speedrun'}
        className={({ isActive }) =>
          isActive ? `${styles.btn} ${styles.active}` : styles.btn
        }
      >
        <div className={styles.classicAndSpeedrunImg}></div>
        <p className={styles.classicAndSpeedrunP}>Классик и Спидран</p>
      </NavLink>
    );
  } else if (gameMode === 'liteAnarchy') {
    return (
      <NavLink
        to={'/lite-anarchy'}
        className={({ isActive }) =>
          isActive ? `${styles.btn} ${styles.active}` : styles.btn
        }
      >
        <div className={styles.liteAnarchyImg}></div>
        <p className={styles.liteAnarchyP}>Лайт Анархия</p>
      </NavLink>
    );
  } else {
    return <button>Error</button>
  }
}

export default index
