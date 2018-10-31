import axios from 'axios';
import getToken from '../resolvers/getToken';
import constantes from '../const';


export default(data)=>{
    let newBook = `{
        name:"${data.name}",
        author:"${data.author}",
        year:"${data.year}",
        image:"${data.image}",
        rating:"${data.rating}",
        category:"${data.category}",
        description:"${data.description}",
    }`

    return axios({
        url: constantes.url+'graphql',
        method:'post',
        data:{
            query:`
                mutation{
                    addBook(data:${newBook}){
                        _id,
                        name
                    }
                }
            `
        },headers:{'Authorization' : 'JWT ' + getToken()}
    })
}