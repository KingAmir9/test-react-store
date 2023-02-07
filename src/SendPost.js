import React, { Component } from 'react';
import axios from 'axios';

class SendPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            
        }
    }

    cahnghHandeler = (event)=>{
        this.setState({
            title: event.target.value,
        })
    }

    sendHandeler = ()=>{
        const {title,body} = this.state;
        const data = {
            title: title,
            body: body,
        }
        axios.post("https://jsonplaceholder.typicode.com/posts",data)
        .then(Response=> console.log(Response.status))
    }

    render() {
        const{title,body} = this.state;
        return (
            <div>
                <input type='text' value={title} onChange={this.cahnghHandeler} />
                <input type='text' value={body} onChange={this.cahnghHandeler} />
                <button onClick={this.sendHandeler}>send post</button>
            </div>
        );
    }
}

export default SendPost;