import Constants from "../helpers/constants";
import User from "../models/user";
import axios from "axios";

export default class LoginService{

    constants = new Constants();
    constructor(){
       
    }

    login(name, email, password){
        let user = new User(name, email, password);
        
        let json = JSON.stringify(user);
        let params = "json="+json;

        let url =  this.constants.getUrlApi();

        return axios.post(url+"/api/user/login",params,{headers: {'Content-Type':'application/x-www-form-urlencoded'}}); 
    }

}