import styled from "styled-components";

export const CountryItem = styled.div`
  align-items: center;
  background: rgb(107, 107, 213);
  border-radius: 0.5rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  color: white;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  height: 8rem;
  justify-content: space-between;
  justify-content: space-around;
  margin-right: 1.5rem;
  margin-bottom: 2rem;
  padding: 0;
  width: 10rem;
  @media (max-width: 474px) {
    width: 8rem;
  }   
`;

export const CountryName = styled.p`
  padding: 0 0.75rem;
  text-align: center;
  :hover {
    transform: scale(1.15);
  }
`;
