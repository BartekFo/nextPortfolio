import styled from 'styled-components';

export const ListWrapper = styled.ul`
  padding: 0 20px 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 30px 30px;
  grid-template-areas: '. . . . .';
  align-items: center;
  justify-items: center;
  list-style: none;
  background-color: rgba(0, 0, 0, 0.05);
  height: 40px;
  border-radius: 28px;
`;

export const A = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  font-style: italic;
`;

export const ListItem = styled.li`
  height: 100%;
  display: flex;
  width: 120%;
  justify-content: center;
  align-items: center;
`;
