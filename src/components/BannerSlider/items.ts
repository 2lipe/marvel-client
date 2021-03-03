import { Images } from '../../shared/utils/images';

export default [
  {
    img: Images.marvelComics,
    title: 'Marvel Comics',
    subtitle: '<p>Busque aqui suas <strong>Comics Marvel</strong> favoritas!',
    buttonLabel: 'Comics',
    buttonLink: '/api/comics',
  },
  {
    img: Images.marvelPersons,
    title: 'Marvel Persons',
    subtitle: '<p>Busque aqui seus <strong>Personagens Marvel</strong> favoritos!',
    buttonLabel: 'Personagens',
    buttonLink: '/api/comics',
  },
  {
    img: Images.marvelFavorites,
    title: 'Marvel Favoritos',
    subtitle: '<p>Veja aqui a sua lista de <strong>Favoritos Marvel</strong>',
    buttonLabel: 'Favoritos',
    buttonLink: '/api/comics',
  },
];
