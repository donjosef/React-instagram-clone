import React, { Component } from 'react';
import posts from './dummy-data'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import './App.css';

class App extends Component {
  state = {
    posts: posts
  }

  addNewCommentHandler = (user, newComment) => {
    if(newComment.text) {
      const posts = this.state.posts.map(post => {
        if(post.username === user) {
          return {
            ...post,
            comments: post.comments.concat(newComment)
          }
        } else {
          return post;
        }
      });
      this.setState({ posts });
    }    
  }

  render() {
    let postContainers = this.state.posts.map(post => (
      <PostContainer key={post.username} post={post} onAddNewComment={this.addNewCommentHandler}/>
    ));
    return (
      <div className="App">
        <SearchBar />
        {postContainers}
      </div>
    );
  }
}

export default App;
