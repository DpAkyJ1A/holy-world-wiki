import altar from '../../assets/img/altar.jpg';
import totalLoot from '../../assets/img/total-loot.jpg';

import suicidal from '../../assets/img/suicidal.jpg';
import cowWithRabies from '../../assets/img/cow-with-rabies.jpg';
import iceTroll from '../../assets/img/ice-troll.jpg';
import leonardo from '../../assets/img/leonardo.jpg';
import wanderer from '../../assets/img/wanderer.jpg';
import illusionist from '../../assets/img/illusionist.jpg';
import speedruner from '../../assets/img/speedruner.jpg';
import suicideBomber from '../../assets/img/suicide-bomber.jpg';
import horseInACoat from '../../assets/img/horse-in-a-coat.jpg';
import louse from '../../assets/img/louse.jpg';
import slipperyJoe from '../../assets/img/slippery-joe.jpg';
import henrichPotter from '../../assets/img/henrich-potter.jpg';
import grandmaYaga from '../../assets/img/grandma-yaga.jpg';
import kungFuMasterPo from '../../assets/img/kung-fu-master-po.jpg';
import rooster from '../../assets/img/rooster.jpg';
import carlson from '../../assets/img/carlson.jpg';
import capybara from '../../assets/img/capybara.jpg';
import fiend from '../../assets/img/fiend.jpg';
import squidwardSchpalenko from '../../assets/img/squidward-schpalenko.jpg';
import arachnids from '../../assets/img/arachnids.jpg';


export const BOSSES = {
  articleName: 'Боссы',
  articleAddress: '/bosses',
  articleContent: [
    {
      element: 'p',
      value:
        'На спавне на ПВП-арене из глубин седьмого измерения появляется 1 из множества устрашающих Боссов, с которыми каждый игрок попытаться сразиться и обогатить свой рубиновый и вещественный счёт. Их головы имеют высокую ценность, поэтому за наибольший вклад в убийство того или иного босса, не говоря уже про горы ценнейших ресурсов, каждый игрок сможет получить награду в виде рубинов! Как говорится, рискуя жизнью беден не останешься. Но имейте в виду, у всех есть рабочие часы, так что ночью погриндить на шару и близко не надейтесь. С «графиком работы» Боссов и других ивентов вы можете ознакомиться в статье:',
    },
    {
      element: 'link',
      to: '/classic-and-speedrun/pvp/events/server_event_schedule',
      value: 'Расписание ивентов',
    },
    {
      element: 'p',
      value:
        'Конечно же, если вы не хотите сидеть несколько часов в ожидании появления Босса, то вы можете призывать его самостоятельно с помощью универсального ключа с использованием Алтаря, который находится неподалёку от ПВП-арены.',
    },
    {
      element: 'img',
      src: altar,
      alt: 'Алтарь',
      style: { width: '100%' },
    },
    {
      element: 'p',
      value:
        'Перейдем к самому интересному - к драгоценному луту, который выпадает с Босса после его смерти.',
    },
    {
      element: 'p',
      value:
        'Существует два вида лута - общий и конкретный. Общий - это тот лут, который выпадает со всех Боссов без исключения, а конкретный - это лут, который связан с тем или иным Боссом и выпадает только из него. Обратите внимание, что из общего лута выпадают не все предметы, а лишь определённые из общего списка.',
    },
    {
      element: 'img',
      src: totalLoot,
      alt: 'Общий лут',
      style: { width: '100%' },
    },
    {
      element: 'p',
      value:
        'Неплохой способ добыть себе неплохого оружия, брони или расходиков. Хотя, при ПВП на арене можно с лёгкостью раздобыть себе этих вещей буквально двойными сундуками.',
    },
    {
      element: 'img',
      src: suicidal,
      alt: 'Суицидник',
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: cowWithRabies,
      alt: 'Коровка с бешенством',
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: iceTroll,
      alt: 'Ледяной Тролль',
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: leonardo,
      alt: 'Леонардо',
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: wanderer,
      alt: 'Странник',
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: illusionist,
      alt: 'Иллюзионист',
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: speedruner,
      alt: 'Спидранер',
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: suicideBomber,
      alt: 'Смертник',
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: horseInACoat,
      alt: 'Конь в пальто',
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: louse,
      alt: 'Вошь',
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: slipperyJoe,
      alt: 'Скользкий Джо',
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: henrichPotter,
      alt: 'Генрих Поттер',
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: grandmaYaga,
      alt: 'Бабка Яга',
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: kungFuMasterPo,
      alt: 'Мастер Кунг-фу По',
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: rooster,
      alt: 'Петух',
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: carlson,
      alt: 'Карлсон',
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: capybara,
      alt: 'Капибара',
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: fiend,
      alt: 'Исчадие ада',
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: squidwardSchpalenko,
      alt: 'Сквидвард Щупаленко',
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: arachnids,
      alt: 'Арахнид',
      style: { width: '80%' },
    },
  ],
};
