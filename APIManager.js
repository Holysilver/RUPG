class APIManager {
    constructor() {
        this.urlUser = "https://randomuser.me/api/?results=7&inc=name,location,picture";
        this.urlQuote = "https://api.kanye.rest/";
        this.urlPokemon = "https://pokeapi.co/api/v2/pokemon/";
        this.urlMeatIpsum = "https://baconipsum.com/api/?type=meat-and-filler&paras=3";
    }
       
    getUsers() {
        return $.get(this.urlUser);
    }

    getQuote() {
        return $.get(this.urlQuote);
    }

    getPokemon() {
        const pokemonId = Math.floor(Math.random() * 1000);
        return $.get(this.urlPokemon + pokemonId);
    }

    getMeatIpsum() {
        return $.get(this.urlMeatIpsum);
    }

    


}