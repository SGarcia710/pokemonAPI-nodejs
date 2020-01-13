const { Exception } = require('../exception');
const cheerio = require('cheerio');
const axios = require('axios');

const getAllTypes = async () => {
  try {
    //obtengo el html y se lo setteo como data cheerio
    const response = await axios.get(
      'https://pokemondb.net/pokedex/game/sword-shield'
    );
    const $ = cheerio.load(response.data);

    //Agarro el contenido de algo en especifico dentro de un padre
    // const title = $('h1', '.main-content').text();
    // console.log(title);

    //Itero sobre todos los elementos con esa clase y agrego su texto plano al array
    // let pokeNames = [];
    // $('.ent-name').each(function(i, el) {
    //   pokeNames.push($(this).text());
    // });
  } catch (exception) {
    throw new Exception(exception.layer, exception.message);
  }
  return;
};

const getAllShSwPokemons = async () => {
  try {
    /*Data Structure for each infocard:
        div .infocard
          |_  span .infocard-lg-img
            |_  a: href: pokémon link inside website
              |_  img .img-fixed .img-sprite: src: sprite link, alt
          |_  span .infocard-lg-data text-muted
            |_  small: HTML text: pokémon number
            |_  br
            |_  undefined tag
            |_  a .ent-name: href: pokémon link inside website, HTML Text: pokémon name
            |_  br
            |_  undefined
            |_  small
              |_  a .itype .grass: href: pokémon link inside website, HTML Text: Pokémon type
      */
    const response = await axios.get(
      'https://pokemondb.net/pokedex/game/sword-shield'
    );
    const $ = cheerio.load(response.data);
    const allPokemons = $('.infocard');

    let pokeList = [];

    for (let i = 0; i < allPokemons.length; i++) {
      const pokemonSprite =
        allPokemons[i].children[0].children[0].children[0].attribs['data-src'];
      const pokemonNumber =
        allPokemons[i].children[1].children[0].children[0].data;
      const pokemonName =
        allPokemons[i].children[1].children[3].children[0].data;
      let pokemonTypes = [];

      const typesCounter =
        allPokemons[i].children[1].children[6].children.length;

      let j = 0;
      do {
        pokemonTypes.push(
          allPokemons[i].children[1].children[6].children[j].children[0].data
        );
        j = j + 2;
      } while (j < typesCounter);

      pokeList.push({
        pokemonName,
        pokemonNumber,
        pokemonTypes,
        pokemonSprite
      });
    }
    return pokeList;
  } catch (exception) {
    throw new Exception(exception.layer, exception.message);
  }
};

module.exports = {
  getAllTypes,
  getAllShSwPokemons
};
