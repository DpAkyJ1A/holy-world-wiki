import React, { useEffect, useState } from 'react';
import styles from './themeChanger.module.css';

export const index = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(localStorage.getItem('darkTheme') === 'true' ? true : false);

  useEffect(() => {
    if (isDarkTheme) {
      document.querySelector('.app').classList.add('dark-theme');
    } else {
      document.querySelector('.app').classList.remove('dark-theme');
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    localStorage.setItem('darkTheme', `${!isDarkTheme}`);
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <label className={styles.switch} id="switch">
      <input
        type="checkbox"
        onChange={toggleTheme}
        id="slider"
        checked={isDarkTheme}
      />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
};

export default index;
