import styled, { css } from 'styled-components';

export const Post = styled.div`
  width: 100%;
  border: 1px solid black;
  padding: 10px;
`;

export const Item = styled.div`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Heading = styled.h3`
  font-weight: 500;
  font-size: 16px;
  margin: 0;
`;

const textStyles = css`
  font-size: 14px;
`;

export const Text = styled.span`
  ${textStyles};
`;

export const Paragraph = styled.p`
  ${textStyles};
  margin: 0;
`;
