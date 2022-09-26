import React, {useState} from 'react';
import styled from 'styled-components';
import { useNavigate, useParams} from 'react-router-dom';
import CommentList from '../list/CommentList';
import Button from '../ui/Button';
import TextInput from '../ui/TextInput';
import data from '../../data.json'

const Wrapper = styled.div`

`;

const Container = styled.div`

`;

const PostContainer = styled.div`

`;

const TitleText = styled.p`

`;

const ContentText = styled.p`

`;

const CommentLabel = styled.p`

`;

function PostViewPage(props){
  const navigate = useNavigate();
  const { postId } = useParams();

  const post = data.find((item) => {
    return item.id == postId;
  });

  const [comment, setComment] = useState("");

  return (
    <Wrapper>
      <Container>
        <Button 
          title="뒤로가기"
          onClick={()=>{
            navigate("/");
          }}
        />
        <PostContainer>
          <TitleText>{post.title}</TitleText>
          <ContentText>{post.content}</ContentText>
        </PostContainer>

        <CommentLabel>댓글</CommentLabel>
        <CommentList comments={post.comments}></CommentList>
        <TextInput
          height={20}
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
        <Button
          title="댓글 작성하기"
          onClick={() => {
            navigate("/");
          }}
        />
      </Container>
    </Wrapper>
  )

}

export default PostViewPage;