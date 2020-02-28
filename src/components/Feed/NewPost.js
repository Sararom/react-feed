import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
//import { Helmet } from "react-helmet";

const initState = {
    title: "",
    text: "",
    image: "",

}

class Form extends Component {

    constructor(props) {
        super(props);
        if (localStorage.getItem("token")) {
            //this.props.history.push("/newPost");
        }

        this.state = {
            ...initState,
            token: localStorage.getItem("token"),
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        })
    }

    submitHandler = event => {
        event.preventDefault();

        const newPost = {
            title: this.state.title,
            text: this.state.text,
            image: this.state.image,
        }

        let config = {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json',
                authorization: `Bearer ${this.state.token}`
            },
            body: JSON.stringify(newPost),
        };

        fetch('https://reactcourseapi.herokuapp.com/post', config)
            .then(res => {
                if (res.ok) {
                    res.json()
                        .then(
                            this.props.history.push("/")
                        )
                }else{
                    console.log(res);
                    
                }
            })
    }

    render() {

        return (

            <div className="full-centered">
                <div className="jumbotron">
                    <h1 className="display-3">New Post</h1>
                    <form onSubmit={this.submitHandler}>
                        <fieldset>
                            <div className="form-group">
                                <label className="col-sm-2 col-form-label">Titulo</label>
                                <div className="col-sm-10">
                                    <input className="form-control" onChange={this.changeHandler} id="title" placeholder="Title" value={this.state.title} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 col-form-label">Description</label>
                                <div className="col-sm-10">
                                    <input className="form-control" onChange={this.changeHandler} id="text" placeholder="Text" value={this.state.text} />
                                </div>
                            </div>
                            <div className="form-group ">
                                <label className="col-sm-2 col-form-label">Meme</label>
                                <div className="col-sm-10">
                                    <input className="form-control" onChange={this.changeHandler} id="image" placeholder="Link" value={this.state.image} />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Post!</button>
                        </fieldset>
                    </form>
                </div>
            </div>

        )
    }

}

export default withRouter(Form);