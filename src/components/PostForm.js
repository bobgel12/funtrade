import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitPost, deletePost, listenToWishList } from '../actions/posts';

const styles = {
    input: {
        margin: "2px",
        padding: 0
    }, 
    card: {
        width: "100%",
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
        border: "hidden"
    }
}
class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            isbn: '',
            price: '',
            major: '',
            description: ''
        };  
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    onSubmit(e){
        e.preventDefault();
        if (this.state.title !== '' && this.state.price !== '' && this.state.major !== '' && this.state.description !== '' && this.state.isbn !== '') {
            this.props.submitPost(this.state);
            this.setState(
                {
                    title: '',
                    isbn: '',
                    price: '',
                    major: '',
                    description: ''
                }
            );
        }
    }

    render(){
        return(
            <div className = "card col-xs-12 col-md-6 col-lg-4 col-xl-3 ml-md-auto" style = { styles.card } >
                <form onSubmit={this.onSubmit}>
                <div class="form-group row" style={styles.input}>
                    <input onChange={this.onChange} value={this.state.title} type="text" class="form-control" name="title" aria-describedby="emailHelp" placeholder="Title"/>
                </div>
                <div class="form-group row" style={styles.input}>
                    <input onChange={this.onChange} value={this.state.description} type="text" class="form-control" name="description" aria-describedby="emailHelp" placeholder="Description"/>
                </div>
                <div class="form-group row" style={styles.input}>
                    <input onChange={this.onChange} value={this.state.isbn} type="number" class="form-control" name="isbn" aria-describedby="emailHelp" placeholder="ISBN"/>
                </div>
                <div class="form-group row" style={styles.input}>
                    <input onChange={this.onChange} value={this.state.price} type="number" class="form-control" name="price" aria-describedby="emailHelp" placeholder="Price"/>
                </div>
                <div class="form-group row" style={styles.input}>
                    <select onChange={this.onChange} value={this.state.major} class="custom-select my-1 mr-sm-2" name="major" > 
                        <option value="Engineering">Engineering</option>
                        <option value="Math">Math</option>
                        <option value="Business">Business</option>
                        <option value="Other">Other</option>
                    </select>
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
