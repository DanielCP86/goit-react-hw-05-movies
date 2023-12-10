import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BackButton = styled.button`
  border: none;
  background-color: transparent;
  margin: 15px 0px 0px 0px;
  padding: 0;
  font-weight: 700;
  cursor: pointer;
`;

export const MovieContainer = styled.div`
  display: flex;
  padding: 30px;
  background-color: LightSkyBlue;
  margin: 20px 0px 0px 0px;
`;

export const MovieImage = styled.img`
  width: 300px;
`;

export const MovieInfo = styled.div`
  padding-left: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const MovieTitle = styled.h2`
  margin-left: 0;
`;

export const AdditionalInfo = styled.h3`
  margin-left: 0px;
  margin-bottom: 0;
`;

export const InfList = styled.ul`
  list-style-type: none;
  text-decoration: none;
  margin-left: 0;
  margin-top: 15px;
  padding-left: 10px;
`;

export const InfLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  text-decoration: none;
  font-weight: 600;
  &.active {
    color: blue;
    font-weight: 700;
`;
