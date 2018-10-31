import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import watchBook from '../../services/watchBook';
import YouTube from 'react-youtube';


export default class WatchBook extends Component{

    state={
        bookData: ''
        }

    componentDidMount(){
        watchBook(this.props.match.params.id).then((resp)=>{
            console.log(resp);
            console.log(resp.data.data.singleBook)
            this.setState({
                bookData: resp.data.data.singleBook
            })
        }).catch((err)=>{
            console.log(err)
        })
    }

    YouTubeParser(url){
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : false;
    }

    loadBook(){
        if(!this.state.bookData){
            return(
                <div></div>
            )
        }else{
            const playerOptions = {
                height: '400',
                width: '800',
                playerVars:{
                    autoplay:1
                }
            };
            let url = this.YouTubeParser(this.state.bookData.url)

            return (
                <div>
                    <div>You are watching <strong>{this.state.bookData.name}</strong> </div>
                    <YouTube videoId={url} opts={playerOptions} />
                    <Link className='btn btn-info' to={`/book/${this.state.bookData._id}`}>
                        Go Back
                    </Link>
                </div>
            )
        }


    }

    render(){
        return(
            <div>
                {this.loadBook()}
            </div>
        )
    }
}