import clans from '../../assets/img/clans.jpg';
import clanCreation from '../../assets/img/clan-creation.jpg';
import clanMenu from '../../assets/img/clan-menu.jpg';
import goldIngot from '../../assets/itemsImg/gold-ingot.webp';
import totemOfUndying from '../../assets/itemsImg/totem-of-undying.webp';
import crimsonFungus from '../../assets/itemsImg/crimson-fungus.webp';
import craftingTable from '../../assets/itemsImg/crafting-table.webp';
import weepingVinesPlant from '../../assets/itemsImg/weeping-vines-plant.webp';
import bottleOEnchanting from '../../assets/itemsImg/bottle-o-enchanting.webp';
import potionOfStrength from '../../assets/itemsImg/potion-of-strength.webp';
import potionOfSwiftness from '../../assets/itemsImg/potion-of-swiftness.webp';
import potionOfFireResistance from '../../assets/itemsImg/potion-of-fire-resistance.webp';
import potionOfTheTurtleMaster from '../../assets/itemsImg/potion-of-the-turtle-master.webp';
import goldenPickaxe from '../../assets/itemsImg/golden-pickaxe.webp';
import endCrystal from '../../assets/itemsImg/end-crystal.webp';
import chorusFlower from '../../assets/itemsImg/chorus-flower.webp';
import potion from '../../assets/itemsImg/potion.webp';
import diamondSword from '../../assets/itemsImg/diamond-sword.webp';
import paper from '../../assets/itemsImg/paper.webp';
import playerHead from '../../assets/itemsImg/player-head.webp';
import compass from '../../assets/itemsImg/compass.webp';
import barrier from '../../assets/itemsImg/barrier.webp';

export const CLANS = {
  articleName: {
    ru: 'Создание и удаление кланов',
    uk: 'Створення та видалення кланів',
    en: 'Creating and deleting clans',
  },
  articleAddress: '/clans',
  articleContent: [
    {
      element: 'img',
      src: clans,
      alt: {
        ru: 'Кланы: команды и возможности',
        uk: 'Клани: команди та можливості',
        en: 'Clans: commands and possibilities',
      },
      style: { width: '100%' },
    },
    {
      element: 'p',
      value: {
        ru: 'Чтобы создать или удалить клан нужно прописать в чате команду /clan, после чего вам откроется меню с двумя кнопками — создать и удалить клан.',
        uk: 'Щоб створити або видалити клан, потрібно ввести команду /clan у чаті, після чого вам відкриється меню з двома кнопками — створити і видалити клан.',
        en: 'To create or delete a clan, you need to type the command /clan in the chat, after which a menu with two buttons will appear — create and delete clan.',
      },
    },
    {
      element: 'img',
      src: clanCreation,
      alt: { ru: 'Создание клана', uk: 'Створення клану', en: 'Clan creation' },
      style: { width: '50%' },
    },
    {
      element: 'h3',
      value: {
        ru: 'Условие для создания клана:',
        uk: 'Умова для створення клану:',
        en: 'Condition for creating a clan:',
      },
    },
    {
      element: 'p',
      value: {
        ru: 'На счету должно быть не менее 500&nbsp;000 монеток(значение в конфиг), которые спишутся сразу после создания клана;',
        uk: 'На рахунку повинно бути не менше 500&nbsp;000 монеток (значення у конфіг), які будуть списані одразу після створення клану.',
        en: 'There should be at least 500&nbsp;000 coins (value in the config) on the account, which will be deducted immediately after the clan is created.',
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Если у вас достаточно денег, то вы должны прописать в чате название клана которое составляет до 12-ти символов (запрещено писать оскорбительные или нецензурные названия кланов, в противном случае, они будут удалены). Сразу, как название клана отправляется в чат, с вас списываются деньги. Изменить название, после создания клана, невозможно.',
        uk: 'Якщо у вас достатньо грошей, ви повинні ввести у чаті назву клану, яка складає до 12 символів (заборонено використовувати образливі або нецензурні назви кланів, в іншому випадку вони будуть видалені). Як тільки назва клану відправляється у чат, гроші знімаються з вашого рахунку. Змінити назву після створення клану неможливо.',
        en: 'If you have enough money, you must enter the clan name in the chat, which can be up to 12 characters long (it is forbidden to use offensive or obscene clan names, otherwise, they will be removed). As soon as the clan name is sent in the chat, the money will be deducted from your account. It is not possible to change the name after the clan is created.',
      },
    },
    {
      element: 'h3',
      value: {
        ru: 'Приглашение участников в клан',
        uk: 'Запрошення учасників до клану',
        en: 'Inviting members to the clan',
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Чтобы пригласить участника к себе в клан, нужно ввести <b>/clan invite</b> ник.<br>Для принятия приглашения нужно ввести  <b>/clan accept</b>.<br>Для отказа приглашения нужно ввести <b>/clan abort</b>.',
        uk: 'Щоб запросити учасника до свого клану, потрібно ввести <b>/clan invite</b> нікнейм.<br>Для прийняття запрошення потрібно ввести <b>/clan accept</b>.<br>Для відмови від запрошення потрібно ввести <b>/clan abort</b>.',
        en: 'To invite a member to your clan, you need to type <b>/clan invite</b> nickname.<br>To accept the invitation, type <b>/clan accept</b>.<br>To decline the invitation, type <b>/clan abort</b>.',
      },
    },
    {
      element: 'h4',
      value: {
        ru: 'Условия приглашений:',
        uk: 'Умови запрошень:',
        en: 'Invitation conditions:',
      },
    },
    {
      element: 'ol',
      li: {
        ru: [
          'Пригласить в клан может ТОЛЬКО его создатель;',
          'Участников в клане может быть до 12, включительно;',
          'Приглашенный участник не должен состоять в каком-либо другом клане;',
          'Приглашенный участник должен быть в сети;',
          'Нельзя отправить приглашение участнику, если его уже кто-то пригласил.',
        ],
        uk: [
          'Запросити до клану може ТІЛЬКИ його засновник;',
          'Учасників у клані може бути до 12, включно;',
          'Запрошений учасник не повинен бути у якомусь іншому клані;',
          'Запрошений учасник повинен бути в мережі;',
          'Неможливо відправити запрошення учаснику, якщо його вже хтось запросив.',
        ],
        en: [
          'Only the clan creator can invite to the clan;',
          'There can be up to 12 members in the clan;',
          'The invited member must not be part of any other clan;',
          'The invited member must be online;',
          'You cannot send an invitation to a member if someone else has already invited them.',
        ],
      },
    },
    {
      element: 'ul',
      li: {
        ru: [
          'Для исключения участника клана необходимо ввести команду <b>/clan dismiss</b> ник. Исключить участника имеет право ТОЛЬКО создатель.',
          'Выйти с клана самому можно по команде <b>/clan leave</b>.',
        ],
        uk: [
          'Для виключення учасника клану необхідно ввести команду <b>/clan dismiss</b> нік. Виключити учасника має право ТІЛЬКИ засновник.',
          'Вийти з клану самостійно можна за допомогою команди <b>/clan leave</b>.',
        ],
        en: [
          'To remove a clan member, you need to enter the command <b>/clan dismiss</b> nickname. Removing a member is ONLY allowed for the creator.',
          'You can leave the clan on your own using the command <b>/clan leave</b>.',
        ],
      },
    },
    {
      element: 'h3',
      value: { ru: 'Меню клана', uk: 'Меню клану', en: 'Clan Menu' },
    },
    {
      element: 'img',
      src: clanMenu,
      alt: { ru: 'Меню клана', uk: 'Меню клану', en: 'Clan Menu' },
      style: { width: '50%' },
    },
    {
      element: 'h4',
      value: {
        ru: '1. Казна Клана',
        uk: '1. Казна Клану',
        en: '1. Clan Treasury',
      },
      additionImg: {
        src: goldIngot,
        alt: { ru: 'Золотой слиток', uk: 'Золотий слиток', en: 'Gold Ingot' },
        style: { width: '3%' },
      },
    },
    {
      element: 'p',
      value: {
        ru: 'В данном разделе вы можете пополнять монетами казну клана или снимать их. Валюта в казне необходима для покупки различных клановых преимуществ. Пополнить казну можно на 1&nbsp;000, 10&nbsp;000, 100&nbsp;000 монет, таким же образом и забрать.',
        uk: 'У цьому розділі ви можете поповнювати казну клану монетами або знімати їх. Валюта в казні необхідні для покупки різноманітних кланових переваг. Поповнити казну можна на 1&nbsp;000, 10&nbsp;000, 100&nbsp;000 монет, так само як і зняти їх.',
        en: 'In this section, you can deposit or withdraw coins from the clan treasury. The currency in the treasury is necessary for purchasing various clan benefits. You can deposit or withdraw funds in increments of 1&nbsp;000, 10&nbsp;000, and 100&nbsp;000 coins.',
      },
    },
    {
      element: 'h4',
      value: {
        ru: '2. Магазин Клана',
        uk: '2. Магазин Клану',
        en: '2. Clan Shop',
      },
      additionImg: {
        src: totemOfUndying,
        alt: {
          ru: 'Тотем бессмертия',
          uk: 'Тотем безсмертя',
          en: 'Totem of Immortality',
        },
        style: { width: '3%' },
      },
    },
    {
      element: 'p',
      value: {
        ru: 'В данном разделе вы можете приобрести уникальные предметы и яйца призыва из Премиум-Магазина за монетки, вместо рубинов.<br>Но, чтобы открыть* первую страницу, необходимо прокачать клан до 5-го уровня и иметь 1&nbsp;000&nbsp;000 монет в казне клана.<br>Для открытия* второй страницы необходимо 10 клана и 1&nbsp;500&nbsp;000 монет в казне клана.<br>*Разблокировать магазин имеет право только создатель клана.',
        uk: 'У цьому розділі ви можете придбати унікальні предмети та яйця виклику з Преміум-Магазину за монетки, замість рубінів.<br>Але для відкриття* першої сторінки необхідно підняти рівень клану до 5-го та мати 1&nbsp;000&nbsp;000 монет в казні клану.<br>Для відкриття* другої сторінки потрібно 10 рівень клану та 1&nbsp;500&nbsp;000 монет в казні клану.<br>*Розблокувати магазин має право тільки засновник клану.',
        en: 'In this section, you can purchase unique items and summoning eggs from the Premium Shop for coins instead of rubies.<br>However, to unlock* the first page, you need to level up the clan to level 5 and have 1&nbsp;000&nbsp;000 coins in the clan treasury.<br>To unlock* the second page, you need clan level 10 and 1&nbsp;500&nbsp;000 coins in the clan treasury.<br>*Only the clan creator has the right to unlock the shop.',
      },
    },
    {
      element: 'h4',
      value: {
        ru: '3. Уникальные Возможности',
        uk: '3. Унікальні Можливості',
        en: '3. Unique Features',
      },
      additionImg: {
        src: crimsonFungus,
        alt: {
          ru: 'Багровый гриб',
          uk: 'Багровий гриб',
          en: 'Crimson Mushroom',
        },
        style: { width: '3%', transform: 'scale(1.8)' },
      },
    },
    {
      element: 'p',
      value: {
        ru: 'В данном разделе имеется:',
        uk: 'У цьому розділі мається:',
        en: 'In this section, there is:',
      },
    },
    {
      element: 'h4',
      value: {
        ru: '• &nbsp;Крафт Особого Привата',
        uk: '• &nbsp;Крафт Особистого Привату',
        en: '• &nbsp;Crafting Special Private',
      },
      additionImg: {
        src: craftingTable,
        alt: { ru: 'Верстак', uk: 'Верстат', en: 'Workbench' },
        style: { width: '3%' },
      },
    },
    {
      element: 'p',
      value: {
        ru: 'При нажатии на верстак открывается меню, в котором показан крафт уникального кланового привата. Именно в нём будут работать все уникальные возможности. Приват будет иметь размеры 69 х 69 х 69 (радиус — 34 блока во все 6 сторон от блока привата), его можно поставить, но при поломке он не выпадет, то есть <b>установить можно лишь 1 раз</b>. Крафтить можно его неограниченное количество раз, но одновременно <b>в 1 клане может стоять лишь 1 такой приват</b>. Ставить может ТОЛЬКО владелец клана. Приват не может пересекаться с обычными приватами и с приватами других кланов.',
        uk: 'При натисканні на верстат відкривається меню, в якому показаний крафт унікального кланового привату. Саме в цьому меню будуть доступні всі унікальні можливості. Приват матиме розміри 69 х 69 х 69 (радіус — 34 блоки у всі 6 напрямках від блоку привату), його можна встановити, але при знищенні він не випаде, тобто <b>встановити можна лише 1 раз</b>. Крафтити його можна необмежену кількість разів, але одночасно <b>в 1 клані може бути лише 1 такий приват</b>. Встановлювати його може ТІЛЬКИ власник клану. Приват не може перетинатися з звичайними приватами і з приватами інших кланів.',
        en: "When you click on the workbench, a menu opens showing the crafting recipe for the unique clan private area. All unique features will work within this menu. The private area will have dimensions of 69 x 69 x 69 (radius — 34 blocks in all 6 directions from the private area block), it can be placed, but it won't drop upon destruction, meaning <b>it can be placed only once</b>. You can craft it an unlimited number of times, but simultaneously, <b>only 1 such private area can exist in 1 clan</b>. Only the clan owner can place it. The private area cannot intersect with regular private areas or with private areas of other clans.",
      },
    },
    {
      element: 'h4',
      value: {
        ru: '• &nbsp;2 эффекта сразу',
        uk: '• &nbsp;2 ефекти одночасно',
        en: '• &nbsp;2 effects simultaneously',
      },
      additionImg: {
        src: weepingVinesPlant,
        alt: { ru: 'Плакучие лианы', uk: 'Плакучі лози', en: 'Weeping Vines' },
        style: { width: '3%', transform: 'scale(1.2)' },
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Данная возможность позволяет ставить 2 эффекта сразу, она изначально заблокирована. Для разблокировки возможности необходимо иметь 20 уровень клана и 5&nbsp;000&nbsp;000 монет в казне клана (или 3&nbsp;000 рубинов на личном балансе).',
        uk: 'Ця можливість дозволяє застосовувати 2 ефекти одночасно, вона зазначена як заблокована на початку. Щоб розблокувати цю можливість, потрібно мати 20 рівень клану та 5&nbsp;000&nbsp;000 монет в казні клану (або 3&nbsp;000 рубінів на особистому балансі).',
        en: 'This feature allows applying 2 effects simultaneously; it is initially locked. To unlock the feature, you need to have clan level 20 and 5&nbsp;000&nbsp;000 coins in the clan treasury (or 3&nbsp;000 rubies in your personal balance).',
      },
    },
    {
      element: 'h4',
      value: {
        ru: '• &nbsp;Опыт На Шару',
        uk: '• &nbsp;Досвід На Шару',
        en: '• &nbsp;Experience On The Off Chance',
      },
      additionImg: {
        src: bottleOEnchanting,
        alt: {
          ru: 'Пузырек опыта',
          uk: 'Пузирок досвіду',
          en: 'Experience Bottle',
        },
        style: { width: '3%' },
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Данная возможность дает всем участникам 1 опыт персонажа каждый час. Опыт начисляется если участник находится на территории привата клана и включена данная возможность. Изначально она заблокирована, для ее разблокировки необходимо иметь 2&nbsp;000&nbsp;000 монет в казне клана или 1&nbsp;250 рубинов.<br><b>Включить этот и ниже перечисленные эффекты может любой участник клана.</b>',
        uk: 'Ця можливість дозволяє кожному учаснику отримувати 1 досвід персонажа кожну годину. Досвід нараховується, якщо учасник знаходиться на території кланового привату і дана можливість активована. Спочатку вона є заблокованою, для її розблокування потрібно мати 2&nbsp;000&nbsp;000 монет в казні клану або 1&nbsp;250 рубінів.<br><b>Будь-який учасник клану може активувати цей та всі інші нижче перелічені ефекти.</b>',
        en: "This feature allows each participant to receive 1 character experience point every hour. Experience is accrued if the participant is within the clan's private territory and this feature is enabled. Initially, it is locked, and to unlock it, you need to have 2&nbsp;000&nbsp;000 coins in the clan treasury or 1&nbsp;250 rubies.<br><b>Any clan member can activate this and all other effects listed below.</b>",
      },
    },
    {
      element: 'h4',
      value: {
        ru: '• &nbsp;Сопротивление К Возгоранию Пердака',
        uk: '• &nbsp; Спротивлення Займання Сідниці',
        en: '• &nbsp;Fire Resistance For Buttocks',
      },
      additionImg: {
        src: potionOfFireResistance,
        alt: {
          ru: 'Зелье сопротивления к огню',
          uk: 'Зелье стійкості до вогню',
          en: 'Fire Resistance Potion',
        },
        style: { width: '3%', transform: 'scale(1.2)' },
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Данная возможность дает всем участникам, которые находятся на территории привата клана, эффект огнестойкости 1-го уровня. Данный эффект изначально заблокирован, для его разблокировки необходимо иметь 1&nbsp;000&nbsp;000 монет в казне клана или 750 рубинов.',
        uk: 'Ця можливість надає всім учасникам, які знаходяться на території кланового привату, ефект вогнестійкості першого рівня. Цей ефект спочатку заблокований, для його розблокування потрібно мати 1&nbsp;000&nbsp;000 монет в казні клану або 750 рубінів.',
        en: "This feature grants all participants within the clan's private territory the Fire Resistance effect at level 1. This effect is initially locked, and to unlock it, you need to have 1&nbsp;000&nbsp;000 coins in the clan treasury or 750 rubies.",
      },
    },
    {
      element: 'h4',
      value: {
        ru: '• &nbsp;Скорость Соника',
        uk: '• &nbsp;Швидкість Соніка',
        en: '• &nbsp;Sonic Speed',
      },
      additionImg: {
        src: potionOfSwiftness,
        alt: {
          ru: 'Зелье скорости',
          uk: 'Зелье швидкості',
          en: 'Potion of Swiftness',
        },
        style: { width: '3%', transform: 'scale(1.2)' },
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Данный эффект дает всем участникам, которые находятся на территории привата клана, скорость 2-го уровня. Эффект изначально заблокирован, для его разблокировки необходимо иметь 1&nbsp;500&nbsp;000 монет в казне клана или 1&nbsp;000 рубинов.',
        uk: 'Цей ефект надає всім учасникам, які перебувають на території кланового привату, швидкість другого рівня. Цей ефект спочатку заблокований, для його розблокування потрібно мати 1&nbsp;500&nbsp;000 монет в казні клану або 1&nbsp;000 рубінів.',
        en: "This effect grants all participants within the clan's private territory the Speed effect at level 2. This effect is initially locked, and to unlock it, you need to have 1&nbsp;500&nbsp;000 coins in the clan treasury or 1&nbsp;000 rubies.",
      },
    },
    {
      element: 'h4',
      value: {
        ru: '• &nbsp;Прочнее Черепахи',
        uk: '• &nbsp;Міцніший За Черепаху',
        en: '• &nbsp;Tougher Than A Turtle',
      },
      additionImg: {
        src: potionOfTheTurtleMaster,
        alt: {
          ru: 'Зелье мастера Угвея',
          uk: 'Зілля майстра Угвея',
          en: "Master Ugway's Elixir",
        },
        style: { width: '3%', transform: 'scale(1.2)' },
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Данный эффект дает всем участникам, которые находятся на территории привата клана, сопротивление урону 1-го уровня. Эффект изначально заблокирован, для его разблокировки необходимо иметь 2&nbsp;500&nbsp;000 монет в казне клана или 1&nbsp;500 рубинов.',
        uk: 'Цей ефект надає всім учасникам, які перебувають на території кланового привату, стійкість до урону першого рівня. Цей ефект спочатку заблокований, для його розблокування потрібно мати 2&nbsp;500&nbsp;000 монет в казні клану або 1&nbsp;500 рубінів.',
        en: "This effect grants all participants within the clan's private territory Resistance to Damage at level 1. This effect is initially locked, and to unlock it, you need to have 2&nbsp;500&nbsp;000 coins in the clan treasury or 1&nbsp;500 rubies.",
      },
    },
    {
      element: 'h4',
      value: {
        ru: '• &nbsp;Спешка Нужна При Ловле Блох',
        uk: '• &nbsp;Спішка Потрібна При Ловлі Блох',
        en: '• &nbsp;Haste Is Needed When Catching Fleas',
      },
      additionImg: {
        src: goldenPickaxe,
        alt: { ru: 'Золотая кирка', uk: 'Золота кирка', en: 'Golden Pickaxe' },
        style: { width: '3%' },
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Данный эффект дает всем участникам, которые находятся на территории привата клана, спешку 2-го уровня. Эффект изначально заблокирован, для его разблокировки необходимо иметь 3&nbsp;500&nbsp;000 монет в казне клана или 2&nbsp;000 рубинов.',
        uk: 'Цей ефект надає всім учасникам, які перебувають на території кланового привату, швидкість другого рівня. Цей ефект спочатку заблокований, для його розблокування потрібно мати 3&nbsp;500&nbsp;000 монет в казні клану або 2&nbsp;000 рубінів.',
        en: "This effect grants all participants within the clan's private territory Haste at level 2. This effect is initially locked, and to unlock it, you need to have 3&nbsp;500&nbsp;000 coins in the clan treasury or 2&nbsp;000 rubies.",
      },
    },
    {
      element: 'h4',
      value: {
        ru: '• &nbsp;Сила Геркулеса',
        uk: '• &nbsp;Сила Геркулеса',
        en: '• &nbsp;Strength Of Hercules',
      },
      additionImg: {
        src: potionOfStrength,
        alt: { ru: 'Зелье силы', uk: 'Зілля силы', en: 'Strength Potion' },
        style: { width: '3%', transform: 'scale(1.2)' },
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Данный эффект дает всем участникам, которые находятся на территории привата клана, силу 2-го уровня. Эффект изначально заблокирован, для его разблокировки необходимо иметь 1&nbsp;500&nbsp;000 монет в казне клана или 1&nbsp;000 рубинов.',
        uk: 'Цей ефект надає всім учасникам, які перебувають на території кланового привату, силу другого рівня. Цей ефект спочатку заблокований, для його розблокування потрібно мати 1&nbsp;500&nbsp;000 монет в казні клану або 1&nbsp;000 рубінів.',
        en: "This effect grants all participants within the clan's private territory Strength at level 2. This effect is initially locked, and to unlock it, you need to have 1&nbsp;500&nbsp;000 coins in the clan treasury or 1&nbsp;000 rubies.",
      },
    },
    {
      element: 'h4',
      value: {
        ru: '4. Прокачка Клана',
        uk: '4. Прокачка Клану',
        en: '4. Clan Upgrades',
      },
      additionImg: {
        src: endCrystal,
        alt: { ru: 'Кристалл энда', uk: 'Кришталь Енду', en: 'End Crystal' },
        style: { width: '3%' },
      },
    },
    {
      element: 'p',
      value: {
        ru: 'В этом разделе вы можете приобрести клановые очки за рубины, а также увеличить уровень клана, выполняя необходимые требования. <br>Чем больше очков и выше уровень, тем больше стратегических преимуществ получает ваш клан.',
        uk: 'У цьому розділі ви можете придбати кланові бали за рубіни, а також підвищити рівень клану, виконуючи необхідні вимоги. <br>Чим більше балів та вище рівень, тим більше стратегічних переваг отримує ваш клан.',
        en: 'In this section, you can purchase clan points for rubies and also level up the clan by meeting the necessary requirements. <br>The more points you have and the higher the level, the more strategic advantages your clan gains.',
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Для увеличения уровня клана необходимо:',
        uk: 'Для підвищення рівня клану необхідно:',
        en: 'To level up the clan, you need to:',
      },
    },
    {
      element: 'p',
      value: {
        ru:
          '<b>1 уровень</b> – изначально у всех кланов;<br>' +
          '<b>2 уровень</b> – 1 очко клана и 100&nbsp;000 монет;<br>' +
          '<b>3 уровень</b> – 2 очка клана и 200&nbsp;000 монет;<br>' +
          '<b>4 уровень</b> – 3 очка клана и 300&nbsp;000 монет;<br>' +
          '<b>5 уровень</b> – 4 очка клана и 400&nbsp;000 монет;<br>' +
          '<b>6 уровень</b> – 5 очков клана и 500&nbsp;000 монет;<br>' +
          '<b>7 уровень</b> – 6 очков клана и 600&nbsp;000 монет;<br>' +
          '<b>8 уровень</b> – 7 очков клана и 700&nbsp;000 монет;<br>' +
          '<b>9 уровень</b> – 8 очков клана и 800&nbsp;000 монет;<br>' +
          '<b>10 уровень</b> – 10 очков клана и 1&nbsp;000&nbsp;000 монет;<br>' +
          '<b>11 уровень</b> – 14 очков клана и 1&nbsp;200&nbsp;000 монет;<br>' +
          '<b>12 уровень</b> – 18 очков клана и 1&nbsp;400&nbsp;000 монет;<br>' +
          '<b>13 уровень</b> – 22 очкоа клана и 1&nbsp;600&nbsp;000 монет;<br>' +
          '<b>14 уровень</b> – 26 очков клана и 1&nbsp;800&nbsp;000 монет;<br>' +
          '<b>15 уровень</b> – 30 очков клана и 2&nbsp;000&nbsp;000 монет;<br>' +
          '<b>16 уровень</b> – 35 очков клана и 2&nbsp;200&nbsp;000 монет;<br>' +
          '<b>17 уровень</b> – 40 очков клана и 2&nbsp;400&nbsp;000 монет;<br>' +
          '<b>18 уровень</b> – 45 очков клана и 2&nbsp;600&nbsp;000 монет;<br>' +
          '<b>19 уровень</b> – 50 очков клана и 2&nbsp;800&nbsp;000 монет;<br>' +
          '<b>20 уровень</b> – 75 очков клана и 4&nbsp;000&nbsp;000 монет;<br>' +
          '<b>20 уровень максимальный</b>',
        uk:
          '<b>1 рівень</b> – спочатку у всіх кланів;<br>' +
          '<b>2 рівень</b> – 1 бал клану та 100&nbsp;000 монет;<br>' +
          '<b>3 рівень</b> – 2 бали клану та 200&nbsp;000 монет;<br>' +
          '<b>4 рівень</b> – 3 бали клану та 300&nbsp;000 монет;<br>' +
          '<b>5 рівень</b> – 4 бали клану та 400&nbsp;000 монет;<br>' +
          '<b>6 рівень</b> – 5 балів клану та 500&nbsp;000 монет;<br>' +
          '<b>7 рівень</b> – 6 балів клану та 600&nbsp;000 монет;<br>' +
          '<b>8 рівень</b> – 7 балів клану та 700&nbsp;000 монет;<br>' +
          '<b>9 рівень</b> – 8 балів клану та 800&nbsp;000 монет;<br>' +
          '<b>10 рівень</b> – 10 балів клану та 1&nbsp;000&nbsp;000 монет;<br>' +
          '<b>11 рівень</b> – 14 балів клану та 1&nbsp;200&nbsp;000 монет;<br>' +
          '<b>12 рівень</b> – 18 балів клану та 1&nbsp;400&nbsp;000 монет;<br>' +
          '<b>13 рівень</b> – 22 бали клану та 1&nbsp;600&nbsp;000 монет;<br>' +
          '<b>14 рівень</b> – 26 балів клану та 1&nbsp;800&nbsp;000 монет;<br>' +
          '<b>15 рівень</b> – 30 балів клану та 2&nbsp;000&nbsp;000 монет;<br>' +
          '<b>16 рівень</b> – 35 балів клану та 2&nbsp;200&nbsp;000 монет;<br>' +
          '<b>17 рівень</b> – 40 балів клану та 2&nbsp;400&nbsp;000 монет;<br>' +
          '<b>18 рівень</b> – 45 балів клану та 2&nbsp;600&nbsp;000 монет;<br>' +
          '<b>19 рівень</b> – 50 балів клану та 2&nbsp;800&nbsp;000 монет;<br>' +
          '<b>20 рівень</b> – 75 балів клану та 4&nbsp;000&nbsp;000 монет;<br>' +
          '<b>20 рівень максимальний</b>',
        en:
          '<b>Level 1</b> – initially available for all clans;<br>' +
          '<b>Level 2</b> – 1 clan point and 100&nbsp;000 coins;<br>' +
          '<b>Level 3</b> – 2 clan points and 200&nbsp;000 coins;<br>' +
          '<b>Level 4</b> – 3 clan points and 300&nbsp;000 coins;<br>' +
          '<b>Level 5</b> – 4 clan points and 400&nbsp;000 coins;<br>' +
          '<b>Level 6</b> – 5 clan points and 500&nbsp;000 coins;<br>' +
          '<b>Level 7</b> – 6 clan points and 600&nbsp;000 coins;<br>' +
          '<b>Level 8</b> – 7 clan points and 700&nbsp;000 coins;<br>' +
          '<b>Level 9</b> – 8 clan points and 800&nbsp;000 coins;<br>' +
          '<b>Level 10</b> – 10 clan points and 1&nbsp;000&nbsp;000 coins;<br>' +
          '<b>Level 11</b> – 14 clan points and 1&nbsp;200&nbsp;000 coins;<br>' +
          '<b>Level 12</b> – 18 clan points and 1&nbsp;400&nbsp;000 coins;<br>' +
          '<b>Level 13</b> – 22 clan points and 1&nbsp;600&nbsp;000 coins;<br>' +
          '<b>Level 14</b> – 26 clan points and 1&nbsp;800&nbsp;000 coins;<br>' +
          '<b>Level 15</b> – 30 clan points and 2&nbsp;000&nbsp;000 coins;<br>' +
          '<b>Level 16</b> – 35 clan points and 2&nbsp;200&nbsp;000 coins;<br>' +
          '<b>Level 17</b> – 40 clan points and 2&nbsp;400&nbsp;000 coins;<br>' +
          '<b>Level 18</b> – 45 clan points and 2&nbsp;600&nbsp;000 coins;<br>' +
          '<b>Level 19</b> – 50 clan points and 2&nbsp;800&nbsp;000 coins;<br>' +
          '<b>Level 20</b> – 75 clan points and 4&nbsp;000&nbsp;000 coins;<br>' +
          '<b>Maximum Level 20</b>',
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Важно знать, что при повышении уровня, очки <b>не снимаются</b>.',
        uk: 'Важливо знати, що при підвищенні рівня, бали <b>не знімаються</b>.',
        en: "It's important to know that when leveling up, points <b>are not deducted</b>.",
      },
    },
    {
      element: 'h4',
      value: {
        ru: '5. Шальной Івент',
        uk: '5. Шалений Івент',
        en: '5. Wild Event',
      },
      additionImg: {
        src: chorusFlower,
        alt: { ru: 'Цветок хоруса', uk: 'Квітка Хоруса', en: 'Chorus Flower' },
        style: { width: '3%' },
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Ивент, который появляется в случайное время 2 раза в сутки (с 08:00 МСК до 24:00 МСК) на 1 час. В течение этих 60 минут участники клана должны выполнить определённое задание, в награду получают очки клана. У всех кланов появляются <b>одинаковые задания в одинаковое время</b>. О новых заданиях оповещаются только участники кланов. Когда ивент активен, <b>цветок хоруса в меню становится зачарованным</b>.',
        uk: "Івент, який відбувається випадковий час 2 рази на день (з 08:00 МСК до 24:00 МСК) протягом 1 години. Протягом цих 60 хвилин учасники клану повинні виконати певне завдання і отримують бали клану в нагороду. У всіх кланів з'являються <b>однакові завдання в однаковий час</b>. Про нові завдання сповіщають лише учасники кланів. Коли івент активний, <b>квітка Хоруса в меню стає зачарованою</b>.",
        en: 'An event that occurs at random times twice a day (from 08:00 MSK to 24:00 MSK) for 1 hour. During these 60 minutes, clan members must complete a specific task and receive clan points as a reward. All clans receive <b>the same tasks at the same time</b>. Only clan members are notified about new tasks. When the event is active, <b>the Chorus Flower in the menu becomes enchanted</b>.',
      },
    },
    {
      element: 'p',
      value: {
        ru: '<b>В случайное время будет появляться один из следующих ивентов:</b>',
        uk: "<b>Випадковий івент буде з'являтися в один із наступних моментів:</b>",
        en: '<b>At random times, one of the following events will appear:</b>',
      },
    },
    {
      element: 'ul',
      li: {
        ru: ['Каждый участник клана должен убить 8 враждебных мобов.'],
        uk: ['Кожен учасник клану повинен вбити 8 ворожих мобів.'],
        en: ['Each clan member must kill 8 hostile mobs.'],
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Награда – 1 очко клана.',
        uk: 'Нагорода – 1 бал клану.',
        en: 'Reward – 1 clan point.',
      },
    },
    {
      element: 'ul',
      li: {
        ru: ['Каждый участник клана должен взорвать 16 динамита.'],
        uk: ['Кожен учасник клану повинен підірвати 16 динаміту.'],
        en: ['Each clan member must detonate 16 TNT.'],
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Награда – 1 очко клана.',
        uk: 'Нагорода – 1 бал клану.',
        en: 'Reward – 1 clan point.',
      },
    },
    {
      element: 'ul',
      li: {
        ru: ['Каждый участник клана должен съесть 2 золотых яблока.'],
        uk: ["Кожен учасник клану повинен з'їсти 2 золоті яблука."],
        en: ['Each clan member must eat 2 golden apples.'],
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Награда – 1 очко клана.',
        uk: 'Нагорода – 1 бал клану.',
        en: 'Reward – 1 clan point.',
      },
    },
    {
      element: 'ul',
      li: {
        ru: ['Зачаровать 8 незеритовых вещей на 30 уровень.'],
        uk: ['Зачарувати 8 незеритових речей на 30 рівень.'],
        en: ['Enchant 8 netherite items to level 30.'],
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Награда – 1 очко клана.',
        uk: 'Нагорода – 1 бал клану.',
        en: 'Reward – 1 clan point.',
      },
    },
    {
      element: 'ul',
      li: {
        ru: ['Суммарно участники клана должны нафармить 30 уровней опыта.'],
        uk: ['Учасники клану повинні разом набрати 30 рівнів досвіду.'],
        en: ['Clan members must collectively earn 30 experience levels.'],
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Награда – 1 очко клана.',
        uk: 'Нагорода – 1 бал клану.',
        en: 'Reward – 1 clan point.',
      },
    },
    {
      element: 'ul',
      li: {
        ru: [
          'Суммарно участники клана должны добыть 16 стаков блоков обсидиана.',
        ],
        uk: [
          'Учасники клану повинні загалом здобути 16 стаків блоків обсидіану.',
        ],
        en: [
          'Clan members must collectively mine 16 stacks of obsidian blocks.',
        ],
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Награда – 1 очко клана.',
        uk: 'Нагорода – 1 бал клану.',
        en: 'Reward – 1 clan point.',
      },
    },
    {
      element: 'ul',
      li: {
        ru: ['Воскресить Дракона Энда и убить его.'],
        uk: ['Воскресити Дракона Енда і вбити його.'],
        en: ['Resurrect the End Dragon and defeat it.'],
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Награда – 2 очка клана.',
        uk: 'Нагорода – 2 бала клану.',
        en: 'Reward – 2 clan points.',
      },
    },
    {
      element: 'ul',
      li: {
        ru: ['Сходить в Клановый поединок и одержать победу.'],
        uk: ['Взяти участь в клановому поєдинку і здобути перемогу.'],
        en: ['Participate in a Clan Battle and emerge victorious.'],
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Награда – 2 очка клана.',
        uk: 'Нагорода – 2 бала клану.',
        en: 'Reward – 2 clan points.',
      },
    },
    {
      element: 'ul',
      li: {
        ru: ['Прокачать уровень клана.'],
        uk: ['Підняти рівень клану.'],
        en: ['Level up the clan.'],
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Награда – 1 очко клана.',
        uk: 'Нагорода – 1 бал клану.',
        en: 'Reward – 1 clan point.',
      },
    },
    {
      element: 'ul',
      li: {
        ru: ['Скрафтить 8 стаков динамита.'],
        uk: ['Скрафтити 8 стаків динаміту.'],
        en: ['Craft 8 stacks of TNT.'],
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Награда – 1 очко клана.',
        uk: 'Нагорода – 1 бал клану.',
        en: 'Reward – 1 clan point.',
      },
    },
    {
      element: 'ul',
      li: {
        ru: ['Каждый участник клана должен скрафтить 2 стака динамита.'],
        uk: ['Кожен учасник клану повинен скрафтити 2 стаки динаміту.'],
        en: ['Each clan member must craft 2 stacks of TNT.'],
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Награда – 1 очко клана.',
        uk: 'Нагорода – 1 бал клану.',
        en: 'Reward – 1 clan point.',
      },
    },
    {
      element: 'ul',
      li: {
        ru: [
          'Каждый участник клана должен зачаровать 2 любые вещи на 30 уровень.',
        ],
        uk: [
          'Кожен учасник клану повинен зачарувати 2 будь-які речі на 30 рівень.',
        ],
        en: ['Each clan member must enchant 2 items to level 30.'],
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Награда – 1 очко клана.',
        uk: 'Нагорода – 1 бал клану.',
        en: 'Reward – 1 clan point.',
      },
    },
    {
      element: 'ul',
      li: {
        ru: ['Каждый участник клана должен съесть 32 плода Хоруса.'],
        uk: ["Кожен учасник клану повинен з'їсти 32 плоди Хоруса."],
        en: ['Each clan member must eat 32 Chorus Fruits.'],
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Награда – 1 очко клана.',
        uk: 'Нагорода – 1 бал клану.',
        en: 'Reward – 1 clan point.',
      },
    },
    {
      element: 'ul',
      li: {
        ru: [
          'Каждый участник клана должен выпить по 2 зелья силы 2 уровня, скорости 2 уровня, огнестойкости на 8 минут, черепашьей мощи.',
        ],
        uk: [
          'Кожен учасник клану повинен випити по 2 зелья сили 2 рівня, швидкості 2 рівня, вогнестійкості на 8 хвилин та зелье черепахової сили.',
        ],
        en: [
          'Each clan member must drink 2 potions of Strength II, Speed II, Fire Resistance for 8 minutes, and Turtle Master.',
        ],
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Награда – 2 очка клана.',
        uk: 'Нагорода – 2 бала клану.',
        en: 'Reward – 2 clan points.',
      },
    },
    {
      element: 'ul',
      li: {
        ru: ['Каждый участник клана должен добыть 3 алмаза.'],
        uk: ['Кожен учасник клану повинен здобути 3 алмази.'],
        en: ['Each clan member must mine 3 diamonds.'],
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Награда – 2 очка клана.',
        uk: 'Нагорода – 2 бала клану.',
        en: 'Reward – 2 clan points.',
      },
    },
    {
      element: 'ul',
      li: {
        ru: ['Заспавнить 3 Визера.'],
        uk: ['Заспавнити 3 Візерів.'],
        en: ['Spawn 3 Withers.'],
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Награда – 1 очко клана.',
        uk: 'Нагорода – 1 бал клану.',
        en: 'Reward – 1 clan point.',
      },
    },
    {
      element: 'ul',
      li: {
        ru: ['Посетить Адскую крепость.'],
        uk: ['Відвідати Адську фортецю.'],
        en: ['Visit the Nether Fortress.'],
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Награда – 1 очко клана.',
        uk: 'Нагорода – 1 бал клану.',
        en: 'Reward – 1 clan point.',
      },
    },
    {
      element: 'ul',
      li: {
        ru: ['Посетить Город Энда.'],
        uk: ['Відвідати Місто Енда.'],
        en: ['Visit the End City.'],
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Награда – 1 очко клана.',
        uk: 'Нагорода – 1 бал клану.',
        en: 'Reward – 1 clan point.',
      },
    },
    {
      element: 'ul',
      li: {
        ru: ['Отбить Рейд в Деревне жителей.'],
        uk: ['Відбити Рейд у Селі мешканців.'],
        en: ['Defend a Village from a Raid.'],
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Награда – 1 очко клана.',
        uk: 'Нагорода – 1 бал клану.',
        en: 'Reward – 1 clan point.',
      },
    },
    {
      element: 'h4',
      value: {
        ru: '6. Стакнутые Зелья',
        uk: '6. Стакнуті Зілля',
        en: '6. Stacked Potions',
      },
      additionImg: {
        src: potion,
        alt: { ru: 'Зелье', uk: 'Зілля', en: 'Potion' },
        style: { width: '3%' },
      },
    },
    {
      element: 'p',
      value: {
        ru: 'В данном разделе вы можете стакать зелья. Раздел открывается от 5-го уровня клана.',
        uk: 'У цьому розділі ви можете стакати зілля. Розділ відкривається з 5-го рівня клану.',
        en: 'In this section, you can stack potions. The section becomes available from clan level 5.',
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Открыв этот раздел перед вами появится меню, где вы можете стакать зелья. В красную область (обозначенную красными стеклянными панелями) участник помещает зелья. Когда все зелья помещены в область, игрок подтверждает стаканье и платит с казны клана 5000 монет, после чего зелья перемещаются ему в инвентарь.',
        uk: "Після відкриття цього розділу перед вами з'явиться меню, де ви зможете стакати зілля. Учасник розміщує зілля в червону область (позначену червоними скляними панелями). Коли всі зілля розміщені в області, гравець підтверджує стакування та сплачує з казни клану 5000 монет, після чого зілля переміщуються йому в інвентар.",
        en: 'After opening this section, a menu will appear where you can stack potions. The player places potions in the red area (indicated by red glass panels). Once all potions are placed in the area, the player confirms the stacking and pays 5000 coins from the clan treasury, after which the potions are moved to their inventory.',
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Условия при которых возможно стакнуть зелья:',
        uk: 'Умови, за яких можливо стакати зілля:',
        en: 'Conditions for stacking potions:',
      },
    },
    {
      element: 'ul',
      li: {
        ru: [
          'Стакать может любой участник клана;',
          'Стакнутые зелья нельзя стакнуть повторно;',
          'Можно стакнуть зелья таких видов, как: сила, скорость, регенерация, огнестойкость;',
          'Стакнуть можно только питьевые зелья (не взрывные).',
          'Количество стакнутых зелий в одно зависит от доната:',
        ],
        uk: [
          'Стакати може будь-який учасник клану;',
          'Стакнуті зелья не можна стакнути знову;',
          'Можна стакнути зелья таких видів, як: сила, швидкість, регенерація, вогнестійкість;',
          'Стакати можна лише питні зелья (не вибухові).',
          'Кількість стакнутих зілля в одному залежить від доната:',
        ],
        en: [
          'Any clan member can stack potions;',
          'Stacked potions cannot be stacked again;',
          'You can stack potions such as: Strength, Speed, Regeneration, Fire Resistance;',
          'Only drinkable potions (not splash potions) can be stacked.',
          'The number of stacked potions in one stack depends on the donation level:',
        ],
      },
      className: 'dashList',
    },
    {
      element: 'ul',
      li: {
        ru: [
          'Кинг – до 10 штук;',
          'Фантом – до 9-ти штук;',
          'Элдер – до 8-ми штук;',
          'Оверлорд – до 7-ми штук;',
          'Гладиатор, мастер, паладин – до 6-ти штук;',
          'Холи, игрок – до 5-ти штук.',
        ],
        uk: [
          'Кінг – до 10 штук;',
          'Фантом – до 9 штук;',
          'Елдер – до 8 штук;',
          'Оверлорд – до 7 штук;',
          'Гладіатор, майстер, паладін – до 6 штук;',
          'Холі, гравець – до 5 штук.',
        ],
        en: [
          'King – up to 10 stacks;',
          'Phantom – up to 9 stacks;',
          'Elder – up to 8 stacks;',
          'Overlord – up to 7 stacks;',
          'Gladiator, Master, Paladin – up to 6 stacks;',
          'Holy, Player – up to 5 stacks.',
        ],
      },
    },
    {
      element: 'h4',
      value: {
        ru: '7. Начать Поединок',
        uk: '7. Розпочати Поєдинок',
        en: '7. Start A Battle',
      },
      additionImg: {
        src: diamondSword,
        alt: { ru: 'Алмазный меч', uk: 'Алмазний меч', en: 'Diamond sword' },
        style: { width: '3%' },
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Поединок — это клановое сражение за очки на случайной территории. Для участия в поединке ваш клан должен иметь не менее 3-х очков клана.',
        uk: 'Поєдинок — це клановий бій за очки на випадковій території. Для участі в поєдинку ваш клан повинен мати не менше 3-х очок клану.',
        en: 'Battle is a clan fight for points on a random territory. To participate in a battle, your clan must have at least 3 clan points.',
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Чтобы начать поединок с определенным кланом необходимо собрать команду с примерно таким же количеством участников, что и у противников (различие по участникам должно быть не более одного игрока).',
        uk: 'Щоб розпочати поєдинок з певним кланом, необхідно зібрати команду приблизно з такою самою кількістю учасників, як і у супротивників (різниця в кількості учасників не повинна перевищувати одного гравця).',
        en: 'To start a battle with a specific clan, you need to assemble a team with roughly the same number of participants as the opponents (the difference in participants should not exceed one player).',
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Для начала поединка все участники должны <b>находиться на спавне</b>.',
        uk: 'Для початку поєдинку всі учасники повинні <b>знаходитися на спавні</b>.',
        en: 'To start the battle, all participants must <b>be at the spawn point</b>.',
      },
    },
    {
      element: 'h4',
      value: {
        ru: '8. Список Кланов',
        uk: '8. Список Кланів',
        en: '8. Clan List',
      },
      additionImg: {
        src: paper,
        alt: { ru: 'Бумага', uk: 'Бумага', en: 'Paper' },
        style: { width: '3%' },
      },
    },
    {
      element: 'p',
      value: {
        ru: 'В списке клана вы найдете подробную информацию о каждом клане на сервере.',
        uk: 'У списку клану ви знайдете докладну інформацію про кожен клан на сервері.',
        en: 'In the clan list, you will find detailed information about each clan on the server.',
      },
    },
    {
      element: 'h4',
      value: {
        ru: '9. Описание Кланов',
        uk: '9. Опис Кланів',
        en: '9. Clan Descriptions',
      },
      additionImg: {
        src: playerHead,
        alt: { ru: 'Голова', uk: 'Голова', en: 'Head' },
        style: { width: '3%', transform: 'scale(1.8) translate(0, -3px)' },
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Полное описание вашего клана.',
        uk: 'Повний опис вашого клану.',
        en: 'Full description of your clan.',
      },
    },
    {
      element: 'h4',
      value: {
        ru: '10. Помощь По Командам Клана',
        uk: '10. Допомога З Командами Клану',
        en: '10. Help With Clan Commands',
      },
      additionImg: {
        src: compass,
        alt: { ru: 'Компас', uk: 'Компас', en: 'Compass' },
        style: { width: '3%' },
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Наведясь на данную иконку вам выдастся список абсолютно всех команд клана.',
        uk: 'Наведіть на дану іконку, і вам буде висвітлено список усіх команд клану.',
        en: 'Hovering over this icon will give you a list of all clan commands.',
      },
    },
    {
      element: 'h4',
      value: {
        ru: '11. Покинуть клан',
        uk: '11. Покинути клан',
        en: '11. Leave the clan',
      },
      additionImg: {
        src: barrier,
        alt: { ru: 'Барьер', uk: "Бар'єр", en: 'Barrier' },
        style: { width: '3%', transform: 'scale(1.2)' },
      },
    },
    {
      element: 'p',
      value: {
        ru: 'Нажав на данную иконку вам выдастся предложение о подтверждение выхода с клана.',
        uk: 'Натисканням на цю іконку ви отримаєте пропозицію про підтвердження виходу з клану.',
        en: 'Clicking on this icon will prompt you to confirm leaving the clan.',
      },
    },
  ],
};
