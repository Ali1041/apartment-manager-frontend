import axios from 'axios'

export class APIService{
    constructor(auth = false){
        this.baseURL = 'http://localhost:3000'
        this.headers = auth ? 
        {
            'Content-Type': 'application/json',
            'Accept': 'application/json'} : 
        {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('authToken')
        }
    }

    getHeaders(){
        return this.headers
    }
    setHeaders(headers){
        this.headers = headers
    }

    get(path, params={}){
        return axios.get(this.baseURL + path, {params: params, headers: this.headers})
    }
    post(path, data={}){
        return axios.post(this.baseURL + path, data, {headers: this.headers})
    }
    put(path, data={}){
        return axios.put(this.baseURL + path, data, {headers: this.headers})
    }
    delete(path) {
        return axios.delete(this.baseURL + path, {headers: this.headers})
    }
}