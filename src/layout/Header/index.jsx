import React, { useState, useEffect } from 'react';
import styles from './header.module.css'
import { Link } from 'react-router-dom';
import { GameModeButton } from '@/components';

const Header = () => {
  const [maxOnline, setMaxOnline] = useState(10000);
  const [currentOnline, setCurrentOnline] = useState(0);

  const getOnline = (serverIp, serverPort) => {
    fetch(
      'https://mcapi.us/server/status?ip=' + serverIp + '&port=' + serverPort
    )
      .then((response) => response.json())
      .then((data) => {
        setMaxOnline(data?.players?.max || 10000);
        setCurrentOnline(data?.players?.now || 0);
      });
  };

  useEffect(() => {
    getOnline('mc.holyworld.ru', '25565');
    setInterval(() => {
      getOnline('mc.holyworld.ru', '25565');
    }, 60000);
  }, [])

  return (
    <header className={styles.header}>
      <Link to={'/'} className={styles.homeLink}>
        <h1 className={styles.appName}>HolyWorld Wiki</h1>
      </Link>

      <div className={styles.whiteWrapper}>
        <GameModeButton gameMode="classicAndSpeedrun" />

        <div
          onClick={() => getOnline('mc.holyworld.ru', '25565')}
          className={styles.onlineWrapper}
        >
          <p className={styles.online}>
            Онлайн
            <span className={styles.onlineValue}>
              {currentOnline} / {maxOnline}
            </span>
          </p>
          <div className={styles.onlineBar}>
            <div
              className={styles.onlineBarFill}
              style={{ width: `${(currentOnline / maxOnline) * 100}%` }}
            ></div>
          </div>
        </div>

        <GameModeButton gameMode="liteAnarchy" />
      </div>

      <div className={styles.serverIp}>
        <span>IP</span>
        <div className={styles.serverIpValue}>
          <div className={styles.fireIcon}></div>
          <p>mc.holyworld.ru</p>
          <div className={styles.fireIcon}></div>
        </div>
      </div>
    </header>
  );
}

export default Header
