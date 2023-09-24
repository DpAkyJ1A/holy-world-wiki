import coinsFromMobsPeaceful from '../../assets/img/coins-from-mobs-peaceful.jpg';
import coinsFromMobsHostile from '../../assets/img/coins-from-mobs-hostile.jpg';
import coinsFromMobsNether from '../../assets/img/coins-from-mobs-nether.jpg';
import coinsFromMobsEnd from '../../assets/img/coins-from-mobs-end.jpg';

export const COINSFROMMOBS = {
  articleName: 'Монетки со всех мобов',
  articleAddress: '/coins_from_all_mobs',
  articleContent: [
    {
      element: 'p',
      value: 'В этой статье речь пойдёт о монетках, которые выпадают с мобов.',
    },
    {
      element: 'p',
      value:
        'Достаточно частый вопрос среди новичков – какая фармилка будет самая выгодная, на основе чего следует строить себе ферму мобов? Возможно, благодаря этой статье вы сможете подобрать для себя идеальную комбинацию мобов в рассадниках, благодаря которой сможете зарабатывать целые горы монеток как на торговле ресурсами, которые выпадают в процессе фарма, так и непосредственно с самих мобов.',
    },
    {
      element: 'p',
      value:
        'Для удобства мы разделили всех существ на 4 категории: мирные мобы обычного мира, враждебные мобы обычного мира, мобы адского измерения, мобы измерения Энда.',
    },
    {
      element: 'img',
      src: coinsFromMobsPeaceful,
      alt: 'Монетки с мирных мобов в обычном мире',
      style: { width: '100%' },
    },
    {
      element: 'p',
      value:
        'Здесь довольно интересными смотрятся странствующие торговцы и железные големы. Со вторых ко всему прочему ещё и можно лутать железные слитки, которые также достаточно неплохо улетают с полок аукциона.',
    },
    {
      element: 'img',
      src: coinsFromMobsHostile,
      alt: 'Монетки с враждебных мобов в обычном мире',
      style: { width: '100%' },
    },
    {
      element: 'p',
      value:
        'Тут можно рассмотреть сразу несколько вариантов. Например, в начале вайпа довольно неплохо можно налутаться на древних стражах, отрубив им плавники в подводных данжах. Кроме этого, можно ещё и построить ферму рейдов, где можно будет убивать сразу несколько существ из этого перечня, зарабатывая действительно неплохие деньги.',
    },
    {
      element: 'img',
      src: coinsFromMobsNether,
      alt: 'Монетки с мобов в нижнем мире',
      style: { width: '100%' },
    },
    {
      element: 'p',
      value:
        'Здесь внимание стоит обратить на, например, визер-скелетов, гастов или непосредственно самих визеров. Кроме этого, в начале вайпа довольно неплохой стратегией будет побежать в бастион и отрубить пятаки брутальным пиглинам. На этих парнях можно неплохо поднять деньжат.',
    },
    {
      element: 'img',
      src: coinsFromMobsEnd,
      alt: 'Монетки с мобов в измерению энда',
      style: { width: '100%' },
    },
    {
      element: 'p',
      value:
        'Мир Энда похвастаться большим количеством обитателей, к сожалению, совсем не может. Однако монетки с главного его жителя, дракона Края, перекрывают абсолютно все возможные сомнения в величии данного мира – более 5 тысяч монет за раз это вам, друзья, не в муку попёрдывать!',
    },
  ],
};
