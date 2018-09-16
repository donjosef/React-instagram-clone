import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './CommentSection.css';

class CommentSection extends Component {
    state = {
      commentText: '',
    }

    changeCommentHandler = (e) => {
      this.setState({
        commentText: e.target.value
      })
    }

    render() {
      const {commentText} = this.state;
      const comments = this.props.comments.map((comment, idx) => (
          <div className='Comment' key={comment.username + idx }>
            <p><strong>{comment.username}</strong> {comment.text}</p>
            <button onClick={() => this.props.onDeleteComment(this.props.username, idx)}>Delete</button>
          </div>
      ));

       return (
         <section className='Comment_Section'>
           {comments}
           <div className='AddComment_Section'>
               <input
                   className='Add_Comment'
                   value={this.state.commentText}
                   onChange={this.changeCommentHandler}
                   placeholder='Add a comment'/>
               <button
                   className='Add_Btn'
                   onClick={() => this.props.onAddNewComment(this.props.username, {username:'Jos', text: commentText})}
               >Add Comment
               </button>
            </div>
         </section>
       )
    }
}

CommentSection.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentSection;
