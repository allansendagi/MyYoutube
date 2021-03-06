import React from 'react';
import './comment.styles.scss';
import {Button, Image} from "semantic-ui-react";
import {Rating} from '../../../components/rating/rating.component';

export function Comment(props) {
  return (
    <div className='comment'>
      <Image className='user-image' src='http://via.placeholder.com/48x48' circular />
      <div>
        <div className='user-name'>User name</div>
        <span>Comment text</span>
        <div className='comment-actions'>
          <Rating likeCount={1}/> <Button size='mini' compact>REPLY</Button>
        </div>
      </div>
    </div>
  );
}