import React from 'react';
import styled from 'styled-components';
import CommentListItem from './CommentListItem';

const Wrapper = styled.div`

`;

function CommentList(props){
  const { comments } = props;

  return (
    <Wrapper>
      {comments.map((comment, index) =>{
        return (
          <CommentListItem key={comment.id} comment={comment}/>
        );
      })}
    </Wrapper>
  )
}

export default CommentList;