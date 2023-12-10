import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;

export const ListItem = styled.li`
  background: white;
  width: 100%;
  max-width: 200px;
  margin: 10px;
  border-radius: 5px;
  display: inline-block;
  text-decoration: none;
  color: black;
  transition-duration: 300ms;
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }
`;

export const ItemLink = styled(Link)`
  text-decoration: none;
`;

export const Img = styled.img`
  padding: 0px;
  margin: 0px;
  height: 250px;
  width: 100%;
  display: block;
`;

export const ItemTitle = styled.div`
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
  margin: 0px;
  font-size: 10px;
`;
