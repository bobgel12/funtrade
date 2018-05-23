import React, { Component } from 'react';

function Item(props){
    const { post, uid } = props
    const style = {
        width: "100%",
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
        border: "hidden"
    }
    return(
        <div className="card col-xs-12 col-md-6 col-lg-4 col-xl-3 ml-md-auto" style={style}>
            <img className="card-img-top" src="https://images.unsplash.com/photo-1498906538030-8da82e61e424?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9ba08ce39422463bcf2f2eeb0d420632&auto=format&fit=crop&w=1650&q=80" alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.description}</p>
                <a href="#" className="btn btn-primary">More</a>
            </div>
        </div>
    );
}


export default Item;
