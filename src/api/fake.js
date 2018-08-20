import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com';

// const GetJsonPlaceholder = payload => axios.post(`${url}/posts`, { name: payload });
const GetJsonPlaceholder = () => axios.get(`${url}/posts`);

export default GetJsonPlaceholder;
