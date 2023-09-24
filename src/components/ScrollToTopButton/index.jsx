import React, { useState } from 'react'
import styles from './button.module.css'

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

  const scrollToTop = () => {
    window.location.href = '#article';
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button onClick={scrollToTop} className={`${styles.btn} ${visible ? styles.visible : ''}`}></button>
  );
}

export default index
