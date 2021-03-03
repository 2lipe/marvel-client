import { CHARACTERS_PATH } from '../../routes/character.routes';
import { COMICS_PATH } from '../../routes/comic.routes';
import { Images } from '../../shared/utils/images';

export default [
  {
    img: Images.marvelFavorites,
    title: 'Marvel Favoritos',
    subtitle: '<p>Veja aqui a sua lista de <strong>Favoritos Marvel</strong>',
    buttonLabel: 'Favoritos',
    buttonLink: '/favoritos',
  },
  {
    img: Images.marvelComics,
    title: 'Marvel Comics',
    subtitle: '<p>Busque aqui sua <strong>Comic Marvel</strong> favorita!',
    buttonLabel: 'Comics',
    buttonLink: COMICS_PATH.Main,
  },
  {
    img: Images.marvelPersons,
    title: 'Marvel Persons',
    subtitle: '<p>Busque aqui sua <strong>Personagem Marvel</strong> favorito!',
    buttonLabel: 'Personagens',
    buttonLink: CHARACTERS_PATH.Main,
  },
];
