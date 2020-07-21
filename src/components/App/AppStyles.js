import styled from 'styled-components';

export const App = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 300px;
`;

export const ScrolledContainer = styled.div`
  height: 255px;
  width: 100%;
  overflow-y: scroll;

  border: 1px solid black;
  border-top: none;
`;
