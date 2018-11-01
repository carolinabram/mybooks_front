import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import Logout from '../components/Logout/Logout';
import Privado from '../components/Privado/Privado';
import checkToken from '../resolvers/checkToken';
import Books from '../components/Books/Books';
import Book from '../components/Book/Book';
import Profile from '../components/Profile/Profile';
import EditProfile from '../components/Profile/EditProfile';
import NewBook from '../components/NewBook/NewBook';
import DeleteBook from '../components/DeleteBook/DeleteBook';




class Routes extends Component {

    render(){

        const PrivateRoute = ({component: Component, ...rest}) =>(
            <Route {...rest} render={(props) => (
                checkToken() === true ? <Component {...props} /> : <Redirect to='/home' />
                )} />
        )

        return(
            <Router>
                <main>
                    <Navbar/>
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/logout' component={Logout} />
                    <PrivateRoute exact path='/privado' component={Privado} />
                    <PrivateRoute exact path='/books' component={Books} />
                    <PrivateRoute exact path='/book/:id' component={Book} />
                    <PrivateRoute exact path='/profile/:id' component={Profile} />
                    <PrivateRoute exact path='/profile/edit/:id' component={EditProfile} />
                    <PrivateRoute exact path='/new-book' component={NewBook} />
                    <PrivateRoute exact path='/book/delete/:id' component={DeleteBook} />
                </main>
            </Router>
        )
    }
}


export default Routes;