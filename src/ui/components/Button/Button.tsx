'use client';
import styled from 'styled-components';

const StyledButton = styled('button')(props => ({
  background: props.theme.colors.primary,
  color: 'white',
  borderStyle: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '0.25rem',
  cursor: 'pointer',
}));

export default StyledButton;
