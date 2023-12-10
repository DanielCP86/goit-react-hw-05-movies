import styled from 'styled-components';

export const CastContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: LightSkyBlue;
  margin: 20px 0px 30px;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  padding: 0;
`;

export const CastItem = styled.li`
  background: white;
  width: 100%;
  max-width: 200px;
  margin: 10px;
  border-radius: 5px;
  display: inline-block;
  text-decoration: none;
  color: black;
`;

export const CastImage = styled.img`
  padding: 0px;
  margin: 0px;
  height: 260px;
  width: 100%;
  display: block;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const CastDescr = styled.div`
  padding: 5px;
  margin: 0px;
  font-size: 10px;
  color: black;
`;

export const CastName = styled.h3`
  margin: 0px;
`;

export const CastCharacter = styled.p`
  margin: 0px;
`;
