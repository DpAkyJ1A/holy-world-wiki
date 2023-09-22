import React, { useState, useEffect } from 'react';
import styles from './links.module.css'
import { Link } from 'react-router-dom';

const Links = () => {
  const [imageOffset, setImageOffset] = useState({
    backgroundPositionX: 0,
    backgroundPositionY: 0,
  });

  const [mousePosition, setMousePosition] = useState({
    mouseX: 0,
    mouseY: 0,
  });

  const handleMouseMove = (e) => {
    const weightCoefficient = 15;
    const { clientX, clientY } = e;

    const deltaX = clientX - mousePosition.mouseX;
    const deltaY = clientY - mousePosition.mouseY;

    setMousePosition({
      mouseX: clientX,
      mouseY: clientY,
    });

    setImageOffset({
      backgroundPositionX:
        imageOffset.backgroundPositionX + deltaX / weightCoefficient,
      backgroundPositionY:
        imageOffset.backgroundPositionY + deltaY / weightCoefficient,
    });
  };

  const handleMouseLeave = () => {
    setImageOffset({
      backgroundPositionX: 0,
      backgroundPositionY: 0,
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={styles.links}
    >
      <div className={styles.fadeOut}></div>
      <div className={styles.imgContainer}>
        <div className={styles.img} style={imageOffset}></div>
      </div>

      <a href="https://holyworld.ru/" target="_blank">
        <div className={styles.logo}></div>
      </a>

      <a href="https://t.me/TheHolyWorld" target="_blank">
        <div className={`${styles.link} ${styles.tgLink}`}>
          <div className={styles.telegramIcon}></div>
          <div className={styles.tgColumn}>
            <p className={styles.linkValue}>t.me/TheHolyWorld</p>
            <p className={styles.subsCount}>4321 subscribers</p>
          </div>
        </div>
      </a>

      <a href="https://vk.com/howorld" target="_blank">
        <div className={`${styles.link} ${styles.vkLink}`}>
          <div className={styles.vkIcon}></div>
          <div className={styles.vkColumn}>
            <p className={styles.linkValue}>vk.com/howorld</p>
            <p className={styles.subsCount}>4321 subscribers</p>
          </div>
        </div>
      </a>
    </section>
  );
}

export default Links;
