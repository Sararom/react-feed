import React, {Component} from 'react';
import Post from './Post';
import {withRouter} from "react-router-dom";
import {Helmet} from "react-helmet";

class Profile extends Component {
  constructor(props){
    super(props);

    this.state = {
      posts: [],
      user:"",
      token: localStorage.getItem("token")
  }}

  likeHandler = index => {
    let postsAux = [...this.state.posts];
	
	const config = {
		method: "PUT",
		headers: {
			'Content-type': 'Application/json',
			authorization: `Bearer ${this.state.token}`
		},
		body: JSON.stringify(postsAux[index])
	}

	fetch('https://reactcourseapi.herokuapp.com/post/like', config)
    .then(res => {this.fetchData()})
    
  }

  fetchData = () => {
	let config = {
		method: "GET",
		headers: {
			'Content-type': 'Application/json',
			authorization: `Bearer ${this.state.token}`
		}
	}

	fetch('https://reactcourseapi.herokuapp.com/post/', config)
		.then(res => res.json())
		.then(data => {
            console.log(`aaaaah ${this.state.user}`);
            let myPosts = data.filteredPosts.filter(
                element =>{
                    return element.user === localStorage.getItem('user');
                }
            );
            console.log(myPosts);
            
			this.setState({
				posts: myPosts  
			})

		})
  }

  componentDidMount(){
    this.fetchData();    
    }
  
  render(){
    const postsComponents = this.state.posts.map((post, index) => {
		
      return (<Post
        key = {post._id}
        name = {post.user}
		likes = {post.likes}
        title = {post.title}
        text = {post.text}
        image = {post.image}
        user = {post.user}
        onClick = {()=> this.likeHandler(index)}
        id={post._id}
        myPost = {true}
        />);
      
    });
  
    return (
      <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className = "container">
        <h1 className="display-3">Profile</h1>
        <h2>My Posts</h2>
  
        <div className="posts">
          {postsComponents}
        </div>
      </div>
      </>
    );
  }
}

export default withRouter(Profile);
