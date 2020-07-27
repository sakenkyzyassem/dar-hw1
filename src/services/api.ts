import axios from 'axios';
import { Post } from '../types/interfaces'

export const getPosts = () => {

    return axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.data);
}

export const getPost = (id: number) => {

    return axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(res => res.data);
}