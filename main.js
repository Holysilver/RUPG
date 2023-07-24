const apiManager = new APIManager();
const renderer = new Renderer();


const users = apiManager.getUsers();
//all other here...
renderer.render(users);


$(".buttons").on("click", function() {
    // let newData = apiManager.fetch();
    let newUsers = apiManager.getUsers();
    renderer.render(newUsers); //after it will be render(data) - render all data

})