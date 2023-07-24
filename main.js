const apiManager = new APIManager();
const renderer = new Renderer();


const users = apiManager.getUsers();
const quote = apiManager.getQuote();
const pokemon = apiManager.getPokemon();
const meatIpsum = apiManager.getMeatIpsum();

//all other here...
renderer.render(users, quote, pokemon, meatIpsum);


$(".buttons").on("click", function() {
    // let newData = apiManager.fetch();
    let newUsers = apiManager.getUsers();
    let newQuote = apiManager.getQuote();
    let newPokemon = apiManager.getPokemon();
    let newMeatIpsum = apiManager.getMeatIpsum();
    renderer.render(newUsers, newQuote, newPokemon, newMeatIpsum); 
    //after it will be render(data) - render all data

})