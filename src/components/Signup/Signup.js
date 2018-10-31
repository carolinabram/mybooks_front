import React , { Component } from 'react';
import signup from '../../services/signup'
;
import './Signup.css';

class Signup extends Component{


    state={
        name:'',
        lastName:'',
        email:'',
        password:'',
        check_password:'',
        avatar: 'avatar.jpg'
    }

    validatePassword(password,passwordToVerify){
        if(password === passwordToVerify){
            return true;
        }else{
            alert('Passwords Dont Match Loco!')
        }
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.validatePassword(this.state.password, this.state.check_password)){
            signup(this.state).then((response)=>{
                console.log(response.data)
                this.props.history.push('/login')
            }).catch((err)=>{
                console.log(err);
                alert('Something went wrong Bro :(')
            })
        }
    }

    onInputHandler = (event) =>{
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]:value
        })
        console.log(this.state)
    }




    render(){
        return(
            <div className='container'>
                <div className='row justify-content-center centered-form'>
                    <div className='col-xs-12 col-sm-8 col-md-10 col-sm-offset-2 col-md-offset-4'>
                        <div className='panel panel-default container'>
                            <div className='panel-heading'>
                                <h3 className='panel-title'>Please Sign up for NopalFlix</h3>
                            </div>
                            <div className='panel-body'>
                                <form onSubmit={this.onSubmitForm} >
                                    <div className='row'>
                                        <div className='col-xs-6 col-sm-6 col-md-6'>
                                            <div className='form-group'>
                                                <input type="text"
                                                    name='name'
                                                    className='form-control input-sm'
                                                    placeholder='First Name'
                                                    value={this.state.name}
                                                    onChange={this.onInputHandler}
                                                    />
                                            </div>
                                        </div>
                                        <div className='col-xs-6 col-sm-6 col-md-6'>
                                            <div className='form-group'>
                                                <input type="text"
                                                    name='lastName'
                                                    className='form-control input-sm'
                                                    placeholder='Last Name'
                                                    value={this.state.lastName}
                                                    onChange={this.onInputHandler}
                                                    />
                                            </div>
                                        </div>
                                        <div className='col-xs-6 col-sm-6 col-md-6'>
                                            <div className='form-group'>
                                                <input type="text"
                                                    name='email'
                                                    className='form-control input-sm'
                                                    placeholder='Email'
                                                    value={this.state.email}
                                                    onChange={this.onInputHandler}
                                                    />
                                            </div>
                                        </div>
                                        <div className='col-xs-6 col-sm-6 col-md-6'>
                                            <div className='form-group'>
                                                <input type="password"
                                                    name='password'
                                                    className='form-control input-sm'
                                                    placeholder='Password'
                                                    value={this.state.password}
                                                    onChange={this.onInputHandler}
                                                    />
                                            </div>
                                        </div>
                                        <div className='col-xs-6 col-sm-6 col-md-6'>
                                            <div className='form-group'>
                                                <input type="password"
                                                    name='check_password'
                                                    className='form-control input-sm'
                                                    placeholder='Password'
                                                    value={this.state.check_password}
                                                    onChange={this.onInputHandler}
                                                    />
                                            </div>
                                        </div>
                                    </div>
                                    <input type="submit" value='Register' className='btn btn-success btn-block'/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Signup;