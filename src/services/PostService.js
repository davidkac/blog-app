import axios from 'axios';

class PostService{
    constructor() {
        this.httpClient = axios.create({
            baseURL: 'http://localhost:3003/api'
        })
    }

    async getAll() {
        try {
            const {data} = await this.client.get('posts');

            return data;
        } catch (error) {
            console.log(error);
        }

        return [];
    }

    async get(id) {
        try {
            const {data} = await this.client.get(`posts/${id}`);

            return data;
        } catch(error) {
            console.log(error);
        }

        return [];
    }

    async add(newPost) {
        try {
            const {data} = await this.client.post('posts',newPost)

            return data;
        } catch (error) {
            console.log(error);
        }

        return null;
    }


}

export default new PostService(); 
