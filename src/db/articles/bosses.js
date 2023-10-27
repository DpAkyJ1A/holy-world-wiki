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
  articleName: {
    ru: 'Боссы',
    uk: 'Боси',
    en: '',
  },
  articleAddress: '/bosses',
  articleContent: [
    {
      element: 'p',
      value: {
        ru: 'На спавне на ПВП-арене из глубин седьмого измерения появляется 1 из множества устрашающих Боссов, с которыми каждый игрок попытаться сразиться и обогатить свой рубиновый и вещественный счёт. Их головы имеют высокую ценность, поэтому за наибольший вклад в убийство того или иного босса, не говоря уже про горы ценнейших ресурсов, каждый игрок сможет получить награду в виде рубинов! Как говорится, рискуя жизнью беден не останешься. Но имейте в виду, у всех есть рабочие часы, так что ночью погриндить на шару и близко не надейтесь. С «графиком работы» Боссов и других ивентов вы можете ознакомиться в статье:',
        uk: 'На спавні на ПВП-арені, один з багатьох страхітливих босів з\'являється з глибини сьомого виміру, з яким кожен гравець намагається битися і збагатити свій рубіновий і матеріальний рахунок. Їх голови мають високу цінність, тому за найбільший внесок у вбивство того чи іншого боса, не кажучи вже про гори найцінніших ресурсів, кожен гравець зможе отримати винагороду у вигляді рубінів! Як кажуть, ризикуючи життям, бідним не залишишся. Але майте на увазі, у кожного робочі години, тому погріндити вночі на шару і не сподівайтеся. Ви можете ознайомитись із "робочим графіком" Босів та інших івентів у статті:',
        en: '',
      },
    },
    {
      element: 'link',
      to: '/classic-and-speedrun/pvp/events/server_event_schedule',
      value: { ru: 'Расписание ивентов', uk: 'Розклад івентів', en: '' },
    },
    {
      element: 'p',
      value: {
        ru: 'Конечно же, если вы не хотите сидеть несколько часов в ожидании появления Босса, то вы можете призывать его самостоятельно с помощью универсального ключа с использованием Алтаря, который находится неподалёку от ПВП-арены.',
        uk: 'Звичайно, якщо ви не хочете сидіти кілька годин, чекаючи появи Боса, то ви можете призвати його самостійно за допомогою універсального ключа за допомогою Вівтаря, який розташований поблизу ПВП-арени.',
        en: '',
      },
    },
    {
      element: 'img',
      src: altar,
      alt: { ru: 'Алтарь', uk: 'Вівтар', en: '' },
      style: { width: '100%' },
    },
    {
      element: 'p',
      value: {
        ru: 'Перейдем к самому интересному — к драгоценному луту, который выпадает с Босса после его смерти.',
        uk: 'Давайте перейдемо до найцікавішого — до дорогоцінного луту, який випадає з боса після його смерті.',
        en: '',
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Существует два вида лута — общий и конкретный. Общий — это тот лут, который выпадает со всех Боссов без исключения, а конкретный — это лут, который связан с тем или иным Боссом и выпадает только из него. Обратите внимание, что из общего лута выпадают не все предметы, а лишь определённые из общего списка.',
        uk: "Існує два типи лута — загальний та специфічний. Загальний — це той лут, який випадає з усіх Босів без винятку, а специфічний — це лут, який пов'язаний з тим чи іншим Босом і випадає лише з нього. Зверніть увагу, що з загального луту випадають не усі предмети, а лише певні із загального списку.",
        en: '',
      },
    },
    {
      element: 'img',
      src: totalLoot,
      alt: { ru: 'Общий лут', uk: 'Загальний лут', en: '' },
      style: { width: '100%' },
    },
    {
      element: 'p',
      value: {
        ru: 'Неплохой способ добыть себе неплохого оружия, брони или расходиков. Хотя, при ПВП на арене можно с лёгкостью раздобыть себе этих вещей буквально двойными сундуками.',
        uk: 'Непоганий спосіб отримати непогану зброю, броню або розхідників. Хоча, при PVP на арені, ви можете легко отримати ці речі буквально подвійними скринями.',
        en: '',
      },
    },
    {
      element: 'img',
      src: suicidal,
      alt: { ru: 'Суицидник', uk: 'Самогубець', en: '' },
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: cowWithRabies,
      alt: { ru: 'Коровка с бешенством', uk: 'Коровка зі сказом', en: '' },
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: iceTroll,
      alt: { ru: 'Ледяной Тролль', uk: 'Крижаний Троль', en: '' },
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: leonardo,
      alt: { ru: 'Леонардо', uk: 'Леонардо', en: '' },
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: wanderer,
      alt: { ru: 'Странник', uk: 'Мандрівник', en: '' },
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: illusionist,
      alt: { ru: 'Иллюзионист', uk: 'Ілюзіоніст', en: '' },
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: speedruner,
      alt: { ru: 'Спидранер', uk: 'Спідранер', en: '' },
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: suicideBomber,
      alt: { ru: 'Смертник', uk: 'Смертник', en: '' },
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: horseInACoat,
      alt: { ru: 'Конь в пальто', uk: 'Кінь в пальто', en: '' },
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: louse,
      alt: { ru: 'Вошь', uk: 'Воша', en: '' },
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: slipperyJoe,
      alt: { ru: 'Скользкий Джо', uk: 'Слизький Джо', en: '' },
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: henrichPotter,
      alt: { ru: 'Генрих Поттер', uk: 'Генріх Поттер', en: '' },
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: grandmaYaga,
      alt: { ru: 'Бабка Яга', uk: 'Бабуся Яга', en: '' },
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: kungFuMasterPo,
      alt: { ru: 'Мастер Кунг-фу По', uk: 'Майстер Кунг-фу По', en: '' },
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: rooster,
      alt: { ru: 'Петух', uk: 'Півень', en: '' },
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: carlson,
      alt: { ru: 'Карлсон', uk: 'Карлсон', en: '' },
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: capybara,
      alt: { ru: 'Капибара', uk: 'Капітал', en: '' },
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: fiend,
      alt: { ru: 'Исчадие ада', uk: 'Виплодок пекла', en: '' },
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: squidwardSchpalenko,
      alt: { ru: 'Сквидвард Щупаленко', uk: 'Сквідвард Щупаленко', en: '' },
      style: { width: '80%' },
    },
    {
      element: 'img',
      src: arachnids,
      alt: { ru: 'Арахнид', uk: 'Арахнід', en: '' },
      style: { width: '80%' },
    },
  ],
};
