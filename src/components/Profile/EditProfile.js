import React, { Component } from 'react';
import singleUser from '../../services/singleUser';
import updateUser from '../../services/updateUser';

class EditProfile extends Component{

    state={
        userData: '',
        name: '',
        lastName: '',
        phone: '',
        email: '',

    }

    componentDidMount(){
        singleUser(this.props.match.params.id).then((resp)=>{
            this.setState({
                userData: resp.data.data.singleUser
            })
        }).catch((err)=>{
            console.log(err);
        })
    }

    onChangeInput = (e) => {
        let name = e.target.name
        let value = e.target.value

        this.setState({
            [name]:value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        updateUser(this.props.match.params.id, this.state).then((resp)=>{
            console.log(resp.data.data)
            this.props.history.push(`/profile/${this.props.match.params.id}`);
        })
    }

    chargeData(){
        if(this.state.userData === ''){
            return (
                <div>Loading</div>
            )
        }else{
            return(
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                            name='name'
                            value={this.state.userData.name}
                            onChange={this.onChangeInput}
                            placeholder={this.state.userData.name}
                            />
                        <input type="text"
                            name='lastName'
                            value={this.state.lastName}
                            onChange={this.onChangeInput}
                            placeholder={this.state.userData.lastName}
                            />
                        <input type="text"
                            name='email'
                            value={this.state.email}
                            onChange={this.onChangeInput}
                            placeholder={this.state.userData.email}
                            />
                        <input type="text"
                            name='phone'
                            value={this.state.phone}
                            onChange={this.onChangeInput}
                            placeholder={this.state.userData.phone}
                            />
                            <button type='submit' className='btn btn-info'>Update</button>
                    </form>
                </div>
            )
        }
    }


    render(){
        return(
            <div>
                Edit profile
                {this.chargeData()}
            </div>
        )
    }
}


export default EditProfile;