import configAxios from '../configAxios.js';
const booksApi = {
    getListBooks() {
        return configAxios.get('/books')
    }
};

export default booksApi;
