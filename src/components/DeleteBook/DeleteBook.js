import React, {Component} from 'react';
import deleteBook from '../../services/deleteBook';

class DeleteBook extends Component{

    state = {
        bookData:''
    }
    componentDidMount(){

    }

    deleteBook = () => {
        deleteBook(this.props.match.params.id).then((resp) => {
            this.props.history.push('/books')
        }).catch((err) => {
            console.log(err)
        })
    }

    goBack = () => this.props.history.push('/book/'+this.props.match.params.id);
    renderOptions(){
        const {name, image} = this.state.bookData
        if(!this.state.bookData){
            return(
                <div></div>
            )
        }else{
            return(
                <div className='jumbotron'>
                    Are you sure you want to delete the book <strong>{name}</strong>
                    <button className='btn btn-danger' onClick={this.deleteBook}>Yes</button>
                    <button className='btn btn-info' onClick={this.goBack}>No</button>
                    <img src={image} alt="image-poster"/>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderOptions()}
            </div>
        )
    }
}

export default DeleteBook;