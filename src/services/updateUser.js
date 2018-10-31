import axios from 'axios';
import constantes from '../const';
import getToken from '../resolvers/getToken';

export default (id,data) => {
    let {name, lastName, email, phone } = data;

    let DataQuery = `{name:"${name}",phone:"${phone}",lastName:"${lastName}",email:"${email}"}`

    return axios({
        url: constantes.url+'graphql',
        method: 'post',
        data:{
            query:`
                mutation{
                    updateUser(id:"${id}",data:${DataQuery}){
                        _id,
                        name,
                        email,
                        phone
                    }
                }
            `
        },headers: { 'Authorization' : 'JWT ' +getToken()}
    })
}