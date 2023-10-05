import React from 'react'
import styles from './error.module.css'
import { Link } from 'react-router-dom';

const index = () => {

  return (
    <div className={styles.errorWrapper}>
      <div className={styles.fadeOut}></div>
      <div className={styles.errorContent}>
        <h3>404</h3>
        <h2>Страница не найдена</h2>
        <Link to={'/'}>
          Вернуться на главную!
        </Link>
      </div>
    </div>
  );
};

export default index
