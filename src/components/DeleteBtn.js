import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class DeleteBtn extends Component {
    deletehandler = () => {

        const config = {
            method: "DELETE",
            headers: {
                'Content-type': 'Application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({_id:this.props.id})
        }

        console.log(`Holaaaa ${this.props.id}`);

        fetch('https://reactcourseapi.herokuapp.com/post', config)
            .then(res => {
                
            })

    }

    render() {
        return (
            <button onClick={this.deletehandler}type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        );
    }
}

export default withRouter(DeleteBtn);