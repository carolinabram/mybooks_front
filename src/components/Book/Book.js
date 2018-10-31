import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import singleBook from '../../services/singleBook';
import './Book.css';

class Book extends Component{

    state={
        id: this.props.match.params.id,
        book: ''
    }

    componentDidMount(){
        singleBook(this.state.id).then((book)=>{
            this.setState({
                book: book.data.data.singleBook
            })
            console.log(this.state.book)
        }).catch((err)=>{
            console.log(err)
        })
    }

    loadBookData(){
        const {
            _id,
            year,
            name,
            image,
            description,
            author,
            pages,
            category,
            rating,
            rank
        } = this.state.book

        if(!this.state.book){
            return(
                <div><h1>Loading Book Info...</h1></div>
            )
        }else{
            return(
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img src={image} alt={name} className='img'/>
                        </div>
                        <div className='col book-info'>
                            <h1><strong>{name}</strong> | {year}</h1>
                            <span><small>Runtime: {pages}</small></span>
                            <h3>Description:</h3>
                            <h3>{description}</h3>
                        </div>
                        <div className='row justify-content-md-center'>
                            <Link className='btn btn-success boton-ver' to={`/watch/${_id}`} >WATCH</Link>
                            <Link className='btn btn-info boton-ver' to='/books' >Go Back</Link>
                            <Link className='btn btn-danger boton-ver' to={`/book/delete/${_id}`} >Delete</Link>
                        </div>
                    </div>
                </div>
            )
        }
    }


    render(){
        return(
            <div>
                {this.loadBookData()}
            </div>
        )
    }
}

export default Book;