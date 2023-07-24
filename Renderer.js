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
    

    render(usersPromise){
        usersPromise
            .then((users) => {
                this.renderUserAndFriends(users);
            })
    }
    
}