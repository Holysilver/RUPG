class Renderer {
    constructor(){};

    renderUserAndFriends(users) {
        let source = $('#user-template').html();
        let template = Handlebars.compile(source);
        let newUser = template(users.results[0]);
        let container = $('.user-container');
        container.empty();
        container.append(newUser);

        users.results.shift();
        source = $('#friends-template').html();
        template = Handlebars.compile(source);
        newUser = template({friends: users.results});
        container = $('.friends-container');
        container.empty();
        container.append(newUser);
    }

    renderQuote(quote) {
        let source = $('#quote-template').html();
        let template = Handlebars.compile(source);
        let newQuote = template(quote);
        let container = $('.quote-container');
        container.empty();
        container.append(newQuote);
    }

    renderPokemon(pokemon) {
        let source = $('#pokemon-template').html();
        let template = Handlebars.compile(source);
        let newPokemon = template(pokemon);
        let container = $('.pokemon-container');
        container.empty();
        container.append(newPokemon);
    }


    renderMeatIpsuim(meatIpsum) {
        let source = $('#meat-template').html();
        let template = Handlebars.compile(source);
        let newMeatIpsum = template({meatIpsum});
        let container = $('.meat-container');
        container.empty();
        container.append(newMeatIpsum);
    }
    

    render(usersPromise, quotePromise, pokePromise, meatPromise){
        usersPromise
            .then((users) => {
                this.renderUserAndFriends(users);
            })
        quotePromise
            .then((quote) => {
                this.renderQuote(quote);
            })
        pokePromise
            .then((pokemon) => {
                this.renderPokemon(pokemon);
            })
        meatPromise
            .then((meatIpsum) => {
                this.renderMeatIpsuim(meatIpsum)
            })
    }
    
}