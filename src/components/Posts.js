import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitPost, deletePost, listenToWishList } from '../actions/posts';

import Item from './Item';
import PostForm from './PostForm';

class Posts extends Component{
    componentDidMount(){
        if(this.props.auth.uid){
            this.props.listenToWishList(this.props.auth.uid);
        }
    }
    render(){
        let data = this.props.posts.data;
        return(
            <div className="container">
                <div className="row">
                {
                    this.props.auth.uid ?
                    <PostForm/>
                    : null
                }
                {
                    this.props.hasReceivedData ?
                        this.props.posts.data ?
                            this.props.posts.data.map((post)=>{
                                return <Item post={post} uid = {this.props.auth.uid} key = {post.date}/>
                            })
                        :
                        null
                    :
                    <h1>Loading...</h1>
                }
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
