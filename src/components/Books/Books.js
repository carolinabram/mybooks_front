import React, { Component} from 'react';
import allBooks from '../../services/allBooks';
import CardBook from '../CardBook/CardBook';

import './Books.css';
import addRank from '../../services/addRank';


class Books extends Component{


    state={
        books: ''
    }


    componentDidMount(){
        allBooks().then((resp)=>{
            console.log(resp.data)
            this.setState({
                books: resp.data.data.allBooks
            })
            console.log(this.state.books)
        })
    }

    redirect = (id) => {
        this.props.history.push(`/book/${id}`);
    }

    getRankValue=(id, rank)=>{
        addRank({id,rank}).then((resp)=>{
            console.log(resp)
        })
    }

    renderBooks = () => {
        if(this.state.books !== ''){

          let books = this.state.books.map((book,index)=>{
                return(
                   <CardBook 
                        key={index}
                        book={book}
                        redirect={this.redirect}
                        getRank={this.getRankValue} />

                )
            }) 

            return books

        } else{
            return (
                <div><h1>Loading...</h1></div>
            )
        }
    }






    render(){
        return(
            <div className='row justify-content-center'>
                <div className='col-md-10 col-lg-8 text-center'>
                    <h3 className='books-title'>
                        All books
                    </h3>
                </div>
                {this.renderBooks()}
            </div>
        )
    }
}


export default Books;