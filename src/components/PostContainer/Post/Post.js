import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary'

const post = props => {
    return (
      <Aux>
        <header className='Post_Header'>
          <div className='Thumbnail'>
            <img src={props.thumbnail} alt='thumbnail'/>
          </div>
          <p><strong>{props.username}</strong></p>
        </header>
        <img src={props.image} alt='post img'/>
        <p className='Likes'><strong>{props.likes} likes</strong></p>
      </Aux>
    )
}

export default post;
