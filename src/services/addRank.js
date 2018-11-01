import axios from 'axios';
import getToken from '../resolvers/getToken';
import constantes from '../const';


export default (data) => {
    let {id,rank} = data;
    let newRank = `{rank:${rank}}`;
    console.log("<<<<<<<<<<<<<< "+id)
    return axios({
        url: constantes.url + 'graphql',
        method: 'post',
        data: {
            query: `
                mutation{
                    addRank(id:"${id}", data:${newRank}){
                        _id,
                        name,
                        rank
                    }
                }
            `
        }, headers: { 'Authorization': 'JWT ' + getToken() }
    })
}