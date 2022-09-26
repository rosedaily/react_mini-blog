import React from 'react';
import styled from 'styled-components';

const StyedButton = styled.button`
  padding : 8px 16px;
  font-size : 16px;
  border-width : 1px;
  border-radius : 8px;
  cusor : pointer;
`;

function Button(props){
  const { title, onClick } = props;

  return <StyedButton onClick={onClick}>{title || "button"}</StyedButton>;
}

export default Button;