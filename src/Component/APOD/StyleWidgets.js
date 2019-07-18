import styled from "styled-components";

const primary = `#282c34`;

export const Image = styled.img`
  max-width: 175px;
  border-radius: 100%;
`;

export const Button = styled.button`
  
  color: ${props => (props.primary ? primary : "#61dafb")};
  background: ${props => (props.primary ? "#61dafb" : primary)};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${primary};
  border-radius: 3px;
`;

export const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: ${primary};
`;