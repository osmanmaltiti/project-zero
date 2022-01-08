class Auth{
    constructor(){
        this.isAuthenticated = false;
    }
    logIn(callback){
        this.isAuthenticated = true;
        callback();
    }
    signOut(callback){
        this.isAuthenticated = false;
        callback();
    }
    isAuthenticated(){
        return this.isAuthenticated;
    }
}
export default new Auth();