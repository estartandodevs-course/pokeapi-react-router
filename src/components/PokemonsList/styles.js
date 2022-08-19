import styled from "styled-components";

export const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
  justify-content: center;
`;

export const Item = styled.li`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  justify-content: center;
  background-color: #2222;
  border-radius: 4px;
  width: 200px;
  padding: 5px;

  & > span {
    text-transform: uppercase;
  }

  & > a {
    border-radius: 4px;
    background-color: #fff;
    padding: 10px;

    color: #121212;
    text-decoration: none;
  }
`;
