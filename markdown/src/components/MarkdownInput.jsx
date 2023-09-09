import React from 'react';
import styled from 'styled-components';

export default function MarkdownInput() {
    const InputContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

// Define StyledTextArea styled-component with CSS for the textarea
const StyledTextArea = styled.textarea`
  width: 100%;
  height: 300px;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;
  resize: vertical;
  box-sizing: border-box;
`
    return(
        <div>
    <InputContainer>
      <StyledTextArea placeholder="Type your Markdown here..." />
    </InputContainer>
        </div>
    )
}