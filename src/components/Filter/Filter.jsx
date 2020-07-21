import React from 'react';
import { Input, Container, LoupeIcon } from './FilterStyles';

const Filter = ({ value, onChange, className }) => {
  return (
    <Container className={className}>
      <Input placeholder='Фильтр' value={value} onChange={onChange} />
      <LoupeIcon />
    </Container>
  );
};

export default Filter;
