import React from 'react';
import Post from './Post/Post'
import CommentSection from '../CommentSection/CommentSection'
import './PostContainer.css'

const postContainer = props => {
    return (
        <article className='Post'>
          <Post
              username={props.post.username}
              thumbnail={props.post.thumbnailUrl}
              image={props.post.imageUrl}
              likes={props.post.likes}
              comments={props.post.comments}
              onIncrementLike={props.onIncrementLike}/>
          <CommentSection
              onAddNewComment={props.onAddNewComment}
              username={props.post.username}
              comments={props.post.comments}/>
        </article>

    )
}

export default postContainer;
