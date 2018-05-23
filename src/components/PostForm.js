import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitPost, deletePost, listenToWishList } from '../actions/posts';

const style = {
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    border: "hidden",

}
const styles = {
    input: {
        margin: "2px",
        padding: 0
    }
}
class PostForm extends Component {
    render(){
        return(
            <div className = "card col-xs-12 col-md-6 col-lg-4 col-xl-3 ml-md-auto" style = { style } >
                <form>
                <div class="form-group row" style={styles.input}>
                    <input type="text" class="form-control" id="title" aria-describedby="emailHelp" placeholder="Title"/>
                </div>
                <div class="form-group row" style={styles.input}>
                        <input type="text" class="form-control" id="description" aria-describedby="emailHelp" placeholder="Description"/>
                </div>
                <div class="form-group row" style={styles.input}>
                    <input type="text" class="form-control" id="major" aria-describedby="emailHelp" placeholder="Major"/>
                </div>
                <div class="form-group row" style={styles.input}>
                    <input type="number" class="form-control" id="isbn" aria-describedby="emailHelp" placeholder="ISBN"/>
                </div>
                <div class="form-group row" style={styles.input}>
                    <input type="number" class="form-control" id="price" aria-describedby="emailHelp" placeholder="Price"/>
                </div>
                <button style={{marginTop: "5px"}} type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
