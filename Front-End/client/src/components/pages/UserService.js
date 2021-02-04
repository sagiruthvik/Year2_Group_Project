import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/api/';
class UserService{
    
    getFood(){
        return axios.get(USERS_REST_API_URL+'/browse');
    }
    createFood(food){
        return axios.post(USERS_REST_API_URL+'/food_add',food);
    }
}

export default new UserService();