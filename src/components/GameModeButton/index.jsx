import React from 'react'
import { useSelector } from 'react-redux';
import styles from './button.module.css'
import { NavLink } from 'react-router-dom';

const index = ({ gameMode }) => {
  const language = useSelector((state) => state.lang);
  
  if (gameMode === 'classicAndSpeedrun') {
    return (
      <NavLink
        to={'/classic-and-speedrun'}
        className={({ isActive }) =>
          isActive ? `${styles.btn} ${styles.active}` : styles.btn
        }
      >
        <div className={styles.classicAndSpeedrunImg}></div>
        <p className={styles.classicAndSpeedrunP}>
          {language === 'uk' ? 'Класик и Спідран' : 'Классик и Спидран'}
        </p>
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
        <p className={styles.liteAnarchyP}>
          {language === 'uk' ? 'Лайт Анархія' : 'Лайт Анархия'}
        </p>
      </NavLink>
    );
  } else {
    return <button>Error</button>
  }
}

export default index
