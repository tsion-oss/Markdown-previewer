import React from "react";
import styled from 'styled-components'

const OutputContainer = styled.div`
width: 100%;
max-width: 600px;
margin: 0 auto;
padding: 20px;
background-color: #f7f7f7; /* Example background color */
border: 1px solid #ccc; /* Example border */
border-radius: 4px; /* Example border radius */
`;

export default function MarkdownOutput({ markdown }) {


    return(
        <OutputContainer>
        <div dangerouslySetInnerHTML={{ __html: markdown }} />
      </OutputContainer>
    )
}