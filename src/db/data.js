import { BOSSES } from './articles/bosses';
import { BOURGEOISDESCRIPTION } from './articles/bourgeoisDescription';
import { CHALLENGESDESCRIPTION } from './articles/challengesDescription';
import { CLANS } from './articles/clans';
import { CLASSICANDSPEEDRUNHOME } from './articles/classicAndSpeedrunHome';
import { COINSFROMMOBS } from './articles/coinsFromMobs';
import { ENDLESSTRADING } from './articles/endlessTrading';
import { EVENTSCHEDULE } from './articles/eventSchedule';
import { HOME } from './articles/home';
import { LITEANARCHYHOME } from './articles/liteAnarchyHome';
import { PRICESINFO } from './articles/pricesInfo';
import { SANCTUOUSJACOB } from './articles/sanctuousJacob';
import { SPAWNERS } from './articles/spawners';
import { UNIQUEDUNGEONS } from './articles/uniqueDungeons';

export const HolyWorldWikiHome = {
  baseAddress: '/',
  homePage: HOME,
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
          sectionName: {
            ru: 'Кланы',
            uk: 'Клани',
          },
          sectionAddress: '/clans',
          articles: [CLANS],
        },
        {
          sectionName: {
            ru: 'Ивенты',
            uk: 'Івенти',
          },
          sectionAddress: '/events',
          articles: [EVENTSCHEDULE, BOSSES, SANCTUOUSJACOB],
        },
      ],
    },
    {
      sectionName: 'PVE',
      sectionAddress: '/pve',
      subsections: [
        {
          sectionName: {
            ru: 'Буржуй',
            uk: 'Буржуа',
          },
          sectionAddress: '/bourgeois',
          articles: [BOURGEOISDESCRIPTION, ENDLESSTRADING, PRICESINFO],
        },
        {
          sectionName: {
            ru: 'Уникальные данжи',
            uk: 'Унікальні данжи',
          },
          sectionAddress: '/unique_dungeons',
          articles: [UNIQUEDUNGEONS],
        },
        {
          sectionName: {
            ru: 'Рассадники',
            uk: 'Розсадники',
          },
          sectionAddress: '/spawners',
          articles: [SPAWNERS],
        },
        {
          sectionName: {
            ru: 'Мобы и монетки',
            uk: 'Моби і монетки',
          },
          sectionAddress: '/mobs_and_coins',
          articles: [COINSFROMMOBS],
        },
        {
          sectionName: {
            ru: 'Боевой пропуск',
            uk: 'Бойова перепустка',
          },
          sectionAddress: '/battle_pass',
          articles: [CHALLENGESDESCRIPTION],
        },
      ],
    },
  ],
};

export const liteAnarchy = {
  baseAddress: '/lite-anarchy',
  homePage: LITEANARCHYHOME,
  sections: [],
};
