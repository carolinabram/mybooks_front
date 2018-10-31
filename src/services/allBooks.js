import axios from 'axios';
import getToken from '../resolvers/getToken';
import constante from '../const';

export default () => {

    return axios({
        url:constante.url+'graphql',
        method: 'post',
        data:{
            query: `
                query{
                    allBooks{
                        _id,
                        name,
                        year,
                        author,
                        rank,
                        description,
                        image
                    }
                }
            `
        },headers:{'Authorization': 'JWT ' +getToken()}
    })
}

