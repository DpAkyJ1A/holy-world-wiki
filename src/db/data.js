import { BOSSES } from './articles/bosses';
import { BOURGEOISDESCRIPTION } from './articles/bourgeoisDescription';
import { CHALLENGESDESCRIPTION } from './articles/challengesDescription';
import { CLANS } from './articles/clans';
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
  homePage: {
    articleName: 'Классик и спидран',
    articleData: [
      {
        subHeader: 'Анархия классик',
        text: 'Классическая Анархия является режимом с множеством возможностей во всех существующих отраслях: здесь можно и гриферить базы, получая целые горы эмоций и, разумеется, не меньше ресурсов; и вступать в жесточайшие схватки во время фирменных ивентов, которых существует целых 4 штуки и которые в течение дня проходят целых 20 раз; и попробовать заработать миллионы, или даже миллиарды монеток, взаимодействуя с нашим торговым персонажем Буржуем или же занимаясь активной торговлей с игроками через аукцион - в общем и целом не зайти и не начать развиваться абсолютно нельзя!',
      },
      {
        subHeader: 'Анархия спидран',
        text: 'Спидран Анархия представляет из себя режим, на котором всё упирается в скорость развития: с первых минут вайпа можно заполучить награды за то, что ты быстрее других: убить дракона, первым заработать миллион или же первым пройти Буржуя - за всё это можно заработать горы рубинов. Если вам и этого мало, то в течение вайпа каждую неделю за заработок монет можно дополнительно заработать с несколько десятков тысяч рубинов, но если вдруг и этого не достаточно - имейте в виду, что без постройки базы и фермы заработать ничего не получится, а следовательно гриферство также никто не отменял.. Одним словом - непременно залетайте и начинайте свой спидран по Спидрану!',
      },
    ],
  },
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
