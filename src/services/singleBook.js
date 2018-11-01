import axios from 'axios';
import getToken from '../resolvers/getToken';
import constantes from '../const';


export default (id) => {
    console.log('<<<<singleBook '+ id)
    return axios({
        url:constantes.url+'graphql',
        method:'post',
        data:{
            query:`
                query{
                    singleBook(id:"${id}"){
                        _id,
                        name,
                        image,
                        description,
                        author,
                        pages,
                        category{
                            name
                        },
                        rating{
                            name
                        },
                        rank,
                        year
                    }
                }
            `
        }, headers:{'Authorization': 'JWT ' + getToken()}
    })
}