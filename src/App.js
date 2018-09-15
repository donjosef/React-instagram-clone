import React, { Component } from 'react';
import posts from './dummy-data'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import './App.css';

class App extends Component {
  state = {
    posts: posts,
    filteredPosts: []
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

  deleteCommentHandler = (user, commentIndex) => {
    const posts = this.state.posts.map(post => {
      if(post.username === user) {
        return {
          ...post,
          comments: post.comments.filter((comment, i) => i !== commentIndex)
        }
      } else {
        return post;
      }
    });
    this.setState({ posts });
  }

  incrementLikeHandler = (user) => {
      const posts = this.state.posts.map(post => {
        if(post.username === user) {
          return {
            ...post,
            likes: Number(post.likes) + 1
          }
        } else {
          return post
        }
      });

      this.setState({ posts })
  }

  filterPostsHandler = (query) => {
      this.setState({
        filteredPosts: this.state.posts.filter(post => post.username.includes(query))
      });
  }

  render() {
    let posts = this.state.posts;
    if(this.state.filteredPosts.length > 0) {
      posts = this.state.filteredPosts;
    }
    let postContainers = posts.map(post => (
      <PostContainer
          key={post.username}
          post={post}
          onAddNewComment={this.addNewCommentHandler}
          onDeleteComment={this.deleteCommentHandler}
          onIncrementLike={this.incrementLikeHandler}/>
    ));
    return (
      <div className="App">
        <SearchBar onFilterPosts={this.filterPostsHandler}/>
        {postContainers}
      </div>
    );
  }
}

export default App;
