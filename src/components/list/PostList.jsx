import React from 'react';
import styled from 'styled-components';
import PostListItem from './PostListItem';

const Wrapper = styled.div`

`;

function PostList(props){
  const {posts, onClickItem } = props;

  return (
    <Wrapper>
      {posts.map((post, index) => {
        return (
          <PostListItem
            key={post.id}
            post={post}
            onClick={()=>{
              onClickItem(post);
            }}
          />
        );
      })}
    </Wrapper>
  )
}

export default PostList;