import pricesInfo1 from '../../assets/img/prices-info-1.png';
import pricesInfo2 from '../../assets/img/prices-info-2.png';
import pricesInfo3 from '../../assets/img/prices-info-3.png';

export const PRICESINFO = {
  articleName: {
    ru: 'Информация о всех ценах в Бесконечной Торговле',
    uk: 'Інформація про всі ціни у Нескінченній Торгівлі',
    en: '',
  },
  articleAddress: '/info_about_prices_in_endless_trading',
  articleContent: [
    {
      element: 'h4',
      value: {
        ru: 'Итак, перейдем к самим предметам, ценам и артефактам.',
        uk: 'Отже, давайте перейдемо до самих предметів, цін та артефактів.',
        en: '',
      },
    },
    {
      element: 'p',
      value: {
        ru: '1) Возможные предметы, которые могут быть артефактом:',
        uk: '1) Можливі предмети, які можуть бути артефактом:',
        en: '',
      },
    },
    {
      element: 'img',
      src: pricesInfo1,
      alt: { ru: 'Возможные артефакты', uk: 'Можливі артефакти', en: '' },
      style: { width: '100%' },
    },
    {
      element: 'p',
      value: {
        ru: 'Спавнер ифритов, Спавнер зомби, Спавнер скелетов, Спавнер пауков, Спавнер пещерных пауков, Незеритовый блок, Трезубец, Элитра, Голова крипера, Голова зомби, Череп скелета, Голова дракона, Зачарованное золотое яблоко.',
        uk: 'Спавнер іфритів, Спавнер зомбі, Спавнер скелетів, Спавнер павуків, Спавнер печерних павуків, Незеритовий блок, Тризуб, Елітра, Голова крипера, Голова зомбі, Череп скелета, Голова дракона, Зачароване золоте яблуко.',
        en: '',
      },
    },
    {
      element: 'p',
      value: {
        ru: '2) <b>Возможные необходимые предметы для топлива</b>:',
        uk: '2) <b>Можливі необхідні предмети для палива</b>:',
        en: '',
      },
    },
    {
      element: 'img',
      src: pricesInfo2,
      alt: { ru: 'Предметы для топлива', uk: 'Предмети для палива', en: '' },
      style: { width: '100%' },
    },
    {
      element: 'p',
      value: {
        ru: 'Незеритовый слиток, Кристалл Энда, Пузырёк опыта, Золотое яблоко, Лук-батун, Мёртвый куст, Морской источник, Роза визера, Звезда Незера, Мембрана фантома, Раковина Наутилуса, Якорь возрождения, Эндер-сундук, Чародейский стол, Морской фонарь, Динамит, Наковальня, Блок пчелиных сот, Магнетит, Золочёный чернит, Колокол, Шалкеровый Ящик, любая Пластинка.',
        uk: 'Незеритовий злиток, Кристал Енда, Пузирок досвіду, Золоте яблуко, Лук-батун, Мертвий кущ, Морське джерело, Роза візера, Зірка Незера, Мембрана фантома, Раковина Наутилуса, Якір відродження, Ендер-сундук, Чаклунський стіл, Морський ліхтар, Динаміт, Ковадло, Блок бджолиних сот, Магнетит, Позолочений чорнит, Колокол, Шалкеровий Ящик, будь-яка Пластинка.',
        en: '',
      },
    },
    {
      element: 'p',
      value: {
        ru: '3) Также стоит добавить, что при каждом проданном стаке цена падает на 1% от цены.',
        uk: '3) Варто також додати, що при кожному проданому стаку ціна падає на 1% від ціни.',
        en: '',
      },
    },
    {
      element: 'img',
      src: pricesInfo3,
      alt: { ru: 'Падение цены', uk: 'Падіння ціни', en: '' },
      style: { width: '100%' },
    },
    {
      element: 'p',
      value: {
        ru:
          '<b>Список продаваемых предметов:</b><br>' +
          'Кактус – 500<br>' +
          'Тростник – 500<br>' +
          'Арбуз – 1&nbsp;000<br>' +
          'Тыква – 1&nbsp;000<br>' +
          'Нарост – 1&nbsp;200<br>' +
          'Картофель – 700<br>' +
          'Морковь – 700<br>' +
          'Свёкла – 700<br>' +
          'Пшеница – 900<br>' +
          'Коричневый гриб – 1&nbsp;200<br>' +
          'Красный гриб – 1&nbsp;200<br>' +
          'Багровый гриб – 500<br>' +
          'Искажённый гриб – 700<br>' +
          'Сладкие ягоды – 700<br>' +
          'Какао-боб – 700<br>' +
          'Хорус – 1&nbsp;000<br>' +
          'Гнилая плоть – 600<br>' +
          'Кость – 600<br>' +
          'Стрела – 600<br>' +
          'Паучий глаз – 700<br>' +
          'Нить – 600<br>' +
          'Панцирь шалкера – 60&nbsp;000<br>' +
          'Кожа – 1&nbsp;000<br>' +
          'Стейк – 800<br>' +
          'Жареная свинина – 800<br>' +
          'Перо – 1&nbsp;300<br>' +
          'Жареная курица – 800<br>' +
          'Жареная баранина – 800<br>' +
          'Жареная крольчатина – 1&nbsp;000<br>' +
          'Жареный лосось – 700<br>' +
          'Жареная треска – 700<br>' +
          'Иглобрюх – 900<br>' +
          'Тропическая рыба – 2&nbsp;100<br>' +
          'Огненный стержень – 500<br>' +
          'Череп визер-скелета – 2&nbsp;500<br>' +
          'Сгусток магмы – 600<br>' +
          'Булыжник – 50<br>' +
          'Эндерняк –300<br>' +
          'Незерак – 150<br>' +
          'Андезит – 280<br>' +
          'Гранит – 280<br>' +
          'Диорит – 280<br>' +
          'Гравий – 150<br>' +
          'Песок – 140<br>' +
          'Чернит – 350<br>' +
          'Дуб – 1&nbsp;600<br>' +
          'Ель – 1&nbsp;600<br>' +
          'Акациевое бревно – 1&nbsp;600<br>' +
          'Берёзовое бревно – 1&nbsp;600<br>' +
          'Бревно тёмного дуба – 1&nbsp;600<br>' +
          'Бревно тропического дерева – 1&nbsp;600<br>' +
          'Искажённый стебель – 1&nbsp;600<br>' +
          'Багровый стебель – 1&nbsp;600<br>' +
          'Базальт – 800<br>' +
          'Земля – 250<br>' +
          'Обсидиан – 1&nbsp;400<br>' +
          'Незерские кирпичи – 600<br>',
        uk:
          '<b>Список продаваних предметів:</b><br>' +
          'Кактус – 500<br>' +
          'Тростина – 500<br>' +
          'Кавун – 1&nbsp;000<br>' +
          'Гарбуз – 1&nbsp;000<br>' +
          'Наріст – 1&nbsp;200<br>' +
          'Картопля – 700<br>' +
          'Морква – 700<br>' +
          'Буряк – 700<br>' +
          'Пшениця – 900<br>' +
          'Коричневий гриб – 1&nbsp;200<br>' +
          'Червоний гриб – 1&nbsp;200<br>' +
          'Багровий гриб – 500<br>' +
          'Спотворений гриб – 700<br>' +
          'Солодкі ягоди – 700<br>' +
          'Какао-боби – 700<br>' +
          'Хорус – 1&nbsp;000<br>' +
          "Гниле м'ясо – 600<br>" +
          'Кістка – 600<br>' +
          'Стріла – 600<br>' +
          'Павукове око – 700<br>' +
          'Нитка – 600<br>' +
          'Панцир шалкера – 60&nbsp;000<br>' +
          'Шкіра – 1&nbsp;000<br>' +
          'Стейк – 800<br>' +
          'Смажена свинина – 800<br>' +
          'Перо – 1&nbsp;300<br>' +
          'Смажена курка – 800<br>' +
          'Смажена баранина – 800<br>' +
          'Смажена кролятинка – 1&nbsp;000<br>' +
          'Смажений лосось – 700<br>' +
          'Смажена тріска – 700<br>' +
          'Іглобрюх – 900<br>' +
          'Тропічна риба – 2&nbsp;100<br>' +
          'Вогняний стержень – 500<br>' +
          'Череп візер-скелета – 2&nbsp;500<br>' +
          'Згусток магми – 600<br>' +
          'Булижник – 50<br>' +
          'Ендерняк –300<br>' +
          'Незерак – 150<br>' +
          'Андезит – 280<br>' +
          'Граніт – 280<br>' +
          'Діорит – 280<br>' +
          'Гравій – 150<br>' +
          'Пісок – 140<br>' +
          'Черніт – 350<br>' +
          'Дуб – 1&nbsp;600<br>' +
          'Ялина – 1&nbsp;600<br>' +
          'Акацієве бревно – 1&nbsp;600<br>' +
          'Березове бревно – 1&nbsp;600<br>' +
          'Бревно темного дуба – 1&nbsp;600<br>' +
          'Бревно тропічного дерева – 1&nbsp;600<br>' +
          'Спотворене стебло – 1&nbsp;600<br>' +
          'Багрове стебло – 1&nbsp;600<br>' +
          'Базальт – 800<br>' +
          'Земля – 250<br>' +
          'Обсидіан – 1&nbsp;400<br>' +
          'Незерські цеглини – 600<br>',
      },
    },
  ],
};
