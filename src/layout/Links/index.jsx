import React, { useState, useEffect, useRef } from 'react';
import styles from './links.module.css'

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

  const [tgSubs, setTgSubs] = useState(localStorage.getItem('HW_tg_subs') || '—');

  useEffect(() => {
    const getTgSubs = () => {
      fetch('http://localhost:3000/getSubscribersTG')
        .then((response) => response.json())
        .then((data) => {
          const subscribersCount = data.subscribersCount;
          setTgSubs(subscribersCount);
          localStorage.setItem('HW_tg_subs', subscribersCount);
          // console.log(`Количество подписчиков: ${subscribersCount}`);
        })
        .catch((error) => console.error(error));
    }

    getTgSubs();
  }, [])

  const [youtubeSubs, setYoutubeSubs] = useState(
    localStorage.getItem('HW_youtube_subs') || '—'
  );

  useEffect(() => {
    const getYouTubeSubs = () => {
      fetch('http://localhost:3000/getSubscribersYouTube')
        .then((response) => response.json())
        .then((data) => {
          const subscribersCount = data.subscribersCount;
          setYoutubeSubs(subscribersCount);
          localStorage.setItem('HW_youtube_subs', subscribersCount);
          // console.log(`Количество подписчиков: ${subscribersCount}`);
        })
        .catch((error) => console.error(error));
    };

    getYouTubeSubs();
  }, []);

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
            <p className={styles.subsCount}>{tgSubs} subscribers</p>
          </div>
        </div>
      </a>

      <a href="https://www.youtube.com/@jake50" target="_blank">
        <div className={`${styles.link} ${styles.youtubeLink}`}>
          <div className={styles.youtubeIcon}></div>
          <div className={styles.youtubeColumn}>
            <p className={styles.linkValue}>youtube.com/@jake50</p>
            <p className={styles.subsCount}>{youtubeSubs} subscribers</p>
          </div>
        </div>
      </a>
    </section>
  );
}

export default Links;
