import React , { Component } from 'react';
import Rate from 'rc-rate';
import '../Books/Books.css';
import calculateRank from './calculateRank';


class CardBook extends Component{

    state={
        book: this.props.book,
        rank: calculateRank(this.props.book.rank)
    }

    render(){
        return(
            <div className='card' style={{ width: '14rem' }}>
                        <h5 className='card-title'>
                            {this.state.book.name}
                        </h5>
                <img src={this.state.book.image} className='image-small' alt="Poster" onClick={() => this.props.redirect(this.state.book._id)}/>
                        <div className='card-body'>
                            <Rate defaultValue={parseFloat(this.state.rank)}
                            allowHalf
                            onChange={(rank) => this.props.getRank(this.state.book_id,rank)}/>
                            <p>{this.state.rank}</p>
                        </div>
                    </div>
        )
    }
}

export default CardBook;