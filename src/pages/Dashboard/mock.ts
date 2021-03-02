import { Images } from '../../shared/utils/images';

export default [
  {
    img: Images.marvelFavorites,
    title: 'Marvel Favoritos',
    subtitle: '<p>Veja aqui a sua lista de <strong>Favoritos Marvel</strong>',
    buttonLabel: 'Favoritos',
    buttonLink: '/api/comics',
  },
  {
    img: Images.marvelComics,
    title: 'Marvel Comics',
    subtitle: '<p>Busque aqui sua <strong>Comic Marvel</strong> favorita!',
    buttonLabel: 'Comics',
    buttonLink: '/api/comics',
  },
  {
    img: Images.marvelPersons,
    title: 'Marvel Persons',
    subtitle: '<p>Busque aqui sua <strong>Personagem Marvel</strong> favorito!',
    buttonLabel: 'Personagens',
    buttonLink: '/api/comics',
  },
];
