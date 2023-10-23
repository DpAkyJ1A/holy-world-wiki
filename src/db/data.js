import { BOSSES } from './articles/bosses';
import { BOURGEOISDESCRIPTION } from './articles/bourgeoisDescription';
import { CHALLENGESDESCRIPTION } from './articles/challengesDescription';
import { CLANS } from './articles/clans';
import { CLASSICANDSPEEDRUNHOME } from './articles/classicAndSpeedrunHome';
import { COINSFROMMOBS } from './articles/coinsFromMobs';
import { ENDLESSTRADING } from './articles/endlessTrading';
import { EVENTSCHEDULE } from './articles/eventSchedule';
import { PRICESINFO } from './articles/pricesInfo';
import { SANCTUOUSJACOB } from './articles/sanctuousJacob';
import { SPAWNERS } from './articles/spawners';
import { UNIQUEDUNGEONS } from './articles/uniqueDungeons';

export const HolyWorldWikiHome = {
  baseAddress: '/',
  homePage: {
    articleName: 'HolyWorld Wiki',
    articleData: [
      {
        subHeader: 'Задонать Джейку',
        text: 'Джейку донатить очень здорово много денег ему дать!',
      },
      {
        subHeader: 'Пожалуйста, дай денег Богдану',
        text: 'Человек он не маленький и богом дан \n Так дай и ты ему немного денег, впадлу что-ли?',
      },
      {
        subHeader: 'Что делать, если нету денег для Богдана?',
        text: 'Продать органы или мать родную заложить и задонатить Джейку. \n Выбери режим игры, чтобы ознакомиться с изложенными статьями.',
      },
    ],
  },
  sections: [],
};

export const classicAndSpeedrun = {
  baseAddress: '/classic-and-speedrun',
  homePage: CLASSICANDSPEEDRUNHOME,
  sections: [
    {
      sectionName: 'PVP',
      sectionAddress: '/pvp',
      subsections: [
        {
          sectionName: 'Кланы',
          sectionAddress: '/clans',
          articles: [CLANS],
        },
        {
          sectionName: 'Ивенты',
          sectionAddress: '/events',
          articles: [
            EVENTSCHEDULE,
            BOSSES,
            SANCTUOUSJACOB
          ],
        },
      ],
    },
    {
      sectionName: 'PVE',
      sectionAddress: '/pve',
      subsections: [
        {
          sectionName: 'Буржуй',
          sectionAddress: '/bourgeois',
          articles: [
            BOURGEOISDESCRIPTION,
            ENDLESSTRADING,
            PRICESINFO,
          ],
        },
        {
          sectionName: 'Уникальные данжи',
          sectionAddress: '/unique_dungeons',
          articles: [
            UNIQUEDUNGEONS
          ],
        },
        {
          sectionName: 'Рассадники',
          sectionAddress: '/spawners',
          articles: [
            SPAWNERS,
          ],
        },
        {
          sectionName: 'Мобы и монетки',
          sectionAddress: '/mobs_and_coins',
          articles: [
            COINSFROMMOBS,
          ],
        },
        {
          sectionName: 'Боевой пропуск',
          sectionAddress: '/battle_pass',
          articles: [
            CHALLENGESDESCRIPTION,
          ],
        },
      ],
    },
  ],
};

export const liteAnarchy = {
  baseAddress: '/lite-anarchy',
  homePage: {
    articleName: 'Анархия лайт',
    articleData: [
      {
        subHeader: 'Анархия лайт',
        text: 'Представляет из себя Анархию с более простым, но не менее интересным развитием и процессом игры. Здесь можно взрывать регионы буквально под ноль, получать невозможные зачарования, приобрести донат с крутейшим набором, сходить в потную схватку с топовыми игроками – словом, возможностей и особенностей целое море, советуем изучить детальнее!',
      },
    ],
  },
  sections: [],
};
