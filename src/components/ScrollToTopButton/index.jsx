import React, { useState } from 'react'
import styles from './button.module.css'
import { scrollToTop } from '@/utils/helpers/helpers';

const index = () => {
  const SCROLLMAX = 1500;
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > SCROLLMAX) {
      setVisible(true);
    } else if (scrolled <= SCROLLMAX) {
      setVisible(false);
    }
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button onClick={scrollToTop} className={`${styles.btn} ${visible ? styles.visible : ''}`}></button>
  );
}

export default index
