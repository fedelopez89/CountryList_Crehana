import styled from "styled-components";

export const SearchContainer = styled.div`
  background-color: #6f4ef6;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  color: white;
  display: flex;
  height: auto;
  justify-content: space-around;
  max-width: 80%;
  margin: 3rem auto;
  padding: 1rem 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 70%;
  }
  @media (max-width: 474px) {
    padding: 1rem 1rem;
  }  
  `;
  
  export const InputSearch = styled.form`
  display: flex;
  margin: 0.5rem 0;
  width: 40%;
  @media (max-width: 768px) {
    width: 75%;
  }  
  & input {
    width: 100%;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.25rem;
    padding: 0 0.5rem;
    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 1rem;
      height: 1.5rem;
    }
  }
  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
    background: white;
    border-color: grey;
  }
`;

export const FilterSearch = styled.div`
  display: flex;
  flex-direction: flex-start;
  margin: 0.5rem 0;
  & label {
    font-size: 1rem;
    font-weight: 500;
    width: 10rem;
    margin: 0 1rem;
    @media (max-width: 768px) {
      margin: 0;
      margin-right: 1rem;
    }
  }
  & select {
    width: 10rem;
    margin-top: 0.2rem;
    padding: 0.2rem 0;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
    border: 1px solid #ccc;
    @media (max-width: 474px) {
      width: 90%;
    }      
  }
`;

export const CountryList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding-left: 0;
  max-width: 85%;
  margin: 0 auto;
`;
