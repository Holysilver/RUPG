class APIManager {
    constructor() {
        this.urlUser = "https://randomuser.me/api/?results=7&inc=name,location,picture"
    }
       
    getUsers() {
        return $.get(this.urlUser)
    }


    


}