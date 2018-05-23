import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitPost, deletePost, listenToWishList } from '../actions/posts';

class NavBar extends Component {

    render() {
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
                    <a style={{marginLeft: "2px"}} class="btn btn-outline-primary" href="#">Sign up</a>
                </div>
            </nav>
        )
    }
}




const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        auth: state.auth,
        hasReceivedData: state.posts.hasReceivedData,
    };
};

const mapDispatchToProps = {
    submitPost,
    deletePost,
    listenToWishList,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
