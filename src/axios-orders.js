import axios from "axios"

const instance = axios.create({
    baseURL:'https://my-burger-app-445e9.firebaseio.com/'
})

export default instance;