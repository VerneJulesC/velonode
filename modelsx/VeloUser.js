class VeloUser {
    constructor(user_id, username, password){
        this.user_id = user_id;
        this.username = username;
        this.password = password;
    }
    user_id;
    username;
    password;
    rolenames = [];
    rowclass = '';
    filtered = false;
}