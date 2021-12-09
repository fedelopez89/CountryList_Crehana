import styled from "styled-components";

export const Header = styled.h1`
  color: white;
  display: flex;
  font-size: 2rem;
  font-family: 'Raleway', sans-serif;
  justify-content: center;
  line-height: 2rem;
  margin: 3rem 0;
  text-align: center;
  text-decoration: underline;
  text-transform: uppercase;
  @media (max-width: 474px) {
    font-size: 1.5rem;
  }     
`;
