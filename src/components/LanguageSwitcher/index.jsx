import React, { useState } from 'react';
import styles from './languageSwitcher.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '@/slices/languageSlice';

const index = () => {
  const language = useSelector((state) => state.lang);
  const dispatch = useDispatch();

  return (
    <label className={styles.switch} id="switch">
      <input
        type="checkbox"
        onChange={() =>
          dispatch(language === 'ru' ? setLanguage('uk') : setLanguage('ru'))
        }
        id="slider"
        checked={language === 'ru'}
      />
      <span className={`${styles.slider} ${styles.round}`}></span>
      <span className={styles.uk}>UK</span>
      <span className={styles.ru}>RU</span>
    </label>
    // <select
    //   onChange={() => dispatch(setLanguage(event.target.value))}
    //   className={styles.select}
    //   value={language}
    // >
    //   <option value="ru">Русский</option>
    //   <option value="uk">Українська</option>
    //   <option value="en">English</option>
    // </select>
  );
};

export default index;
