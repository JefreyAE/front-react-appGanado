import Constants from "../helpers/constants";
import axios from "axios";
import Animal from "../models/animal";

export default class AnimalService{

    constants = new Constants();
    url = this.constants.getUrlApi();
    token = sessionStorage.getItem("token");

    index(){
        return axios.get(this.url+"/api/animals/index",{headers: {Authorization: this.token}});
    }

    indexAll(){
        return axios.get(this.url+"/api/animals/indexAll",{headers: {Authorization: this.token}});
    }

    update(animal_id,nickname,certification_name,registration_number,code,birth_weight,birth_date,sex,father_id,mother_id,race){

        let animal = new Animal(animal_id,nickname,certification_name,registration_number,code,birth_weight,birth_date,sex,father_id,mother_id,race);

        let json = JSON.stringify(animal);
        let params ="json="+json;

        return axios.put(this.url+"/api/animals/update",params,{headers: {Authorization: this.token}});
    }

    register(nickname,certification_name,registration_number,code,birth_weight,birth_date,sex,father_id,mother_id,race){

        let animal = new Animal("",nickname,certification_name,registration_number,code,birth_weight,birth_date,sex,father_id,mother_id,race);

        let json = JSON.stringify(animal);
        let params ="json="+json;

        return axios.post(this.url+"/api/animals/create",params,{headers: {Authorization: this.token}});
    }

    create(){
        return axios.post(this.url+"/api/animals/index",{},{headers: {Authorization: this.token}});
    }

    dead(){
        return axios.get(this.url+"/api/animals/dead",{headers: {Authorization: this.token}});
    }

    detail(id){
        return axios.get(this.url+"/api/animals/animal/detail/"+id,{headers: {Authorization: this.token}});
    }

    getImages(id){
        return axios.get(this.url+"/api/animals/images_names/"+id,{headers: {Authorization: this.token}});
    }

    uploadImage(formData){

        return axios({
            method: 'post',
            url: this.url+"/api/animals/upload",
            data: formData,
            headers: {'Content-Type': 'multipart/form-data', Authorization: this.token}
            });

       // return axios.post(url+"/api/animals/upload",formData,{headers: {Authorization: token, 'Content-Type': 'multipart/form-data' }});
    }

}