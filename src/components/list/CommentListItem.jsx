import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  
`;

const ContentText = styled.p`

`;

function CommentListItem(props){
  const { comment } = props;

  return (
    <Wrapper>
      <ContentText>{comment.content}</ContentText>
    </Wrapper>
  )
}

export default CommentListItem;