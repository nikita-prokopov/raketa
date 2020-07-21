import styled from 'styled-components';
import { ReactComponent as Loupe } from '../../assets/loupe.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  height: 35px;
  width: 100%;
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  padding: 0 30px 0 10px;
  border: 1px solid black;

  &:focus::placeholder {
    color: transparent;
  }
`;

export const LoupeIcon = styled(Loupe)`
  position: absolute;
  right: 10px;
  pointer-events: none;
`;
