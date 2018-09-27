import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginWithGoogle, logoutUser, loginWithFaceBook } from '../actions/auth';
import { search, filter } from '../actions/filter';
// import C from '../constants';


class NavBar extends Component {
    constructor(props){
        super(props)
        
    }
    render() {
        let { auth } = this.props;
        console.log(auth)
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">FunTrade</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search"/>
                    </form>
                    {
                        auth.uid ?
                            <button onClick={this.props.logoutUser} style={{marginLeft: "2px"}} class="btn btn-outline-primary">Sign out</button>
                        :
                            <div class="dropdown">
                                <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Log in
                                </button>
                                <div class="dropdown-menu" aria-labelledby="Login">
                                    <button onClick={this.props.loginWithGoogle} class="dropdown-item" href="#">Google</button>
                                    <button onClick={this.props.loginWithFaceBook} class="dropdown-item" href="#">Facebook</button>
                                    <button  class="dropdown-item" href="#">Username</button>
                                </div>
                            </div>
                    }
                </div>
            </nav>
        )
    }
}




const mapStateToProps = (state) => {
    return { auth: state.auth };
}

const mapDispatchToProps = {
    loginWithGoogle,
    logoutUser,
    search,
    filter,
    loginWithFaceBook
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
