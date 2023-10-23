import React, { useState } from 'react';
import styles from './languageSwitcher.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '@/slices/languageSlice';

const index = () => {
  const language = useSelector((state) => state.lang);
  const dispatch = useDispatch();

  return (
    <select
      onChange={() => dispatch(setLanguage(event.target.value))}
      className={styles.select}
      value={language}
    >
      <option value="ru">Русский</option>
      <option value="uk">Українська</option>
      <option value="en">English</option>
    </select>
  );
};

export default index;
